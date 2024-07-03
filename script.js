console.log("hi");

function getComputerChoice(){
    var value =Math.random();
    if(value<0.35){
        return "Rock";
    }
    else if(value<0.65){
        return "paper";
    }
    else{
        return "Scissor";
    }
}
function getHumanChoice(){
let sign = prompt(" enter rock paper or scissor");
return sign;

}
function winner(player,computer){
if ( player==computer){
    return "draw";
}

else if( (player==="paper" && computer==="rock" )
    ||(player==="rock" && computer==="Scissor" )||(player==="scissor" && computer==="paper" )
)
return " you win ";
else {
    return "you lost";
}
}

function play(){
    var player=getHumanChoice();
    var computer=getComputerChoice();
    
    alert(winner(player,computer));
}
play();

