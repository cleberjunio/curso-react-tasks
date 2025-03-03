import { useSearchParams } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Title from "../components/Title"
const TaskPage = () => {
  const navigator = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get("title")
  const description = searchParams.get("description")
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space-y-4">
        <Title>Detalhes da Tarefa</Title>
        <div className="bg-slate-400 rounded-md relative ">
          <h2 className="text-xl rounded-md text-white font-bold p-3">
            {title}
          </h2>
          <p className="text-lg rounded-md text-slate-100 p-3">{description}</p>
        </div>
      </div>
      <button onClick={() => navigator("/")} className="absolute top-0 left-0">
        <ChevronLeft className="text-white" size={40} />
      </button>
    </div>
  )
}

export default TaskPage
