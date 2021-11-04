# GraphQL API using pure ESM

This test example uses all libraries that have full support for ESM:

- GraphQL EZ: [https://www.graphql-ez.com/](https://www.graphql-ez.com/)
- Envelop: [https://www.envelop.dev/](https://www.envelop.dev/)
- GraphQL Tools: [https://www.graphql-tools.com/](https://www.graphql-tools.com/)

And using a republish of the GraphQL.js library [https://npm.im/graphql](https://npm.im/graphql) called graphql-esm, which is full [Node.js ESM](https://nodejs.org/api/esm.html) with ["type": "module"](https://nodejs.org/api/packages.html#type). [https://npm.im/graphql-esm](https://npm.im/graphql-esm).

This example also uses [bob-tsm](https://github.com/PabloSzx/bob-esbuild/tree/main/packages/bob-tsm), which allows you to use TypeScript seemlesly, using [esbuild](https://esbuild.github.io/) behind the scenes.

## graphql-esm

You can use graphql-esm setting your package.json graphql dependency like this:

```json
{
  "dependencies": {
    "graphql": "npm:graphql-esm@^16.0.1"
  }
}
```

## Install & Run

> If you don´t have pnpm installed, you can do `npm i -g pnpm`

To install dependencies,

```sh
pnpm i
```

To run with watch mode

```sh
pnpm dev
```
