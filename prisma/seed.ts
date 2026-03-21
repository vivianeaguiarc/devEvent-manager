import "dotenv/config"

import { PrismaPg } from "@prisma/adapter-pg"

import {
  PrismaClient,
  RegistrationStatus,
  UserRole,
} from "../src/generated/prisma/client"

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined")
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString,
  }),
})

async function main() {
  await prisma.registration.deleteMany()
  await prisma.event.deleteMany()
  await prisma.user.deleteMany()

  const organizer = await prisma.user.create({
    data: {
      name: "Viviane Organizer",
      email: "organizer@dev-event-manager.local",
      password: "123456",
      role: UserRole.ORGANIZER,
    },
  })

  const participant = await prisma.user.create({
    data: {
      name: "Viviane Participant",
      email: "participant@dev-event-manager.local",
      password: "123456",
      role: UserRole.PARTICIPANT,
    },
  })

  const event1 = await prisma.event.create({
    data: {
      title: "Node.js para APIs Escaláveis",
      description:
        "Evento prático sobre arquitetura de APIs modernas com Node.js e TypeScript.",
      slug: "nodejs-para-apis-escalaveis",
      location: "Online",
      startsAt: new Date("2026-04-10T19:00:00.000Z"),
      endsAt: new Date("2026-04-10T21:00:00.000Z"),
      capacity: 100,
      organizerId: organizer.id,
    },
  })

  const event2 = await prisma.event.create({
    data: {
      title: "Prisma ORM na prática",
      description:
        "Workshop introdutório de modelagem, migrations e queries com Prisma ORM.",
      slug: "prisma-orm-na-pratica",
      location: "São Paulo - SP",
      startsAt: new Date("2026-04-15T18:30:00.000Z"),
      endsAt: new Date("2026-04-15T21:30:00.000Z"),
      capacity: 50,
      organizerId: organizer.id,
    },
  })

  const event3 = await prisma.event.create({
    data: {
      title: "Clean Code e arquitetura para backend",
      description:
        "Encontro voltado para organização de projetos backend e boas práticas de engenharia.",
      slug: "clean-code-e-arquitetura-para-backend",
      location: "Campinas - SP",
      startsAt: new Date("2026-04-20T17:00:00.000Z"),
      endsAt: new Date("2026-04-20T20:00:00.000Z"),
      capacity: 80,
      organizerId: organizer.id,
    },
  })

  await prisma.registration.create({
    data: {
      userId: participant.id,
      eventId: event1.id,
      status: RegistrationStatus.CONFIRMED,
    },
  })

  await prisma.registration.create({
    data: {
      userId: participant.id,
      eventId: event2.id,
      status: RegistrationStatus.CONFIRMED,
    },
  })

  console.log("Seed executed successfully")
  console.log({
    organizer: organizer.email,
    participant: participant.email,
    events: [event1.slug, event2.slug, event3.slug],
  })
}

main()
  .catch(async (error) => {
    console.error("Seed failed:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
