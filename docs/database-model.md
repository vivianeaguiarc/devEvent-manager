# Database Model

## Overview

The initial database model for Dev Event Manager is composed of three core entities:

- User
- Event
- Registration

## User

Represents a platform user.

Responsibilities:

- authenticate in the future
- act as participant or organizer
- create events when allowed
- register for events

## Event

Represents a technology event created by an organizer.

Main attributes:

- title
- description
- slug
- location
- start and end dates
- capacity

## Registration

Represents a user's registration in an event.

Main attributes:

- registration status
- optional check-in timestamp
- unique user/event constraint

## Business Constraints

- a user cannot register twice for the same event
- an event belongs to one organizer
- an event can have many registrations
- a user can register in many events

## Technical Notes

The schema uses:

- UUID primary keys
- enums for constrained values
- mapped table names
- composite unique constraints
- indexes for query support
