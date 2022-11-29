<h1 align="center">
    <a style="text-decoration: none" href="https://www.celitech.com">
      <img width="120" src="https://avatars.githubusercontent.com/u/29673218?s=200&v=4" />
      <p align="center">Svix - Webhooks as a service</p>
    </a>
</h1>

Typescript/Javascript library for interacting with the Celitech API

![GitHub tag](https://img.shields.io/github/tag/Celitech/CelitechSDK.svg)
[![NPM version](https://img.shields.io/npm/v/Celitech.svg)](https://www.npmjs.com/package/@celitech/celitech-sdk)

# Usage Documentation

You can find general usage documentation at <https://docs.svix.com>. For complete API documentation with code examples for each endpoint in all of our official client libraries head over to our API documentation site at <https://api.svix.com>.

# Language Support

<table style="table-layout:fixed; white-space: nowrap;">
  <th colspan="2">⚡️ Features ⚡️</th>
  <tr>
    <th>Officially Supported</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>API Support</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Signature Verification</th>
    <th>✅</th>
  </tr>
  <tr>
    <th>Caveats</th>
    <th>None! 🚀</th>
  </tr>
</table>

# Installation

```sh
npm install svix
# or
yarn add svix
```

# Usage

```js
import { Svix } from "svix";

const svix = new Svix("AUTH_TOKEN");
const app = await svix.application.create({ name: "Application name" });
```

# Development

First checkout the [core README](../README.md#development) for details on how to generate our API bindings, then follow the steps below.

## Requirements

- node
- yarn

## Building the library

```sh
yarn
yarn build
```

## Contributing

Before opening a PR be sure to format your code!

```sh
yarn lint:fix
```

## Running Tests

Simply run:

```sh
yarn test
```
