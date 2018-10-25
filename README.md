# Payvision Fullstack Challenge

## Introduction

This project was built to solve the Payvision Fullstack Challenge. You can visit the project requirements [here](https://github.com/payvision-development/recruitment-challenges/tree/fullstack-engineer).

## Installing

You need to have installed [node](https://nodejs.org/es/) and [npm](https://www.npmjs.com/). The project has been built with versions 10.11 of node and 6.4 of npm. You install and manage node versions with [nvm](https://github.com/creationix/nvm).

Once installed, you can install project dependencies with:

```sh
npm install
```

## Setting the environment

The project uses dotenv files to fill in the needed environment variables. Go to the `.env` file and fill in the variables with the info given in the [challenge repo](https://github.com/payvision-development/recruitment-challenges/tree/fullstack-engineer).

## Starting dev server

To start the project you can run the following command:

```sh
npm start
```

It will start a server on port **1234** that you can visit with your preferred browser.

## Running tests

You can run all tests with the following commands:

```sh
# Run tests once
npm test

# Run in watch mode
npm run test:watch

# Get coverage report
npm run coverage
```

You can visit the [Jest](https://jestjs.io/) documentation to see the more options for the test runner.

## Tooling

### React

React provides a high productivity framework to build web applications. It's specially great for debuggin, since the one-way data flow paradigm and the component based architecture allows to rapidly identify where in your application a problem is.

Component based architecture also benefits [code deletion](https://blog.codinghorror.com/the-best-code-is-no-code-at-all/) and behaviour refactoring.

### TypeScript

Static type analysis is an important part of validating code correctness. It allows to catch early bugs at creation time, also with the help of linters and text editor integration plugins.

For React there are two main tools for static analysis: Flow and TypeScript. I've picked up TypeScript because I've had never used it before and I wanted to use the project to give it a try.

### Emotion

Emotion is a tool for creating styled components. It has a really simple API and it's currently increadibly faster than other css-in-js soultions as [styled-components](https://github.com/styled-components/styled-components).\*

\* [emotion - The Next Generation of CSS-in-JS](https://medium.com/@tkh44/emotion-ad1c45c6d28b)

### Jest

Jest is hands down the best test framework for JavaScript. It's fast, almost zero configuration and allows to get coverage reports for free.

Although I have to say that integrating it with TypeScript has been a pain. Tests take way longer to execute with TypeScript and it doesn't like the **jest.mock** feature for mocking module dependencies...

Either way, Jest is awesome and with emotion you can even see the component styles in snapshot tests, which is amazing.

### Prettier

Prettier is another amazing tool. It allows you to never think of formatting code again, ever. It an amazing productivity tool.

### Parcel

Configuring Webpack is so tedius. I've been there. We've all been there.

With Parcel you can set up the project just with `npm i -D parcel-bundler`. It nows how to build and bundle any file and it will also install any missing dependency for you.

An amazing tool if you don't need to get into little optimization details.

### Dotenv

Dotenv allows to set environment variables for your project with `.env` files. You just need to specify each variable in a new line and you're set.

It also allows to use different files for each `NODE_ENV` by specifying `.env.${NODE_ENV}` in the file name.

Jest sets **NODE_ENV** automatically to **test** so I've created a `.env.test` to use for testing.
