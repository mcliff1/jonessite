This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


In Progress: using bootstrap Albumn/Carousel template to model some styling


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

Deployed to [TruckingColorado.com](https://www.truckingcolorado.com/)

For Travis CI to build to S3 static site
1. Add *AWS_ACCESS_KEY_ID* and *AWS_SECRET_ACCESS_KEY* from User Access Key to Travis CI project settings
2. expects to deploy to a specific AWS Account/Region where an expected Stack is already deployed


[![Build Status](https://travis-ci.org/mcliff1/jonessite.svg?branch=master)](https://travis-ci.org/mcliff1/jonessite)


## Install Node Packages

Install the following
```
npm install tsutils
npm install typescript
npm install bootstrap
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
