import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../utils/time";
import { Tarefa } from "../../types/tarefa";
import { useState, useEffect } from 'react'

interface Props {
    selecionado?: Tarefa
    finalizarTarefa: () => void
}

const Cronometro = ({selecionado, finalizarTarefa}: Props)=>{

    const [tempo, setTempo] = useState<number>(0);

    let interval: NodeJS.Timer;

    useEffect(()=>{
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    },[selecionado])

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1)
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Botao onClick={()=>{regressiva(tempo)}}>
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro;