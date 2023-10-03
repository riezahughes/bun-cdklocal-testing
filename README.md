# Welcome to your CDK TypeScript project

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`BunCdkTestingStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `bun run build`   compile typescript to js
* `bun run watch`   watch for changes and compile
* `bun run test`    perform the jest unit tests
* `bun run cdk:local` runs the localstack deploy of the cdk

* `cdklocal deploy`      deploy this stack to your default AWS account/region
* `cdklocal diff`        compare deployed stack with current state
* `cdklocal synth`       emits the synthesized CloudFormation template