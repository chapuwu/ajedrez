import { Celda, Tablero } from '../logica/nuevoTableroVacio'
import CeldaAjedrez from './CeldaAjedrez'
import './Tablero.css'

interface TableroDeJuegoProps {
    tablero: Tablero
    turno: number
    movimientosValidos: [number, number][] | null
    setMovimientosValidos: (mov: [number, number][] | null) => void
}

export default function TableroDeJuego({
    tablero,
    turno,
    movimientosValidos,
    setMovimientosValidos,
}: TableroDeJuegoProps) {
    function handleCeldaClick(filaIndex: number, celdaIndex: number, celda: Celda | null) {
        if (movimientosValidos === null) {
            // la celda esta vacia
            if (celda === null) return
            // hay una ficha, pero es del otro jugador
            if (celda.jugador !== turno) return
            // TODO: calcular movimientos validos
        } else {
            if (movimientosValidos.some(([fila, celda]) => filaIndex === fila && celdaIndex === celda)) {
            }
        }
    }

    return (
        <div className='tablero'>
            {tablero.map((fila, filaIndex) => {
                return fila.map((celda, celdaIndex) => {
                    return (
                        <CeldaAjedrez
                            className={`celda ${
                                (filaIndex % 2 === 0 && celdaIndex % 2 === 0) ||
                                (filaIndex % 2 === 1 && celdaIndex % 2 === 1)
                                    ? 'celda-blanca'
                                    : 'celda-negra'
                            } ${celda?.jugador === turno ? 'jugador-actual' : ''}`}
                            celda={celda}
                            key={`${filaIndex}-${celdaIndex}`}
                            onClick={() => handleCeldaClick(filaIndex, celdaIndex, celda)}
                        />
                    )
                })
            })}
        </div>
    )
}
