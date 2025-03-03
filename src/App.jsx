import AddTask from "./components/AddTask"
import Task from "./components/Task"
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import Title from "./components/Title"
const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  )

  const onCompletedTasks = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task
    })
    setTasks(newTask)
  }

  const onDeletedTasks = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(newTasks)
  }

  const onAddTask = ({ title, description }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTask={onAddTask} />
        <Task
          tasks={tasks}
          onCompletedTasks={onCompletedTasks}
          onDeletedTasks={onDeletedTasks}
        />
      </div>
    </div>
  )
}

export default App
