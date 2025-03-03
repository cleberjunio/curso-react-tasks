import { ChevronRight, Trash } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

const Task = ({ tasks, onDeletedTasks, onCompletedTasks }) => {
  const navigate = useNavigate()

  const onSeeDetailsClick = (task) => {
    const params = new URLSearchParams()
    params.set("title", task.title)
    params.set("description", task.description)
    navigate(`/task?${params.toString()}`)
  }
  return (
    <ul className="space-y-4 flex flex-col p-6 bg-slate-200 rounded-md">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onCompletedTasks(task.id)}
            className={`w-full bg-slate-400 rounded-md text-white text-left p-2 ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
            {/*  {task.isCompleted ? "✅" : "❌"} */}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRight />
          </Button>
          <Button onClick={() => onDeletedTasks(task.id)}>
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Task
