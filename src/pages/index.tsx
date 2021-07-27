import { useState} from 'react'
import Lista from "../components/lista/Lista";
import Conteudo from '../components/template/Conteudo';
import tarefasIniciais from '../data/mock'
import Cabecalho from './../components/template/Cabecalho';
import Formulario from './../components/formulario/Formulario';
import Tarefa from '../model/Tarefas';

export default function Home() {


const [tarefas, setTarefas] = useState(tarefasIniciais)

function novaTarefaCriada(novaTarefa: Tarefa){
  setTarefas(tarefas.adicionarTarefa(novaTarefa))
}
  return (
    <div className="flex flex-col h-screen justify-center">
    <Cabecalho><Formulario novaTarefaCriada={novaTarefaCriada}/></Cabecalho>
    <Conteudo><Lista tarefas={tarefas} mudou={(novasTarefas) => {setTarefas(novasTarefas) }} /></Conteudo>

    </div>
  )
}
