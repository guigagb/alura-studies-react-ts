import { Tarefa } from "../../types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props {
    tarefas: Tarefa[]
    selecionarTarefa: (tarefaSelecionada: Tarefa) => void;
}


const Lista = ({tarefas, selecionarTarefa}: Props)=>{

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item: Tarefa) => 
                    <Item
                        selecionarTarefa={selecionarTarefa}
                        key={item.id} 
                        itemTarefa={item} 
                    />
                )}
            </ul>
        </aside>
    )
}

export default Lista