console.log("Welcom To Tic Tac Toe");
let turn_music = new Audio("ting.mp3");
let game_over_music = new Audio("gameover.mp3");
let victory = new Audio("victory.mp3")

let turn  = "X";
let gameOver = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0": "X";

}


//Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 7, 8],
    [2, 4, 6],
    ]
    win.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            gameOver = true;
            victory.play();
            
        }
    })


}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turn_music.play();
            checkWin();
            if(!gameOver){
                document.getElementsByClassName("info") [0].innerText = "Turn for " + turn;
            }
            
        } 
    })
});

//add onclick listener to reset button
reset.addEventListener('click', () =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameOver = false
    document.getElementsByClassName("info") [0].innerText = "Turn for " + turn ;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px" ;

})