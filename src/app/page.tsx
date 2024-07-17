import TaskCard from "@/components/task-card"
import prisma from "@/lib/prisma"

export default async function HomePage() {
  const tasks = await prisma.task.findMany()

  if (tasks.length === 0) {
    return (
      <div>
        <p>There are no tasks yet.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />
      })}
    </div>
  )
}
