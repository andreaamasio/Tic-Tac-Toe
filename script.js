// array representing the rows and columns are stored inside Gameboard object
// gameboard IIFE because I only need a single instance of the Gameboard, so it cannot be reused to create additional instances.
const gameboard = (function Gameboard() {
    const rows = 3
    const columns = 3
    const board=[]

    for (let i=0;i<rows;i++){
        board[i] = [];
        for (let j=0;j<columns;j++){
            board[i].push(null)
        }
    }
    return {board}
})()
// player factory function
function Player(token) {
    let score=0
    const getScore = () => score
    const increaseScore = () => score++
    return {token, getScore, increaseScore}
}




function GameController(
    playerX=Player('X'),
    playerO=Player('O')
  ){
    let activePlayer=playerX

    const switchTurn = () => {
        if (activePlayer === playerX) {
            activePlayer = playerO
        } else activePlayer = playerX
    }

    const getActivePlayer = () => activePlayer
    const addToken = (indexRow,indexColumn) => {
        let tokenTurn = getActivePlayer().token
        gameboard.board[indexRow][indexColumn]=tokenTurn
    }
    return {switchTurn, addToken} 
  }

const game = GameController()
game.addToken(1,2)
console.table(gameboard.board)


