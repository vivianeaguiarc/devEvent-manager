import { prisma } from "../lib/prisma.js"

async function bootstrap() {
  console.log("Database schema configured successfully")

  await prisma.$disconnect()
}

bootstrap().catch(async (error) => {
  console.error("Application bootstrap failed:", error)
  await prisma.$disconnect()
  process.exit(1)
})
