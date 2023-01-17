/** @jsxImportSource @emotion/react */

import { css, SerializedStyles } from '@emotion/react'
import { GameContext } from './game-provider'
import { Modal, Button } from '../components'
import { Play } from './play'
import { Start } from './start'
import { useModal } from '../hooks'
import * as React from 'react'

const gameStyles: Record<string, SerializedStyles> = {
    main: css`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        min-height: 100vh;
        padding: 2rem;
        position: relative;
    `
}


export const Game = () => {
    const { picked, status, topScore, restart } = React.useContext(GameContext)
    const [isWinModalOpen, toggleWinModal] = useModal(false)
    const [isLoseModalOpen, toggleLoseModal] = useModal(false)

    React.useEffect(() => {
        if (status === 'win' && !isWinModalOpen) {
            toggleWinModal()
        } else if (status === 'lose' && !isLoseModalOpen) {
            toggleLoseModal()
        } else if (status === 'playing') {
            if (isWinModalOpen) {
                toggleWinModal()
            }
            if (isLoseModalOpen) {
                toggleLoseModal()
            }
        }
    }, [status, toggleWinModal, toggleLoseModal, isLoseModalOpen, isWinModalOpen])


    return (
        <main css={gameStyles.main}>
            {status === 'start' && <Start />}
            {status !== 'start' && <Play />}

            <Modal isOpen={isWinModalOpen} toggle={toggleWinModal} title="You Won!">
                <Button variant='primary' onClick={restart}>New Game</Button>
            </Modal>
            <Modal isOpen={isLoseModalOpen} toggle={toggleLoseModal} title={picked.length >= topScore ? "New High Score!" : "Game Over"}>
                <p>Score: {picked.length}</p>
                <p>Top Score: {topScore}</p>
                <Button variant='primary' onClick={restart}>New Game</Button>
            </Modal>
        </main >

    )
}