let matrix= [
    ["","",""],
    ["","",""],
    ["","",""]
];

const board = document.querySelector("#gameboard");
let gameOver = false;
let move = 0;

const result = document.querySelector("#result");
const winner = document.createElement('p');
result.appendChild(winner);

function gameboard(){
    let currentPlayer ="X";

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const ele = document.createElement('div');
            ele.classList.add('element')

            ele.textContent = matrix[i][j];
            board.appendChild(ele);

            ele.addEventListener('click', () => {
                if(matrix[i][j] == ""){
                    if(gameOver == false){
                        move++;
                        matrix[i][j] = currentPlayer;
                        ele.textContent = currentPlayer;

                        game();

                        if(win == true){
                            gameOver = true;
                            winner.textContent = `${currentPlayer} won !`;
                        }
                        else if(move == 9){
                            gameOver = true;
                            winner.textContent = `It's  a tie !`;
                        }

                        currentPlayer = currentPlayer === "X" ? "O" : "X";
                    }
                }
            })
        }
    }
}

gameboard();

let win = false;

function game(){
    if(matrix[0][0]==matrix[0][1] && matrix[0][1]==matrix[0][2] && matrix[0][0]!=""){
        win = true;
    }
    else if(matrix[1][0]==matrix[1][1] && matrix[1][1]==matrix[1][2] && matrix[1][0]!=""){
        win = true;
    }
    else if(matrix[2][0]==matrix[2][1] && matrix[2][1]==matrix[2][2] && matrix[2][0]!=""){
        win = true;
    }
    else if(matrix[0][0]==matrix[1][0] && matrix[1][0]==matrix[2][0] && matrix[0][0]!=""){
        win = true;
    }
    else if(matrix[0][1]==matrix[1][1] && matrix[1][1]==matrix[2][1] && matrix[0][1]!=""){
        win = true;
    }
    else if(matrix[0][2]==matrix[1][2] && matrix[1][2]==matrix[2][2] && matrix[0][2]!=""){
        win = true;
    }
    else if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2] && matrix[0][0]!=""){
        win = true;
    }
    else if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0] && matrix[0][2]!=""){
        win = true;
    }
}

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener('click', () => {
    board.innerHTML = "";
    matrix= [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    gameboard();

    gameOver = false;
    win = false;
    move = 0;
    winner.textContent = "";
})