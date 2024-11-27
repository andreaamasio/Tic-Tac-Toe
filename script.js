// array representing the rows and columns are stored inside Gameboard object
// gameboard IIFE because I only need a single instance of the Gameboard, so it cannot be reused to create additional instances.
const gameboard = (function Gameboard() {
    const rows = 3
    const columns = 3
    const board=[]

    for (let i=0;i<rows;i++){
        // board[i] = [];
        for (let j=0;j<columns;j++){
            // board[i].push(null)
            board.push(null)
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
    const addToken = function (event) {
        let tokenTurn = getActivePlayer().token
        let index=parseInt(String(event.target.id).charAt(5))
        console.log(index)
        gameboard.board[index]=tokenTurn
        console.table(gameboard.board)
    }
    const cells = document.querySelectorAll(".cell")
    
    cells.forEach((cell)=> {
        
        cell.addEventListener('click',addToken)
    })
    return {switchTurn, addToken} 
  }


const game = GameController()

console.table(gameboard.board)
// const cell_1=document.querySelector("#cell-1")
// cell_1.addEventListener('click',(event)=>


// console.log(event.target.id))










