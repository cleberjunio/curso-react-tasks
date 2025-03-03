import { useState } from "react"
import Input from "./Input"
const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
    <div className="bg-slate-300 rounded-md  text-left p-4 flex flex-col gap-2 space-y-4">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Digite o título da Tarefa"
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Digite a descrição da Tarefa"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha o título e a descrição da tarefa")
          onAddTask({ title, description })
          setTitle("")
          setDescription("")
        }}
        className="bg-slate-500 rounded-md p-2"
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask
