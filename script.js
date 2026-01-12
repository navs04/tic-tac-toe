const gameBoard = (function(){
    let matrix= [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    const getBoard = () => {
        return matrix;
    }

    const setCell = (row, col, value) => {
        if(matrix[row][col] == ""){
            matrix[row][col] = value;
            return true;
        }
        else{
            return false;
        }
    }

    const resetBoard = () => {
        matrix= [
            ["","",""],
            ["","",""],
            ["","",""]
        ];
    }

    return {getBoard, setCell, resetBoard};
})();

const result = document.querySelector("#result");
const winner = document.createElement('p');
result.appendChild(winner);

const gameController = (function(){
    let currentPlayer ="X";
    let move = 0;
    let win = false;
    let gameOver = false;

    const playMove = (row, col) => {
        if(gameOver){
            return false;
        }

        const result = gameBoard.setCell(row, col, currentPlayer);
        if(result == false){
            return false;
        }
        else{
            move++;
            return true;
        }
    }

    const checkWin = () => {
        const board = gameBoard.getBoard();

        if(board[0][0]==board[0][1] && board[0][1]==board[0][2] && board[0][0]!=""){
            win = true;
        }
        else if(board[1][0]==board[1][1] && board[1][1]==board[1][2] && board[1][0]!=""){
            win = true;
        }
        else if(board[2][0]==board[2][1] && board[2][1]==board[2][2] && board[2][0]!=""){
            win = true;
        }
        else if(board[0][0]==board[1][0] && board[1][0]==board[2][0] && board[0][0]!=""){
            win = true;
        }
        else if(board[0][1]==board[1][1] && board[1][1]==board[2][1] && board[0][1]!=""){
            win = true;
        }
        else if(board[0][2]==board[1][2] && board[1][2]==board[2][2] && board[0][2]!=""){
            win = true;
        }
        else if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=""){
            win = true;
        }
        else if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=""){
            win = true;
        }

        if(win == true){
            gameOver = true;
            return currentPlayer;
        }
        else if(move == 9){
            gameOver = true;
            return "tie";
        }
        else{
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    const resetGame = () => {
        currentPlayer = "X";
        gameOver = false;
        win = false;
        move = 0;
        winner.textContent = "";
    }

    return {playMove, checkWin, resetGame};
})();

const gameboard = document.querySelector("#gameboard");

const reset = document.querySelector("#reset");
const resetBtn = document.createElement('button');
resetBtn.textContent = "Reset";
reset.appendChild(resetBtn);

const displayController = (function(){
    const render = () => {
        gameboard.innerHTML = "";
        const board = gameBoard.getBoard();

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const ele = document.createElement('div');
                ele.classList.add('element')

                ele.textContent = board[i][j]; 
                gameboard.appendChild(ele);

                ele.addEventListener('click', () => {
                    const moved = gameController.playMove(i, j);
                    if(moved){
                        const result = gameController.checkWin();

                        render();

                        if(result == "X" || result == "O"){
                            winner.textContent = `${result} won !`;
                        }
                        else if(result == "tie"){
                            winner.textContent = `It's a tie !`;
                        }
                    }
                })

            }
        }
    }

    resetBtn.addEventListener('click', () => {
        gameboard.innerHTML = "";
        gameBoard.resetBoard();
        gameController.resetGame();
        render();
    })

    return {render};
})();

displayController.render();