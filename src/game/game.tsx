/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { GameContext } from './game-provider'
import { Tile, Modal, Button } from '../components'
import { useModal } from '../hooks'
import * as React from 'react'
import { textMD, heading1 } from '../theme'
import { ClippedCard } from '../components/clipped-card'
import { centerContent } from '../theme/utility.styles'
import { SVGClipped } from '../components/svg-clipped'
import { SVGClippedGrid } from '../components/svg-clipped-grid'
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
                    <h2 css={heading1}>To Boldy Go</h2>
                    <p css={textMD}>Explore strange new worlds. Click on a planet to play, but don't go to the same planet twice!</p>
                    <Button variant='primary' onClick={start}>Start Game</Button>
                    <SVGClipped />

                    <div style={{ width: '400px', height: '200px' }}>

                        <SVGClippedGrid />
                    </div>
                </div>)
            }

            {status !== 'start' && (<div css={gameWrapper}>
                <section css={scores}>
                    <ClippedCard tl br blur>
                        Score: {picked.length}
                    </ClippedCard>
                    <ClippedCard tr bl blur>
                        <div style={{ textAlign: 'right' }}>
                            Top Score: {topScore}
                        </div>
                    </ClippedCard>
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