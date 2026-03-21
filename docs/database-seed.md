# Database Seed

## Overview

The initial seed populates the database with sample data for development and manual testing.

## Seeded Data

### Users

- 1 organizer user
- 1 participant user

### Events

- 3 sample events created by the organizer

### Registrations

- sample registrations linking the participant to selected events

## Purpose

This seed exists to:

- speed up local development
- provide a consistent test dataset
- improve project demonstration
- support manual validation through Prisma Studio

## Command

````bash
pnpm prisma:seed
Notes

The seed clears existing data before inserting new records, ensuring a predictable local database state.


---

# Passo 8 — validar tudo

Agora rode:

```bash
pnpm prisma:generate
pnpm prisma:seed
pnpm check
````
