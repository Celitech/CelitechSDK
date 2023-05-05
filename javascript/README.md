<h1 align="center">
    <a style="text-decoration: none" href="https://www.celitech.com">
      <img width="300px" src="https://raw.githubusercontent.com/Celitech/CelitechSDK/main/assets/logo.png" />
      <p align="center">CELITECH - eSIM API for Travel Companies </p>
    </a>
</h1>
<h2 align="center">
  <a href="https://celitech.com">Website</a> | <a href="https://docs.celitech.com">Documentation</a>
<h2>

Typescript/Javascript library for interacting with the Celitech API

![CI](https://github.com/Celitech/CelitechSDK/actions/workflows/linting.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@celitech/celitech-sdk)](https://www.npmjs.com/package/@celitech/celitech-sdk)

## API Reference

For a complete API reference with code examples for each endpoint in different languages - Make sure to visit https://docs.celitech.com

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

| Option         | Required | Default | Description                                                                       |
| -------------- | -------- | ------- | --------------------------------------------------------------------------------- |
| `clientId`     | `true`   |         | The Client ID to be used for OAUTH 2.0 - available on your Celitech dashboard     |
| `clientSecret` | `true`   |         | The Client Secret to be used for OAUTH 2.0 - available on your Celitech dashboard |

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
