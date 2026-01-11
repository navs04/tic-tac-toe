let matrix= [
    ["","",""],
    ["","",""],
    ["","",""]
];

const board = document.querySelector("#gameboard");

function gameboard(){
    let currentPlayer ="X";

    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            const ele = document.createElement('div');
            ele.classList.add('element')

            ele.textContent = matrix[i][j];
            board.appendChild(ele);

            ele.addEventListener('click', () => {
                matrix[i][j] = currentPlayer;
                ele.textContent = currentPlayer;
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            })
        }
    }
}

gameboard();

var score=0;

function game(){
    if(matrix[0][0]==matrix[0][1] && matrix[0][1]==matrix[0][2] && matrix[0][0]!=""){
        score++;
    }
    if(matrix[1][0]==matrix[1][1] && matrix[1][1]==matrix[1][2] && matrix[1][0]!=""){
        score++;
    }
    if(matrix[2][0]==matrix[2][1] && matrix[2][1]==matrix[2][2] && matrix[2][0]!=""){
        score++;
    }
    if(matrix[0][0]==matrix[1][0] && matrix[1][0]==matrix[2][0] && matrix[0][0]!=""){
        score++;
    }
    if(matrix[0][1]==matrix[1][1] && matrix[1][1]==matrix[2][1] && matrix[0][1]!=""){
        score++;
    }
    if(matrix[0][2]==matrix[1][2] && matrix[1][2]==matrix[2][2] && matrix[0][2]!=""){
        score++;
    }
    if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2] && matrix[0][0]!=""){
        score++;
    }
    if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0] && matrix[0][2]!=""){
        score++;
    }
}

console.log(matrix);

