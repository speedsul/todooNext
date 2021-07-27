import Selecao from "./Selecao";

interface ListaItemProps {
    valor: string
    concluido: boolean
    alternarStatus: () => void
}

export default function ListaItem(props: ListaItemProps) {
    const stiloTexto = props.concluido ? 'line-through text-gray-300' : 'border-gray-500'
    return (
        <li onClick={props.alternarStatus} className={
            `flex items-center 
            text-black p-6 border-b border-gray-400  
            cursor-pointer text-xl shadow       
            `}>
            <Selecao valor={props.concluido} />
            <span className={`font-light ml-4  ${stiloTexto}`}>
                {props.valor}
            </span>
        </li>
    )
}