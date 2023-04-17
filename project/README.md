# web-template

This template should help get you started developing with Vue 3

## Getting started

Before you start, make sure you have a recent version of [NodeJS](http://nodejs.org/) environment *>=14.0*.

Use the commands below to set AEMO's proxy or disconnect from the VPN
```shell
npm config set proxy http://username:password@nemproxy:8080
npm config set https-proxy http://username:password@nemproxy:8080
npm config set strict-ssl false
```

[Add AEMO's npm registry](https://aemocdr.atlassian.net/wiki/spaces/ITDEV/pages/2278326414/Vue+3+-+Package+Setup)

## Recommended IDE Setup

[AEMO Standards](https://aemocdr.atlassian.net/wiki/spaces/ITDEV/pages/2278293621/Vue+3+-+Formatting+and+Linting#Linting-in-Project)

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
