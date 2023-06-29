import React from 'react'
import { Celda } from '../logica/nuevoTableroVacio'
interface CeldaAjedrezProps {
    celda: Celda
    className: string
    onClick: () => void
}

export default function CeldaAjedrez({ celda, className, onClick }: CeldaAjedrezProps) {
    const image = imagenPieza(celda)

    return (
        <div className={className} onClick={onClick}>
            {image && <img src={image} alt={celda!.ficha} />}
        </div>
    )
}

const imagenPieza = (celda: Celda) => {
    if (celda === null) return null
    return `/piezas/${celda.ficha}-${celda.jugador ? 'black' : 'white'}.png`
}
