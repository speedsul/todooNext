import { useState } from 'react'
import Tarefa from './../../model/Tarefas';
interface FormularioProps {
    novaTarefaCriada: (tarefa: Tarefa) => void
}

export default function Formulario(props: FormularioProps) {
    const [descricao, setDescricao] = useState('')
    const criarNovaTarefa = () => {
        if (descricao?.trim()?.length > 0) {
            const novaTarefa = Tarefa.criarAtiva(Math.random(), descricao)
            props.novaTarefaCriada(novaTarefa)
            setDescricao('')
        }
    }
    return (
        <div className="flex w-3/5">
            <input
                className="
                flex w-full h-10 rounded-md  text-2xl
                shadow-md focus:outline-none text-center                 
                border-purple-300 focus:ring-2 
                focus:ring-purple-600"
                value={descricao} type="text"
                onChange={(e) => setDescricao(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? criarNovaTarefa() : null} />

        </div>)
}