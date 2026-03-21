import { buildApp } from "./app.js"

async function bootstrap() {
  const app = await buildApp()

  await app.listen({
    port: 3333,
    host: "0.0.0.0",
  })

  app.log.info("HTTP server running on http://localhost:3333")
  app.log.info("Swagger UI available on http://localhost:3333/docs")
}

bootstrap().catch((error) => {
  console.error("Application bootstrap failed:", error)
  process.exit(1)
})
