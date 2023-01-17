/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile, Modal, Button } from '../components'
import { useModal } from '../hooks'
import * as React from 'react'
import { textMD, heading1 } from '../theme'
import { centerContent } from '../theme/utility.styles'
import { OutlineCard } from '../components/cards'

const main = css`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  position: relative;
`

const gameWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const grid = css`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: 50rem;
`

const scores = css`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`

export const Game = () => {
    const { picked, options, status, topScore, restart, checkAnswer, start } = React.useContext(GameContext)
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
        <main css={main}>
            {status === 'start' &&
                (<div css={centerContent({ h: true, v: true, g: '2rem' })}>
                    <OutlineCard tl tr> Top Score: {topScore} </OutlineCard>

                    <OutlineCard bl>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h2 css={heading1} style={{ lineHeight: 1 }}>To Boldy Go</h2>
                            <p css={textMD}>Explore strange new worlds. Click on a planet to play, but don't go to the same planet twice!</p>
                            <Button variant='primary' onClick={start}>Play</Button>
                        </div>
                    </OutlineCard>
                </div>)
            }

            {status !== 'start' && (<div css={gameWrapper}>
                <section css={scores}>
                    <OutlineCard tl br>
                        Score: {picked.length}
                    </OutlineCard >
                    <OutlineCard tr bl>
                        <div style={{ textAlign: 'right' }}>
                            Top Score: {topScore}
                        </div>
                    </OutlineCard >
                </section>
                <section css={grid}>
                    {options.map(tile => {
                        return (<Tile key={tile.label} {...tile} onClick={() => checkAnswer(tile.label)} />)
                    })}
                </section>
            </div>)}

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