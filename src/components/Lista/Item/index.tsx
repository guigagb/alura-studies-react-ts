import { Tarefa } from '../../../types/tarefa';
import style from './Item.module.scss'

interface Props {
    selecionarTarefa: (tarefaSelecionada: Tarefa) => void
    itemTarefa: Tarefa
}

const Item = ({ itemTarefa, selecionarTarefa }: Props) => {

    const {id, tarefa, tempo, selecionado, completado} = itemTarefa;

    return (
        <li 
            onClick={()=> !completado && selecionarTarefa(itemTarefa) } 
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            key={id}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='tarefa completada' /> }
        </li>
    )
}

export default Item;