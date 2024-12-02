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
    
    let playerName=token
    console.log(playerName)
    return {token, playerName, getScore, increaseScore}
}




function GameController(
    playerX=Player('X'),
    playerO=Player('O')
  ){
    let activePlayer=playerX
    
    const display=document.querySelector(".display")
    
    const switchTurn = () => {
        if (activePlayer === playerX) {
            activePlayer = playerO
        } else activePlayer = playerX
        
        display.textContent=`It's the turn of ${activePlayer.playerName}`
    }
    const checkWin = function(){
        
        if (
            gameboard.board[0]===gameboard.board[1]&&gameboard.board[1]===gameboard.board[2]&&gameboard.board[1]!=null ||
            gameboard.board[3]===gameboard.board[4]&&gameboard.board[4]===gameboard.board[5]&&gameboard.board[4]!=null ||
            gameboard.board[6]===gameboard.board[7]&&gameboard.board[7]===gameboard.board[8]&&gameboard.board[7]!=null ||
            gameboard.board[0]===gameboard.board[3]&&gameboard.board[3]===gameboard.board[6]&&gameboard.board[3]!=null ||
            gameboard.board[1]===gameboard.board[4]&&gameboard.board[4]===gameboard.board[7]&&gameboard.board[4]!=null ||
            gameboard.board[2]===gameboard.board[5]&&gameboard.board[5]===gameboard.board[8]&&gameboard.board[5]!=null ||
            gameboard.board[0]===gameboard.board[4]&&gameboard.board[4]===gameboard.board[8]&&gameboard.board[4]!=null ||
            gameboard.board[6]===gameboard.board[4]&&gameboard.board[4]===gameboard.board[2]&&gameboard.board[4]!=null
        ) {            
            declareWinner()
        } 
    }
    const declareWinner = function(){
        console.log(`${activePlayer.playerName} won! Play again?`)
    }
    const getNames = function(){
        const inputX=document.querySelector("#playerX")
        const inputO=document.querySelector("#playerO")
        if (inputX.value!=""){
            playerX.playerName=inputX.value
        }
        if (inputO.value!=""){
            playerO.playerName=inputO.value
        }
    }

    const getActivePlayer = () => activePlayer
    const addToken = function (event) {
        let tokenTurn = getActivePlayer().token
        let index=parseInt(String(event.target.id).charAt(5))
        
        gameboard.board[index]=tokenTurn.trim()
        event.target.textContent=tokenTurn
                
        checkWin()
        getNames()
        switchTurn()
        
    }
    const cells = document.querySelectorAll(".cell")
    
    cells.forEach((cell)=> {
        
        cell.addEventListener('click',addToken, {once:true})
    })
    return {switchTurn, addToken, activePlayer} 
  }


const game = GameController()

console.table(gameboard.board)
// const cell_1=document.querySelector("#cell-1")
// cell_1.addEventListener('click',(event)=>


// console.log(event.target.id))










