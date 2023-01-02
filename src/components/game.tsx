import * as React from 'react'

type GameContextProps = {
    currentScore: number,
    topScore: number,
    picked: string[],
    checkAnswer: (answer: string) => void
    updateTopScore: (score: number) => void
}

export const GameContext = React.createContext<GameContextProps>({ currentScore: 0, topScore: 0, picked: [], checkAnswer: () => null, updateTopScore: () => null })

type GameProviderProps = {
    children: React.ReactNode
}

export const GameProvider = ({ children }: GameProviderProps) => {
    const [currentScore, setCurrentScore] = React.useState<number>(0)
    const [topScore, setTopScore] = React.useState<number>(0)
    const [picked, setPicked] = React.useState<string[]>([])

    const checkAnswer = (answer: string) => {
        console.log('checked')
    }

    const updateTopScore = (score: number) => {
        console.log('update top')
    }
    return (
        <GameContext.Provider value={{ currentScore: currentScore, topScore: topScore, picked: picked, checkAnswer, updateTopScore }} >
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

//   shuffleArray = () => {
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

//   setPicked = (id) => {
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
//           this.setPicked(id);
//           this.shuffleArray();
//           this.incrementScore();
//           if (this.state.score === 11) {
//               this.modalRef.current.openDialog(12, this.state.topScore);
//           }
//       } else {
//           this.setTopScore(this.state.score);
//           this.shuffleArray();
//           this.modalRef.current.openDialog(this.state.score, this.state.topScore);
//       }
//   }
