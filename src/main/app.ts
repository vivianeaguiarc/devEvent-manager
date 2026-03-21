import swagger from "@fastify/swagger"
import swaggerUi from "@fastify/swagger-ui"
import Fastify from "fastify"

export async function buildApp() {
  const app = Fastify({
    logger: true,
  })

  await app.register(swagger, {
    openapi: {
      openapi: "3.0.3",
      info: {
        title: "Dev Event Manager API",
        description:
          "API documentation for the Dev Event Manager portfolio project.",
        version: "1.0.0",
      },
      servers: [
        {
          url: "http://localhost:3333",
          description: "Local development server",
        },
      ],
      tags: [
        {
          name: "Health",
          description: "Application health check endpoints",
        },
        {
          name: "Events",
          description: "Event management endpoints",
        },
      ],
    },
  })

  await app.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "list",
      deepLinking: false,
    },
    staticCSP: true,
  })

  app.get(
    "/health",
    {
      schema: {
        tags: ["Health"],
        summary: "Health check",
        description: "Returns the current status of the application.",
        response: {
          200: {
            type: "object",
            properties: {
              status: { type: "string" },
            },
          },
        },
      },
    },
    async () => {
      return { status: "ok" }
    }
  )

  app.get(
    "/events",
    {
      schema: {
        tags: ["Events"],
        summary: "List events",
        description: "Returns a list of available events.",
        response: {
          200: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                title: { type: "string" },
                slug: { type: "string" },
                location: { type: "string" },
              },
            },
          },
        },
      },
    },
    async () => {
      return [
        {
          id: "1",
          title: "Node.js para APIs Escaláveis",
          slug: "nodejs-para-apis-escalaveis",
          location: "Online",
        },
      ]
    }
  )

  return app
}
