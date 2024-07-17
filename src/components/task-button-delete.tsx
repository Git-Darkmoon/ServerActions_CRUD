import { removeTask } from "@/actions/task-actions"
import { Button } from "./ui/button"

export default function TaskButtonDelete({ taskId }: { taskId: number }) {
  return (
    <form action={removeTask}>
      <input type="hidden" name="taskId" value={taskId} />
      <Button variant="destructive">Delete</Button>
    </form>
  )
}
