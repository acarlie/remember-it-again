import * as React from 'react'
import { options, OptionData, topScoreKey, Status } from './game.definitions'
import { shuffle, getRandomInt } from '../utilities'
import { planetColors, patterns } from '../components/planets'

type GameContextProps = {
    options: OptionData[]
    topScore: number,
    picked: string[],
    status: Status
    checkAnswer: (answer: string) => void
    restart: () => void
    start: () => void
}

export const GameContext = React.createContext<GameContextProps>(
    {
        options: [],
        topScore: 0,
        picked: [],
        status: 'playing',
        checkAnswer: () => null,
        restart: () => null,
        start: () => null,
    }
)

type GameProviderProps = {
    children: React.ReactNode
}

const createTiles = (options: OptionData[]) => {
    return options.map(option => {
        const pattern = patterns[getRandomInt(0, patterns.length)]
        const planetColor = planetColors[getRandomInt(0, planetColors.length)]
        return { ...option, planetColor, pattern }
    })
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [topScore, setTopScore] = React.useState<number>(0)
    const [picked, setPickedTiles] = React.useState<string[]>([])
    const [gameTiles, setGameTiles] = React.useState<OptionData[]>(shuffle(createTiles(options)))
    const [gameStatus, setGameStatus] = React.useState<Status>('start')

    const checkAnswer = (answer: string) => {
        const win = picked.length === options.length - 1
        const lose = picked.includes(answer)

        if (lose) {
            setGameStatus('lose')
            saveTopScore()
        } else if (win) {
            setGameStatus('win')
            saveTopScore()
        } else {
            setPickedTiles(picked.concat(answer))
            setGameTiles(shuffle(gameTiles))
        }
    }

    const saveTopScore = () => {
        const currentScore = picked.length

        const savedScore = localStorage.getItem(topScoreKey)
        const currentScoreIsLower = savedScore && currentScore <= parseInt(savedScore)
        const currentScoreIsHigher = (savedScore && currentScore > parseInt(savedScore)) || !savedScore

        if (currentScoreIsLower) {
            return
        }

        if (currentScoreIsHigher) {
            localStorage.setItem(topScoreKey, `${currentScore}`)
            setTopScore(currentScore)
        }
    }

    const start = () => {
        const savedScore = localStorage.getItem(topScoreKey)

        if (savedScore) {
            setTopScore(parseInt(savedScore))
        }

        setGameStatus('playing')
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
            restart,
            start
        }}>
            {children}
        </GameContext.Provider >
    )
}