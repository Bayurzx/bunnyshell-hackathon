OnlineSafetyGame In Containers
==============================

[OnlineSafetyGame On Development](https://development-yfusdh.bunnyenv.com/) 
<br>
<br>
On Amazon AWS
- [OnlineSafetyGame on Staging](http://onlinesafety-bunnyshell-abaf933.s3-website-us-east-1.amazonaws.com/) 

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) 
[![GitHub issues](https://img.shields.io/github/issues/bayurzx/bunnyshell-hackathon)](https://github.com/bayurzx/bunnyshell-hackathon/issues) 
[![GitHub stars](https://img.shields.io/github/stars/bayurzx/OnlineSafety)](https://github.com/bayurzx/bunnyshell-hackathon/stargazers)

https://github.com/Bayurzx/bunnyshell-hackathon

An simple web-based quiz game that educates users about online safety and emerging technology while providing an engaging and entertaining experience.

[![Video Title](https://img.youtube.com/vi/xPPbZhb1hOM/0.jpg)](https://www.youtube.com/watch?v=xPPbZhb1hOM)


<details>
<summary><strong style="font-size: 30px; color: lightblue;"> Inspiration</strong></summary>
<div style="padding-left:18px;"><code>The inspiration behind our project stemmed from the need to streamline web development and staging processes for efficient project success. We were motivated by the challenges developers face when setting up testing, development, and staging environments, which often involve complex configurations and time-consuming tasks. Our goal was to simplify and automate these processes, allowing developers to focus on building and deploying their applications quickly and seamlessly.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">What it does</strong></summary>
<div style="padding-left:18px"><code>Our project, powered by Bunnyshell, provides a comprehensive solution for testing, development, and staging environments. With the help of Docker and docker-compose, we created separate components for both the frontend and backend, allowing for modular and efficient development and testing. By leveraging Bunnyshell's Terraform template feature, we seamlessly deployed our environment to AWS for staging purposes. This enabled us to deploy the static site and conduct acceptance tests effortlessly.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">How we built it</strong></summary>
<div style="padding-left:18px"><code>To build our project, we utilized Docker and docker-compose to orchestrate the containers for frontend and backend development. We wrote a docker-compose.yaml file to establish the necessary connections and expose the site on HTTPS for secure access during the development phase. For staging, we took advantage of Bunnyshell's Terraform template feature, which allowed us to deploy our environment to AWS with ease. By combining these technologies and leveraging Bunnyshell's platform, we were able to create a streamlined workflow for testing, development, and staging.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">Challenges we ran into</strong></summary>
<div style="padding-left:18px"><code>Throughout the development process, we encountered various challenges that required innovative solutions and problem-solving skills. One of the challenges was setting up the separate components for frontend and backend testing in the Docker environment. We had to carefully configure the docker-compose.yaml file to ensure the proper interaction between the components. Additionally, deploying the environment to AWS using Bunnyshell's Terraform template required thorough understanding and configuration of the template to meet our project's requirements. Overcoming these challenges involved extensive testing, troubleshooting, and collaboration.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">Accomplishments that we're proud of</strong></summary>
<div style="padding-left:18px"><code>We are proud of several accomplishments in the development of our project. Firstly, successfully creating separate components for frontend and backend testing allowed for efficient and modular development. This approach enhanced our productivity and enabled us to identify and fix issues more effectively. Additionally, deploying the environment to AWS using Bunnyshell's Terraform template was a significant achievement. It simplified the deployment process and provided us with a scalable and secure staging environment. Overall, these accomplishments contributed to a streamlined and efficient development and staging workflow.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">What we learned</strong></summary>
<div style="padding-left:18px"><code>Throughout the development process, we gained valuable insights and learning experiences. We learned the importance of using Docker and docker-compose to create modular and scalable development environments. Additionally, we expanded our knowledge of Terraform and how it can simplify the deployment process, particularly when integrated with Bunnyshell's platform. We also learned the significance of effective collaboration and problem-solving in overcoming technical challenges. These learnings will undoubtedly enhance our future projects and development workflows.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">What's next for OnlineSafetyGame</strong></summary>
<div style="padding-left:18px"><code>Looking ahead, we have several plans to further enhance the OnlineSafetyGame project. We aim to incorporate more advanced features and functionality, such as user authentication and personalized profiles. We also plan to expand the game's content and scenarios, covering a broader range of online safety topics. Additionally, we will gather user feedback and conduct thorough testing to identify any improvements and refinements needed. Our goal is to continuously evolve and improve the OnlineSafetyGame, making it an engaging and educational platform for users to learn and practice online safety.</code></div>

</details>

---

<details>
<summary><strong style="font-size: 30px; color: lightblue;">Technologies Used</strong></summary>

#### 💻 Frontend:

-   Framework: React.js, Next.js
-   Styling: Tailwind CSS
-   Testing: Cypress

#### ⚙️ Backend:

-   Smart Contracts: Solidity, Hardhat
-   Deployment: CircleCI, AWS, Vercel

#### 🔗 Integration:

-   Chainlink: VRF (Verifiable Random Function) nodes
-   Chainlink Automations

#### 🔗 Testing:

-   frontend: Cypress
-   Backend: Hardhat waffle suite, Mocha

#### 🔗 IaC:

-   Terraform

####  EaaS:
-   Bunnyshell Environment as a Service

</details>

---




## Branches and Environment
---
### Testing

- Branch Name: `testing`
- Environment: Testing Environment

The `testing` branch is dedicated to testing purposes. It contains the latest code changes and features under development. The testing environment is specifically set up to validate the functionality and behavior of frontend and backend independently before releasing it to production. To use the `testing` branch:

1. Clone the repository and switch to the `testing` branch.
2. Follow the instructions provided in the README files to set up and run the application in the testing environment.
3. Perform testing and provide feedback or report any issues you encounter.

```
.
...
├── backend                           # Backend files are copied and used in test
│   ├── Dockerfile                    # Contains the setup for backend image
│   ├── contracts
│   │   ├── OnlineSafetyGame.backup
│   │   ├── OnlineSafetyGame.sol
│   │   ├── PriceConverter.sol
│   │   └── test                      # Contains extra files needed only for test
...
│   ├── gas-report.txt                # Gives a gas report optimization during test build
│   ├── hardhat.config.js             # Config for hardhat setup
│   ├── helper-hardhat-config.js      # Helps me manipulate data for different chains
│   ├── package.json                  # Contains all libraries and modules for build
│   ├── scripts                       # Helps me run blockchain actions
│   │   ├── enterGame.js 
│   │   └── mockOffchain.js
...
│   ├── test                          # Here lies all my test script
│   │   ├── staging
│   │   └── unit
│   ├── utils
│   │   └── verify.js
│   ├── yarn-error.log
│   └── yarn.lock
...
├── docker-compose.yaml               # Here is the docker-compose config that creates container for backend and frontend separately
├── frontend                          # frontend files are copied and used in test
│   ├── Dockerfile                    # Contains the setup for frontend image
...
│   ├── components                    # React components
...
│   ├── cypress                       # Cypress library to help me with frontend tests
│   │   ├── component
│   │   ├── e2e
│   │   ├── fixtures
│   │   ├── screenshots
│   │   └── support
│   ├── cypress.config.js
...
│   ├── package.json                  # Contains all libraries and modules for build
│   ├── pages
...
│   ├── public
│   │   ├── Screenshot.gif
...
│   └── yarn.lock
...
```

---
## Staging

- Branch Name: `tf`
- Environment: Staging Environment

The `tf` branch is specifically used for Terraform configuration files and setup. It is responsible for provisioning the necessary infrastructure for the staging environment. The staging environment deploys to the cloud and propagates the files using AWS Cloudfront CDN, it closely resembles the production setup and is used for final testing and validation. To use the `tf` branch:

1. Clone the repository and switch to the `tf` branch.
2. Review the Terraform configuration files and make any necessary modifications to match your staging environment requirements.
3. Follow the instructions provided in the README file within the `bunnyshell/terraform` directory to deploy the infrastructure using Terraform.

```


├── Dockerfile                      # was not used; ignore files I don't comment
...
├── backend                         # was not used
│   ├── contracts
...
├── bunnyshell                      # Houses terraform files
...
│   └── terraform                   # terraform files for Staging environment Setup
│       ├── acceptance.sh           # script for /bin/bash (bash aka bourne again shell)
│       ├── acceptance2.sh          # script for /bin/sh (sh aka lame ol' shell)
│       ├── bunnyshell.yaml         # Here is the config file for bunnyshell to setup your terraform
│       ├── main.tf                 # terraform entry file
│       ├── terraform.tfvars        # This file was not used, variables where injected inline
│       └── variables.tf            # definition file
...
├── frontend                        # we used the out\ static directory in frontend
│   ├── README.md
...
│   ├── components
│   │   ├── Chart.jsx
...
│   │   ├── contact-section-one.jsx
...
│   ├── out                         # Contains static files we are pushing to AWS S3 for static content which is CDN distributed through cloudfront
...

```
---

## Development

- Branch Name: `development`
- Environment: Development Environment

The `development` branch is intended for ongoing development work. It includes the latest stable features and enhancements that are being actively developed. The development environment allows developers to work on both frontend and backend features dependently, make changes, and test them locally. To use the `development` branch:

1. Clone the repository and switch to the `development` branch.
2. Follow the instructions provided in the respective README files .
3. Contribute to the development efforts by implementing new features or fixing bugs. Submit your changes via pull requests for review and merging into the `development` branch.

# Development
``` md

.
├── Dockerfile                          # Contains the setup for combining fronend and backend as one image
...
├── backend                             # backend dir
│   ├── contracts
...
├── docker-compose.yaml                 # docker-compose.yaml build image and exposes port 3000 for view
├── frontend                            # frontend dir
...
│   ├── components
│   │   ├── Chart.jsx                   # contains one of `Tim's Creatives` component ( hint it rhymes with kraph, giraffe)
...
│   │   ├── contact-section-one.jsx     # also contains one of `Tim's Creatives` component
...
│   ├── data
│   │   ├── PointsDb.js                 # makeshift db
│   │   └── localDb.js
...
│   ├── package.json                    # npm packages for build
│   ├── pages
│   │   ├── _app.js
│   │   ├── api
│   │   ├── game.js
│   │   └── index.js
│   ├── postcss.config.js
│   ├── public
...
│   │   ├── assets                      # development assets like audio, images
...
...
│   ├── styles
...
│   └── yarn.lock
...

```


## Technical Summary:

### Overview:
The project consists of multiple components, including a backend, frontend, and Terraform configuration. It follows a microservices architecture and aims to provide a comprehensive solution for online safety. The system incorporates bunnyshell environment as a service technology and tools to achieve its objectives.

### Purpose:
The purpose of the project is to develop and deploy an application that focuses on online safety with the help of a short quiz 😊. It includes both frontend and backend components to provide a user-friendly interface and handle the necessary business logic. We created the app in three environments testing, development and staging to deliver a secure and efficient experience.

### Architecture:
The system follows a microservices architecture, where the backend and frontend components are decoupled to allow for independent development in the testing stage; development, deployment, and scalability in the development stage; and with the help of terraform, cloud staging deployment, cloud content distribution in the staging stage. The backend is responsible for handling blockchain and web3 logic and data management, while the frontend provides the user interface and interacts with the backend through defined APIs.

### Features:
- The backend component includes contracts, scripts, and utilities for implementing online safety features.
- The frontend component consists of React components, pages, and stylesheets to create an intuitive user interface and awesome chart representation thanks to `Tim Creative's Templates`
- Terraform configuration files facilitate the infrastructure setup for deploying the system to the cloud distributed networks.

### Concepts:
- The project employs decentralized contracts to enforce online safety rules and protocols.
- React components are used to build the user interface, ensuring a modular and reusable design. Thanks again `Tim Creatives'`
- Terraform is utilized to manage infrastructure as code, enabling easy deployment and scalability.

### Integration:
The backend and frontend components are integrated through APIs, allowing seamless communication and data exchange. The contracts are deployed to a blockchain network using Moralis react-moralis, providing a decentralized and transparent solution. The Terraform configuration files are integrated with a AWS cloud provider to automate infrastructure provisioning.

### Deployment:
The system can be deployed using Docker containers and orchestrated using Docker Compose or other container orchestration platforms. The deployment process involves building and running the backend, frontend, and necessary infrastructure components using the defined configuration files. Multiple environments are utilized for different stages of development and testing.

### Testing:
The system incorporates testing practices to ensure the quality and reliability of the application. Testing is performed at different levels, including unit testing at the backend, integration testing, and end-to-end testing. Testing environments are set up specifically for running tests and validating the functionality of the system independently. Automated testing frameworks, such as Cypress, may be used for frontend testing, while backend testing may involve frameworks like Mocha or Jest.

### Development:
The development environment is used for local development and debugging of the backend and frontend components thanks to bunnyshell containers. Developers work on individual features, make code changes, and test them locally before pushing to the repository. Local development environments are set up with the necessary dependencies and tools to facilitate efficient development.

### Staging:
The staging environment is a replica of the production environment where the application is deployed for final testing and validation before releasing it to production. The staging environment closely resembles the production setup, allowing thorough testing of the application's functionality, performance, and compatibility. It helps identify and resolve any issues or bugs before deploying to the production environment.

### Scalability and Performance:
The microservices architecture enables horizontal scalability, allowing individual components to scale independently based on demand. Containerization provides flexibility in managing resource allocation, and the use of cloud services or container orchestration platforms allows dynamic scaling to handle increased traffic. Performance optimizations, such as caching and load balancing, can be implemented at different layers to ensure efficient and responsive operations.

### Security:
The project incorporates security measures at various levels. Contracts are designed to enforce security protocols and protect user data. Secure coding practices are followed during frontend and backend development to prevent common vulnerabilities. Access controls and authentication mechanisms are implemented to ensure authorized access to resources. Continuous monitoring, vulnerability scanning, and regular updates contribute to maintaining a secure system environment.


## Contributions and Issue Reporting

We welcome contributions from the community! If you find any bugs, have suggestions for improvements, or would like to contribute new features, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch based on the branch that best aligns with your changes (e.g., `testing`, `development`, or `tf`).
3. Make your changes and commit them to your branch.
4. Submit a pull request to the original repository, clearly describing the changes you made and any additional information that may be helpful.
5. We will review your contribution and provide feedback. Once the changes are approved, your code will be merged into the corresponding branch.

If you encounter any issues or have questions related to the Online Safety project, please use the GitHub issue tracking system to report them. Provide detailed information about the problem you encountered, including steps to reproduce it if possible.

Contact
-------

For any inquiries or feedback, please reach out to
- <a href="mailto:bayurzx@gmail.com?subject=Hello%20Adebayo&body=Hi?">Me</a>

* * * * *

Thank you for your interest in the project. Let's have fun while learning and promoting online safety in containers! 😄🔒

---    
<a href="https://nowpayments.io/donation?api_key=TEF3EEX-MSCMF8R-MTMYQEM-37X7B2Q&source=lk_donation&medium=referral" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee">
</a>
