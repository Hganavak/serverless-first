# Serverless First
* Some of my initial experiments with Serverless Framework on AWS
* Supports unit testing and debugging with vs code

## Setup

Install Serverless Framework
```
npm install -g serverless
```

Install NPM modules
```
npm install
```

Obtain temporary AWS credentials for UoA account:
[AWS Temporary Credentials for CLI](https://wiki.auckland.ac.nz/pages/viewpage.action?spaceKey=UC&title=AWS+Temporary+Credentials+for+CLI)

## Debug Locally
* Inside vs code hit `F5` and select `Debug` as config file. Attach breakpoints as desired.

# Test
To run run of tests simply execute
```
npm test
```

To run tests and have them watch your files for changes:
```
npm exec testw
```

## Deploy to AWS

```
serverless deploy
```

*Note*: You can optionally pass a `--stage STAGE_NAME` flag (default `dev`).
