import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"
import { createTask, updateTask } from "@/actions/task-actions"
import { Task } from "@prisma/client"
import Link from "next/link"

const taskPriorities = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "high",
    label: "High",
  },
  {
    value: "urgent",
    label: "Urgent",
  },
]

export function TaskForm({ task }: { task?: Task }) {
  const functionAction = task?.id ? updateTask : createTask

  return (
    <form action={functionAction}>
      <input type="hidden" name="taskId" value={task?.id} />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{task?.id ? "Edit Task" : "Create Task"}</CardTitle>
          <CardDescription>
            Fill out the form to create a new task
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                required
                id="name"
                name="taskName"
                placeholder="Name of your task"
                defaultValue={task?.name}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                required
                id="description"
                name="taskDescription"
                placeholder="Description of your task"
                defaultValue={task?.description as string}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="taskPriority">Priority</Label>
              <Select
                name="taskPriority"
                defaultValue={task?.priority}
                required
              >
                <SelectTrigger id="taskPriority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {taskPriorities.map((option) => {
                    return (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
            Cancel
          </Link>
          <Button>{task?.id ? "Update Task" : "Create Task"}</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
