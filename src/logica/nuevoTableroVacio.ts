export default function nuevoTableroVacio(): Tablero {
    return [
        [torre(0), caballo(0), alfil(0), rey(0), reina(0), alfil(0), caballo(0), torre(0)],
        [peon(0), peon(0), peon(0), peon(0), peon(0), peon(0), peon(0), peon(0)],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        [peon(1), peon(1), peon(1), peon(1), peon(1), peon(1), peon(1), peon(1)],
        [torre(1), caballo(1), alfil(1), rey(1), reina(1), alfil(1), caballo(1), torre(1)],
    ]
}

const caballo = (jugador: 0 | 1): Celda => ({
    ficha: 'caballo',
    jugador,
})

const peon = (jugador: 0 | 1): Celda => ({
    ficha: 'peon',
    jugador,
})

const torre = (jugador: 0 | 1): Celda => ({
    ficha: 'torre',
    jugador,
})

const alfil = (jugador: 0 | 1): Celda => ({
    ficha: 'alfil',
    jugador,
})

const rey = (jugador: 0 | 1): Celda => ({
    ficha: 'rey',
    jugador,
})

const reina = (jugador: 0 | 1): Celda => ({
    ficha: 'reina',
    jugador,
})

export type Celda = {
    ficha: 'caballo' | 'peon' | 'torre' | 'alfil' | 'rey' | 'reina'
    jugador: 0 | 1
} | null

export type Tablero = [
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
    [Celda, Celda, Celda, Celda, Celda, Celda, Celda, Celda],
]
