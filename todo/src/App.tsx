import './App.css'
import Feladatok from './components/Feladatok';

function App() {
 

  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>
      <article>
        <Feladatok />
      </article>
      <footer>
        <p>Készítette: Horváth Levente Roland</p>
      </footer>
    </>
  )
}

export default App
