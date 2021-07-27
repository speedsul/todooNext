interface SelecaoPrps {
    valor: boolean
}

export default function Selecao(props: SelecaoPrps) {
const gradient = props.valor ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

    return (
        <div className={`
        flex justify-center items-center
        h-7 rounded-full cursor-pointer
        border border-gray-400
        w-7 text-white
        ${gradient}
        `}>{props.valor ? 'X' : '' }</div>
    )

}