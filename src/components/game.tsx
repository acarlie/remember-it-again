/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile } from './tile';
import { Modal } from './modal';
import { useModal } from '../hooks/use-modal';
import * as React from 'react'
import { heading2 } from '../theme';

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
    const { picked, options, status, restart } = React.useContext(GameContext)
    const [isWinModalOpen, toggleWinModal] = useModal()
    const [isLoseModalOpen, toggleLoseModal] = useModal()

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
        <main css={main}>
            <div>
                <div>
                    Score: {picked.length}
                </div>
                <section css={grid}>
                    {options.map(tile => <Tile key={tile.label} {...tile} />)}
                </section>
            </div>
            <Modal isOpen={isWinModalOpen} toggle={toggleWinModal} title='Win!'>
                <h2 css={heading2}>You Won!</h2>
                <button onClick={restart}>New Game</button>
            </Modal>
            <Modal isOpen={isLoseModalOpen} toggle={toggleLoseModal} title='Lose!'>
                <h2 css={heading2}>Game Over</h2>
                <button onClick={restart}>New Game</button>
            </Modal>
        </main>

    )
}