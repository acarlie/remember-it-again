import * as React from 'react'
import { options, OptionData } from '../constants'
import { shuffle } from '../utilities/shuffle'

type Status = 'win' | 'lose' | 'playing'

type GameContextProps = {
    options: OptionData[]
    topScore: number,
    picked: string[],
    status: Status
    checkAnswer: (answer: string) => void
    restart: () => void
    updateTopScore: (score: number) => void
}

export const GameContext = React.createContext<GameContextProps>(
    {
        options: [],
        topScore: 0,
        picked: [],
        status: 'playing',
        checkAnswer: () => null,
        restart: () => null,
        updateTopScore: () => null
    }
)

type GameProviderProps = {
    children: React.ReactNode
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [topScore, setTopScore] = React.useState<number>(0)
    const [picked, setPickedTiles] = React.useState<string[]>([])
    const [gameTiles, setGameTiles] = React.useState<OptionData[]>(options)
    const [gameStatus, setGameStatus] = React.useState<Status>('playing')

    const checkAnswer = (answer: string) => {
        const win = picked.length === options.length - 1;
        const lose = picked.includes(answer);

        if (lose) {
            setGameStatus('lose')
            // check if top score, update if needed
        } else if (win) {
            setGameStatus('win')
            // check if top score, update if needed

        } else {
            setPickedTiles(picked.concat(answer))
            setGameTiles(shuffle(gameTiles))
        }
    }

    const updateTopScore = (score: number) => {
        console.log('update top')
    }

    const restart = () => {
        setPickedTiles([])
        setGameTiles(shuffle(gameTiles))
        setGameStatus('playing')
    }


    return (
        <GameContext.Provider value={{
            options: gameTiles,
            topScore: topScore,
            picked: picked,
            status: gameStatus,
            checkAnswer,
            updateTopScore,
            restart
        }} >
            {children}
        </GameContext.Provider >
    )
}