/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile, Modal, Button } from '../components'
import { useModal } from '../hooks'
import * as React from 'react'

const main = css`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`

const grid = css`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 40rem;
`

export const Game = () => {
    const { picked, options, status, topScore, restart, checkAnswer, start } = React.useContext(GameContext)
    const [isStartModalOpen, toggleStartModal] = useModal(true)
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
            if (isStartModalOpen) {
                toggleStartModal()
            }
        }
    }, [status, toggleWinModal, toggleLoseModal, toggleStartModal, isLoseModalOpen, isWinModalOpen, isStartModalOpen])


    return (
        <main css={main}>
            <div>
                <div>
                    Score: {picked.length}
                </div>
                <div>
                    Top Score: {topScore}
                </div>
                <section css={grid}>
                    {options.map(tile => <Tile key={tile.label} {...tile} onClick={() => checkAnswer(tile.label)} />)}
                </section>
            </div>
            <Modal isOpen={isStartModalOpen} toggle={toggleStartModal} title='Remember It'>
                <Button variant='primary' onClick={start}>Start Game</Button>
            </Modal>
            <Modal isOpen={isWinModalOpen} toggle={toggleWinModal} title="You Won!">
                <Button variant='primary' onClick={restart}>New Game</Button>
            </Modal>
            <Modal isOpen={isLoseModalOpen} toggle={toggleLoseModal} title={picked.length >= topScore ? "New High Score!" : "Game Over"}>
                <p>Score: {picked.length}</p>
                <p>Top Score: {topScore}</p>
                <Button variant='primary' onClick={restart}>New Game</Button>
            </Modal>
        </main>

    )
}