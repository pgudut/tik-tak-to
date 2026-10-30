let currentPlayer = "X";
let gameStarted = false;
let gameOver = false;
let move=0;

const button = document.getElementById("startbutton");
const restart_button = document.getElementById("restartbutton");
const message = document.getElementById("message");
const end_button = document.getElementById("endbutton");
const cells = document.querySelectorAll(".cell");
restart_button.disabled=true
end_button.disabled=true;
restart_button.style.display="none"
end_button.style.display="none"
button.addEventListener("click",function(){
    button.disabled=true;
    button.style.display="none"
    message.textContent= "Loading...";
    end_button.style.display="block"


    setTimeout( function(){
        message.textContent = "Lets Play!";
        
    setTimeout( function(){
        message.textContent = "Player X's turn";
        gameStarted = true
        gameOver = false
        end_button.disabled=false
        
        
    }, 20);
    },3000
);
});



cells.forEach(function(cell) {

    cell.addEventListener("click", function(){
        //console.log("Cell Clicked!")

        if (gameStarted === false){
            return;
        }

        if (gameOver === true){
            return
        }

        if (cell.textContent !==""){
                cell.remove.classList
            return;
        }
        cell.textContent= currentPlayer;
        move++;

        if(currentPlayer ==="X"){
            cell.classList.add ("X");
        }else {
            cell.classList.add("O");
        }

        checkWinner();

        if (gameOver === true){
            return;
        }
        if(move===9){
            message.textContent="Draw";
            gameOver===true;
            restart_button.style.display="block"
            restart_button.disabled=false;
            end_button.style.display="none"
            return;
        }

        if (currentPlayer === "X"){
            currentPlayer = "O";
        } else{
            currentPlayer = "X";
        }
        message.textContent = "Player " + currentPlayer + "'s Turn!";
    });
});

function checkWinner(){
    const winnerCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];


    winnerCombination.forEach(function(combination){
        const a = cells[combination[0]].textContent.trim();
        const b = cells[combination[1]].textContent.trim();
        const c = cells[combination[2]].textContent.trim();

        if(a !== "" && a === b && a === c){
        message.textContent = "Player" + a +""+ "Wins!";
        gameOver= true;
        restart_button.style.display="inline-block"
        restart_button.disabled=false;
        end_button.style.display="none"
        }
});
};
restart_button.addEventListener("click",function(){
   
    move=0;
    currentPlayer="X";
    message.textContent = "Press the start button";
    button.disabled=false;
    cells.forEach(function(cell){
        cell.textContent="",
        cell.classList.remove("X","O")
    })
    restart_button.disabled=true
    button.style.display= "block"
    restart_button.style.display="none"
})

end_button.addEventListener("click",function(){
    message.textContent="Game ended"
    gameOver=true
    restart_button.disabled=false;
    restart_button.style.display="block"
    end_button.style.display="none"
})