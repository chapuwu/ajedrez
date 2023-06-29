import { useState } from 'react'
import './App.css'
import TableroDeJuego from './components/TableroDeJuego'
import nuevoTableroVacio from './logica/nuevoTableroVacio'

function App() {
    const [tablero, setTablero] = useState(nuevoTableroVacio())
    const [turno, setTurno] = useState(0)
    const [movimientosValidos, setMovimientosValidos] = useState<[number, number][] | null>(null)

    return (
        <div>
            <TableroDeJuego
                tablero={tablero}
                turno={turno}
                movimientosValidos={movimientosValidos}
                setMovimientosValidos={setMovimientosValidos}
            />
        </div>
    )
}

export default App
