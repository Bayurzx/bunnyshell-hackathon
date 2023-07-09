variable "ID" {
  type        = string
  description = "Name of the S3 bucket"
}

variable "mime_types" {
  type = map(string)

  default = {
    "html" = "text/html"
    "ico"  = "image/x-icon"
    "jpg"  = "image/jpeg"
    "py"   = "text/x-python"
    "png"  = "image/png"
    "gif"  = "image/gif"
    "svg"  = "image/svg+xml"
    "mp4"  = "video/mp4"
    "mp3"  = "audio/mpeg"
    "js"   = "application/javascript"
    "css"  = "text/css"
    "json" = "application/json"
    "map"  = "application/json"
    "txt"  = "text/plain"


  }
}
