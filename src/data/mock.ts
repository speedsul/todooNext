import Tarefa from './../model/Tarefas';
import ListaTarefas from './../model/ListaTarefas';
import TipoFiltro from './../model/TipoFiltro';

const TarefasIniciais: Tarefa[] = [
    Tarefa.criarAtiva(1, 'Estudar Next'),
    Tarefa.criarCocluida(2, 'Limpar carro'),
    Tarefa.criarAtiva(3, 'Comprar Livro do mes'),
]

export default new ListaTarefas(TarefasIniciais, TipoFiltro.NEHUM)

