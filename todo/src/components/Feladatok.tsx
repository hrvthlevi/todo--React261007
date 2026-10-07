import Feladat from './Feladat';
import { useTodoContext } from '../contexts/TodoContext';



function Feladatok() {
    /* a listát a contextből fogjuk megkapni */
    const {lista} = useTodoContext()
  return (
    <div>
      {lista.map((elem, index) => (
        <Feladat key={elem.id} elem={elem} index={index} />
      ))}
    </div>
  )
}

export default Feladatok
