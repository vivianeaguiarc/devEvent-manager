# Architecture Overview

## Architectural Approach

The project follows a modular architecture inspired by principles from Clean Architecture.

The codebase is structured to separate responsibilities and maintain scalability.

## Directory Structure

src
├ app
├ shared
│ ├ constants
│ ├ types
│ ├ utils
│ └ errors
└ main

## Responsibilities

### app

Contains business modules of the system.

Examples:

- users
- events
- registrations

### shared

Contains reusable components used across the project.

Examples:

- utility functions
- shared types
- constants
- error handling

### main

Application bootstrap and entry point.

## Future Backend Layers

The backend modules will follow this internal structure:

module
├ controllers
├ use-cases
├ repositories
├ schemas
└ routes

This separation improves:

- maintainability
- testability
- scalability

## Database

The project will use:

- PostgreSQL
- Prisma ORM

## Runtime Environment

The application will run inside Docker containers to ensure reproducibility across environmen
