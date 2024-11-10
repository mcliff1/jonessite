This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In Progress: using bootstrap Albumn/Carousel template to model some styling

## IN progress
(2022-04-26) Haven't updated since 2021 when Travis-CI was still running, converting to Github Actions


## To Publish to GH Pages

2021-01-07 - currently this doesnt run;  to-do make it trigger on commit or special tag

Create Travis CI file

**Node Changes**
1. run `npm install gh-pages --save-dev`
1. add to package.json
  - *homepage: https://mcliff1.github.io/jonessite*
  - *predeploy: npm run build*
  - *deploy: gh-pages -d build*

## To Publish to S3 (single env on master commit)

Deployed to [TruckingColorado.com](https://www.truckingcolorado.com/) for Production or [mccsbx-truckingcolorado](https://truckingcolorado.mattcliff.net/)

For Travis CI to build to S3 static site
1. Add *AWS_ACCESS_KEY_ID* and *AWS_SECRET_ACCESS_KEY* from User Access Key to Travis CI project settings
2. expects to deploy to a specific AWS Account/Region where an expected Stack is already deployed


[![Build Status](https://travis-ci.org/mcliff1/jonessite.svg?branch=master)](https://travis-ci.org/mcliff1/jonessite)


# Release Notes

Date | Comment
---|---
2024-11-09|Update to Nodejs22, React 18
2024-11-09|Updated to Nodejs18, React 18