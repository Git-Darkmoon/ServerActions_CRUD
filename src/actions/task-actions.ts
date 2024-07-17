"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const createTask = async (formData: FormData) => {
  const data = Object.fromEntries(formData)

  if (!data) return

  const newTask = await prisma.task.create({
    data: {
      name: data.taskName as string,
      description: data.taskDescription as string,
      priority: data.taskPriority as string,
    },
  })

  // console.log(newTask)
  redirect("/")
}

export const removeTask = async (formData: FormData) => {
  const taskId = formData.get("taskId")

  if (!taskId) return

  await prisma.task.delete({
    where: {
      id: parseInt(taskId as string),
    },
  })
  revalidatePath("/")
}

export const updateTask = async (formData: FormData) => {
  await prisma.task.update({
    where: {
      id: parseInt(formData.get("taskId") as string),
    },
    data: {
      name: formData.get("taskName") as string,
      description: formData.get("taskDescription") as string,
      priority: formData.get("taskPriority") as string,
    },
  })
  redirect("/")
}
