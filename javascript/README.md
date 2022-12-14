<h1 align="center">
    <a style="text-decoration: none" href="https://www.celitech.com">
      <img width="300px" src="https://celitech.com/wp-content/uploads/2022/11/CELITECH-eSIM-Platform_2-1024x306.jpg" />
      <p align="center">CELITECH - eSIM API for Travel Companies </p>
    </a>
</h1>
<h2 align="center">
  <a href="https://celitech.com">Website</a> | <a href="https://docs.celitech.com">Documentation</a>
<h2>

Typescript/Javascript library for interacting with the Celitech API

![CI](https://github.com/Celitech/CelitechSDK/actions/workflows/linting.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@celitech/celitech-sdk)](https://www.npmjs.com/package/@celitech/celitech-sdk)

## Usage Documentation

You can find general usage documentation at <https://docs.celitech.com>. For complete API documentation with code examples for each endpoint in all of our official client libraries head over to our API documentation site at <https://api.celitech.com>.

## Installation

```sh
npm install @celitech/celitech-sdk
# or
yarn add @celitech/celitech-sdk
```

## Setup

The package needs to be configured with your account's clientId and clientSecret, which are available in the <a style="text-decoration: none" href="https://www.celitech.net">Celitech Dashboard.</a>

```js
import { Celitech } from "@celitech/celitech-sdk";

const celitech = new Celitech({
  clientId: "CLIENT_ID",
  clientSecret: "CLIENT_SECRET",
  environment: "PRODUCTION",
});
```

| Option         | Required | Default | Description                                                                                 |
| -------------- | -------- | ------- | ------------------------------------------------------------------------------------------- |
| `clientId`     | `true`   |         | The Client ID to be used for OAUTH 2.0 - available on your Celitech dashboard               |
| `clientSecret` | `true`   |         | The Client Secret to be used for OAUTH 2.0 - available on your Celitech dashboard           |
| `environment`  | `true`   |         | The environment used ( PRODUCTION or DEVELOPMENT ) - DEVELOPMENT is currently not supported |

## Basic example

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
const response = await celitech.destinations.list();

console.log(response);
```
