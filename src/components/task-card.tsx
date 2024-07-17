import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Task } from "@prisma/client"
import clsx from "clsx"
import TaskButtonDelete from "./task-button-delete"
import Link from "next/link"

export default function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="shadow hover:shadow-md transition-all">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{task.name}</CardTitle>
        <Badge
          className={clsx({
            "bg-indigo-500": task.priority === "urgent",
            "bg-red-500": task.priority === "high",
            "bg-yellow-500": task.priority === "medium",
            "bg-green-500": task.priority === "low",
          })}
        >
          {task.priority}
        </Badge>
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
        <span className="text-slate-600  text-sm dark:text-slate-400">
          {new Date(task.created_at).toLocaleDateString()}
        </span>
      </CardContent>
      <CardFooter className="space-x-2">
        <TaskButtonDelete taskId={task.id} />
        <Link
          href={`/tasks/${task.id}/edit`}
          className={buttonVariants({ variant: "secondary" })}
        >
          Edit
        </Link>
      </CardFooter>
    </Card>
  )
}
