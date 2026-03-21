# Technical Conventions

This document defines the technical standards used in the project.

## Package Manager

pnpm

## Language

TypeScript

## Code Formatting

Prettier is responsible for formatting the codebase.

Rules include:

- single quotes
- no semicolons
- consistent indentation

## Linting

ESLint enforces code quality and consistency.

Plugins used:

- typescript-eslint
- simple-import-sort

## Commit Convention

This project follows the Conventional Commits specification.

Examples:

feat: add event registration endpoint
fix: correct user validation logic
chore: update project dependencies
docs: update architecture documentation

Commit messages are validated using commitlint.

## Git Hooks

Husky is used to enforce checks before commits.

The following validations run before committing:

- lint
- prettier formatting

## Import Ordering

Imports are automatically sorted using:

eslint-plugin-simple-import-sort

## Folder Naming

Rules:

- lowercase
- english
- kebab-case if necessary

Example:

event-registration
shared-utils

## File Naming

Examples:

create-event.ts
user-controller.ts
event-repository.ts

## Type Naming

TypeScript types and interfaces must use PascalCase.

Example:

type EventRegistration
interface UserRepository

## Constants

Constants must be uppercase:

MAX_EVENT_PARTICIPANTS
DEFAULT_PAGE_SIZE

## Error Handling

Errors should be centralized under:

src/shared/errors

This ensures consistent error structures across the application.
