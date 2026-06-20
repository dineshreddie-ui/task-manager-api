# Task Manager API

A Task Manager API built using Next.js, tRPC, PostgreSQL, and Drizzle ORM.

## Features

* Create a task
* Get all tasks
* Update task status
* Delete a task
* PostgreSQL database integration
* Type-safe APIs using tRPC
* Database schema management using Drizzle ORM

## Tech Stack

* Next.js
* TypeScript
* tRPC
* PostgreSQL
* Drizzle ORM

## Database Schema

### Tasks Table

| Column      | Type      | Description                     |
| ----------- | --------- | ------------------------------- |
| id          | UUID      | Primary Key (auto-generated)    |
| title       | String    | Required                        |
| description | String    | Optional                        |
| status      | Enum      | pending, in-progress, completed |
| created_at  | Timestamp | Creation time                   |

## API Endpoints (tRPC Procedures)

### createTask

Creates a new task.

### getTasks

Fetches all tasks.

### updateTask

Updates the status of a task.

### deleteTask

Deletes a task.

## Installation

```bash
pnpm install
```

## Environment Variables

Create a `.env` file:

```env
DATABASE_URL="postgresql://postgres:<password>@localhost:5432/task-manager-api"
```

## Database Setup

```bash
pnpm db:push
```

## Run Development Server

```bash
pnpm dev
```

## Build Project

```bash
pnpm build
```

## Author

Dinesh Kumar
