const board = document.querySelector("#gameboard");

function gameboard(){
    let matrix = [];

    for(let i=0;i<3;i++){
        matrix[i] = [];

        for(let j=0;j<3;j++){
            const ele = document.createElement('div');
            ele.classList.add('element')

            matrix[i][j] = ele;

            board.appendChild(ele);
        }
    }

    console.log(matrix);
}

gameboard();