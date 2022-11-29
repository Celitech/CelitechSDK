<h1 align="center">
    <a style="text-decoration: none" href="https://www.celitech.com">
      <img width="300px" src="https://celitech.com/wp-content/uploads/2022/11/CELITECH-eSIM-Platform_2-1024x306.jpg" />
      <p align="center">CELITECH - eSIM API for Travel Companies </p>
    </a>
</h1>

Typescript/Javascript library for interacting with the Celitech API

![Lint/Test](https://github.com/Celitech/CelitechSDK/actions/workflows/linting.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@celitech/celitech-sdk)](https://www.npmjs.com/package/@celitech/celitech-sdk)

## Installation

```sh
npm install @celitech/celitech-sdk
# or
yarn add @celitech/celitech-sdk
```

## Setup

The package needs to be configured with your account's clientId and clientSecret, which is available in the <a style="text-decoration: none" href="https://www.celitech.net">Celitech Dashboard.</a>

```js
import Celitech from "@celitech/celitech-sdk";

const celitech = new Celitech({
  clientId: "CLIENT_ID",
  clientSecret: "CLIENT_SECRET",
  environment: "PRODUCTION",
});
```

| Option              | Required | Default     | Description                                                                                 |
| ------------------- | -------- | ----------- | ------------------------------------------------------------------------------------------- | 
| `clientId`          | `true`   |             | The Client ID to be used for OAUTH 2.0 - available on the dashboard                         |
| `clientSecret`      | `true`   |             | The Client Secret to be used for OAUTH 2.0 - available on the dashboard                     |
| `environment`       | `true`   |             | The environment used ( PRODUCTION or DEVELOPMENT ) - DEVELOPMENT is currently not supported |

## Usage example

```js
celitech.destinations
  .list()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

Or using ES modules and async/await:

```js
const response =await celitech.destinations.list();

console.log(response);
```
