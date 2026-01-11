let matrix= [
    ["","",""],
    ["","",""],
    ["","",""]
];

const board = document.querySelector("#gameboard");
const result = document.querySelector("#result");
let gameOver = false;

function gameboard(){
    let currentPlayer ="X";

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const ele = document.createElement('div');
            ele.classList.add('element')

            ele.textContent = matrix[i][j];
            board.appendChild(ele);
            
            ele.addEventListener('click', () => {
                if(gameOver == false && matrix[i][j] == ""){
                    matrix[i][j] = currentPlayer;
                    ele.textContent = currentPlayer;

                    game();

                    if(win == true){
                        gameOver = true;
                        const winner = document.createElement('p');
                        winner.textContent = `${currentPlayer} won !`;
                        result.appendChild(winner);
                    }

                    currentPlayer = currentPlayer === "X" ? "O" : "X";
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

console.log(matrix);

