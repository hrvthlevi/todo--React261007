import type { AllapotTipus, TodoTipus } from "../adatok";

interface FeladatProps {
    elem: TodoTipus,
    index: number,
    setAllapot: (index: number, allapot: AllapotTipus) => void
}

function Feladat({ elem, setAllapot, index }: FeladatProps) {
    return (
        <div className="todo">
            <span className="szoveg">{elem.tennivalo}</span>
            <span className="allapot">{elem.allapot}</span>
            <button onClick={() => setAllapot(index, "kész")} title="kész">✅</button>
            <button onClick={() => setAllapot(index, "folyamatban")} title="folyamatban">🔨</button>
            <button onClick={() => setAllapot(index, "törölve")} title="töröl">❌</button>
            <button onClick={() => setAllapot(index, "létrehozva")} title="alap">Alapállapot</button>
        </div>
    )
}

export default Feladat