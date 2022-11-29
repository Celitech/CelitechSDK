<h1 align="center">
    <a style="text-decoration: none" href="https://www.celitech.com">
      <img width="300px" src="https://celitech.com/wp-content/uploads/2022/11/CELITECH-eSIM-Platform_2-1024x306.jpg" />
      <p align="center">Celitech - eSIM API</p>
    </a>
</h1>

Typescript/Javascript library for interacting with the Celitech API

![Lint/Test](https://github.com/Celitech/CelitechSDK/actions/workflows/linting.yml/badge.svg)
[![NPM version](https://img.shields.io/npm/v/@celitech/celitech-sdk)](https://www.npmjs.com/package/@celitech/celitech-sdk)

# Installation

```sh
npm install @celitech/celitech-sdk
```

# Usage

```js
import Celitech from "@celitech/celitech-sdk";

const celitech = new Celitech({
  clientId: "793hikbcujoq80spsl6hfa31tq",
  clientSecret: "12emhq07p3887v8qeaq7pkqffc3d8t0kjgle7hjgnn6oaajmda1c",
  environment: "PRODUCTION", // DEVELOPMENT environment is not supported yet
});
```
