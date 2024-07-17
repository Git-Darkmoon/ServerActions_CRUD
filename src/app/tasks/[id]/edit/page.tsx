import { TaskForm } from "@/components/task-form"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"

export default async function TaskPageEdit({
  params,
}: {
  params: { id: string }
}) {
  const taskData = await prisma.task.findFirst({
    where: {
      id: parseInt(params.id as string),
    },
  })

  if (!taskData) redirect("/")

  return (
    <div className="flex justify-center items-center h-[calc(100dvh-6rem)]">
      <TaskForm task={taskData} />
    </div>
  )
}
