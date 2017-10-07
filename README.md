# serverless-reactJS-codePipeline
Automated deployment for Serverless and React using AWS codePipeline. This repo contains the examples, reference documents mentioned in this [medium post](https://medium.com/@lakshmanLD/automated-deployment-of-serverless-and-react-using-aws-codepipeline-e268bbb032e).

## Technical Architecture:
![Automation Architecture](https://raw.githubusercontent.com/lakshmantgld/serverless-reactJS-codePipeline/master/readmeFiles/architecture.png)

## Build Notifications Workflow:
![Build Notifications workflow](https://raw.githubusercontent.com/lakshmantgld/serverless-reactJS-codePipeline/master/readmeFiles/buildNotifications.png)

### Instructions to deploy the Lambda - Slack:

1. Duplicate the `codebuild/config.copy.yml` file and rename it as `codebuild/config.yml`. Add the **SNS** ARN and slack channel's webhook to the `codebuild/config.yml`.
2. If you take a look at the `codebuild/serverless.yml` file, you will see two lambda function defenitions for success and failure scenario. The `codebuild/handler.js` will contain the code to get message from SNS and notify it to slack channel.
3. `cd codeBuild` and `sls deploy`.
4. This will deploy the Lambda and the whole build notification setup in place.
