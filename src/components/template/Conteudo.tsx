export default function Conteudo(props){
    return (
    
            <div className="flex flex-1 justify-center bg-gradient-to-tr from-gray-600 to-gray-900">
                {props.children}
            </div>
    
    )
}