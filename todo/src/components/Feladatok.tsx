import type { AllapotTipus, TodoTipus } from '../adatok';
import Feladat from './Feladat';

interface FeladatokProps {
    lista: TodoTipus[],
    setAllapot: (index: number, allapot: AllapotTipus) => void
}

function Feladatok({ lista, setAllapot }: FeladatokProps) {
  return (
    <div>
      {lista.map((elem, index) => (
        <Feladat key={elem.id} elem={elem} index={index} setAllapot={setAllapot} />
      ))}
    </div>
  )
}

export default Feladatok
