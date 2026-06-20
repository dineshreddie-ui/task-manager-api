import { z } from "zod";
import { eq } from "drizzle-orm";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { tasks } from "@/server/db/schema";
import { db } from "@/server/db";

export const taskRouter = createTRPCRouter({
  createTask: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
        description: z.string().optional(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db.insert(tasks).values({
        title: input.title,
        description: input.description,
      });
    }),

 

getTasks: publicProcedure
  .input(
    z.object({
      status: z
        .enum(["pending", "in-progress", "completed"])
        .optional(),
      page: z.number().default(1),
      limit: z.number().default(10),
    }),
  )
  .query(async ({ input }) => {
    const { status, page, limit } = input;

    const offset = (page - 1) * limit;

    if (status) {
      return await db
        .select()
        .from(tasks)
        .where(eq(tasks.status, status))
        .limit(limit)
        .offset(offset);
    }

    return await db
      .select()
      .from(tasks)
      .limit(limit)
      .offset(offset);
  }),

  updateTask: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        status: z.enum([
          "pending",
          "in-progress",
          "completed",
        ]),
      }),
    )
    .mutation(async ({ input }) => {
      return await db
        .update(tasks)
        .set({
          status: input.status,
        })
        .where(eq(tasks.id, input.id));
    }),

  deleteTask: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
      }),
    )
    .mutation(async ({ input }) => {
      return await db
        .delete(tasks)
        .where(eq(tasks.id, input.id));
    }),
});