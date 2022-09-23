import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Tarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {

  const [tarefas, setTarefas] = useState<Tarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  function selecionarTarefa(tarefaSelecionada: Tarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            }
          }

          return tarefa;
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <div>
        <Formulario setTarefas={setTarefas} />
        <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
        <Lista
          tarefas={tarefas}
          selecionarTarefa={selecionarTarefa}
        />
      </div>
    </div>
  );
}

export default App;
