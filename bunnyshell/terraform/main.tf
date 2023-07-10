# Define parameters
# hashicorp/aws versions is "4.65.0" add to bunnyshell
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.65.0"
    }
  }
}


provider "aws" {
  profile = "terraform" # AWS Credentials Profile configured on your local desktop terminal  $HOME/.aws/credentials
  region  = "us-east-1"
  access_key = var.aws_access_key_id
  secret_key = var.aws_secret_access_key
}


locals {
  truncated_unique_id = substr(random_uuid.test.result, 0, 7)
}

resource "random_uuid" "test" {
}


# Create bucket resources
resource "aws_s3_bucket" "OnlineSafetyBS" {
  bucket = "onlinesafety-${var.ID}-${local.truncated_unique_id}"

  tags = {
    Name        = "Onlinesafety bucket for bunnyshell"
    Environment = "Staging"
  }

}

resource "aws_s3_object" "out" {
  for_each = fileset("../../frontend/out", "**/*")

  bucket = aws_s3_bucket.OnlineSafetyBS.id
  key    = each.value
  source = "../../frontend/out/${each.value}"
  etag   = filemd5("../../frontend/out/${each.value}")
  # content_type = "text/html"
  content_type = lookup(var.mime_types, element(split(".", each.key), length(split(".", each.key)) - 1))

  depends_on = [aws_s3_bucket.OnlineSafetyBS]

}


resource "aws_s3_bucket_website_configuration" "OnlineSafetyBS-website" {
  bucket = aws_s3_bucket.OnlineSafetyBS.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }

  # routing_rule {
  #   condition {
  #     key_prefix_equals = "docs/"
  #   }
  #   redirect {
  #     replace_key_prefix_with = "documents/"
  #   }
  # }
}

resource "aws_s3_bucket_public_access_block" "OnlineSafetyBS-ACL" {
  bucket = aws_s3_bucket.OnlineSafetyBS.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "OnlineSafetyBS-object_ownership" {
  bucket = aws_s3_bucket.OnlineSafetyBS.id

  rule {
    object_ownership = "ObjectWriter"
  }
}


resource "aws_s3_bucket_policy" "OnlineSafetyBS-Policy" {
  bucket = aws_s3_bucket.OnlineSafetyBS.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${aws_s3_bucket.OnlineSafetyBS.id}/*"
    }
  ]
}
EOF

  depends_on = [aws_s3_bucket.OnlineSafetyBS, aws_s3_object.out]
}






# Cloudfront
resource "aws_cloudfront_origin_access_identity" "CloudFrontOriginAccessIdentity" {
  comment = "Origin Access Identity for Serverless Static Website"
}

resource "aws_cloudfront_distribution" "WebpageCDN" {
  origin {
    domain_name = "onlinesafety-${var.ID}.s3-website-us-east-1.amazonaws.com"
    origin_id   = "webpage"
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "match-viewer" # https-only | http-only | match-viewer
      origin_ssl_protocols   = ["SSLv3", "TLSv1", "TLSv1.1", "TLSv1.2"]
    }
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }
    target_origin_id       = "webpage"
    viewer_protocol_policy = "allow-all" # changed back from redirect-to-https
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  depends_on = [aws_s3_bucket.OnlineSafetyBS, aws_s3_object.out]

}


# Call the curl command to check if your website is onine
resource "null_resource" "acceptance_test" {
  provisioner "local-exec" {
    command = "bash ./acceptance.sh ${local.truncated_unique_id}"
  }

  triggers = {
    acceptance_test_success = timestamp()
  }

  depends_on = [aws_s3_bucket.OnlineSafetyBS, aws_s3_object.out, aws_cloudfront_origin_access_identity.CloudFrontOriginAccessIdentity]
}



# Define outputs
output "WebsiteURL" {
  value       = "http://onlinesafety-bunnyshell-${local.truncated_unique_id}.s3-website-us-east-1.amazonaws.com/"
  description = "URL for website hosted on S3"
}

output "CloudFrontDomain" {
  value       = aws_cloudfront_distribution.WebpageCDN.domain_name
  description = "Domain name for the CloudFront distribution"
}

output "CloudFrontURL" {
  value       = "https://${aws_cloudfront_distribution.WebpageCDN.domain_name}"
  description = "URL for the CloudFront distribution"
}

output "truncated_unique_id" {
  value       = local.truncated_unique_id
  description = "Unique ID generated by Terraform (7 digits)"
}

output "acceptance_test_status" {
  value = length(null_resource.acceptance_test.triggers) > 0
  description = "Acceptance test succeeded"
}
