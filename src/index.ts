import { CreateApp } from "@graphql-ez/fastify";
import { ezAltairIDE } from "@graphql-ez/plugin-altair";
import { ezCodegen } from "@graphql-ez/plugin-codegen";
import { ezSchema, gql } from "@graphql-ez/plugin-schema";
import Fastify from "fastify";

const ez = CreateApp({
  ez: {
    plugins: [
      ezSchema({
        schema: {
          typeDefs: gql`
            type Query {
              hello: String!
            }
          `,
          resolvers: {
            Query: {
              hello() {
                return "Hello World";
              },
            },
          },
        },
      }),
      ezAltairIDE({
        initialQuery: "{hello}",
      }),
      ezCodegen({
        outputSchema: true,
      }),
    ],
  },
});

Fastify({
  logger: true,
})
  .get("/", (_req, res) => {
    res.redirect(307, "/altair");
  })
  .register(ez.buildApp().fastifyPlugin)
  .listen(8080);
