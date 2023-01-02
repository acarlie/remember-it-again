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

export const GameContext = React.createContext<GameContextProps>({ options: [], topScore: 0, picked: [], status: 'playing', checkAnswer: () => null, restart: () => null, updateTopScore: () => null })

type GameProviderProps = {
    children: React.ReactNode
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [topScore, setTopScore] = React.useState<number>(0)
    const [picked, setPickedTiles] = React.useState<string[]>([])
    const [gameTiles, setGameTiles] = React.useState<OptionData[]>(options)
    const [gameStatus, setGameStatus] = React.useState<Status>('playing')

    const checkAnswer = (answer: string) => {
        const win = picked.length === options.length;
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
        <GameContext.Provider value={{ options: gameTiles, topScore: topScore, picked: picked, status: gameStatus, checkAnswer, updateTopScore, restart }} >
            {children}
        </GameContext.Provider >
    )
}




// class App extends Component {
//   constructor (props) {
//       super(props);
//       this.state = {
//           colors,
//           score: 0,
//           picked: [],
//           topScore: 0
//       };
//       this.modalRef = React.createRef();
//   }

//   componentDidMount () {
//       document.addEventListener('keydown', (e) => {
//           if (e.code === 'Escape') {
//               this.modalRef.current.closeDialog();
//           }
//       });
//   }

//   shuffle = () => {
//       const [...colors] = this.state.colors;
//       for (let i = colors.length - 1; i > 0; i--) {
//           const j = Math.floor(Math.random() * i);
//           const temp = colors[i];
//           colors[i] = colors[j];
//           colors[j] = temp;
//       }

//       this.setState({
//           colors
//       });
//   }

//   incrementScore = () => {
//       const score = this.state.score + 1;
//       this.setState({
//           score
//       });
//   }

//   setPickedTiles = (id) => {
//       const picked = this.state.picked.concat([id]);
//       this.setState({
//           picked
//       });
//   }

//   setTopScore = (score) => {
//       const topScore = score > this.state.topScore ? score : this.state.topScore;
//       this.setState({
//           topScore
//       });
//   }

//   resetGame = () => {
//       this.setState({
//           picked: [],
//           score: 0
//       });
//   }

//   checkChoice = (event) => {
//       const id = event.currentTarget.id;
//       const isValid = this.state.picked.indexOf(id) === -1;
//       if (isValid) {
//           this.setPickedTiles(id);
//           this.shuffle();
//           this.incrementScore();
//           if (this.state.score === 11) {
//               this.modalRef.current.openDialog(12, this.state.topScore);
//           }
//       } else {
//           this.setTopScore(this.state.score);
//           this.shuffle();
//           this.modalRef.current.openDialog(this.state.score, this.state.topScore);
//       }
//   }
