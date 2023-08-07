let turn = "x";
let title = document.querySelector(".title-content")
let squares = [];

const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");


function end (num1,num2,num3){
    document.getElementById('item-'+num1).style.background="#000";
    document.getElementById('item-'+num2).style.background="#000";
    document.getElementById('item-'+num3).style.background="#000";
    title.innerHTML = `${squares[num1]} is the winner`;
    setTimeout(function(){
        resultBox.classList.add("show");
        wonText.innerHTML = `Player <p>${squares[num1]}</p> won the game!`;  
       }, 200);
}

function winner(){
for (let i= 1 ; i<10; i++){
    squares[i] = document.getElementById('item-' + i).innerHTML;
}
if (squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=''){
    end(1,2,3);
} else if (squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=''){
    end(4,5,6);
} else if (squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=''){
    end(7,8,9);
}else if (squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=''){
    end(1,5,9);
} else if (squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=''){
    end(3,5,7);
} else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=''){
    end(2,5,8);
} else if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=''){
    end(1,4,7); 
} else if (squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=''){
    end(3,6,9);
} else{
    if(squares[1]!="" && squares[2]!="" && squares[3]!="" 
    && squares[4]!="" && squares[5]!="" && squares[6]!="" 
    && squares[7]!="" && squares[8]!="" && squares[9]!=""){
    title.innerHTML = `Match has been drawn!`;
    setTimeout(function(){
        resultBox.classList.add("show");
        wonText.innerHTML = `Match has been drawn!`;   
       }, 200);   
   }
 }
} 

function game (id){
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML ==''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML ="O Turn";
    }else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML= 'O';
        turn = 'x';
        title.innerHTML="X Turn";
    }
    winner();   
}
document.querySelectorAll("button").onclick = ()=>{
    window.location.reload()
}
replayBtn.onclick=()=>{
    window.location.reload()
}

