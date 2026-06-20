import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const taskStatusEnum = pgEnum("task_status", [
  "pending",
  "in-progress",
  "completed",
]);

export const tasks = pgTable("tasks", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  title: varchar("title", {
    length: 255,
  }).notNull(),

  description: varchar("description", {
    length: 1000,
  }),

  status: taskStatusEnum("status")
    .default("pending")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),
});