var userScore=0;
var compScore=0;
var compScore_span=document.getElementById("compscore");

var userScore_span=document.getElementById("userscore");
var scoreBoard_div=document.querySelector(".scoreboard");
var result_div=document.querySelector(".result");
var rock_div=document.getElementById("rock");
var paper_div=document.getElementById("paper");
var scissor_div=document.getElementById("scissors");

//clicking rock paper scissors
function getComputerChoice()
{
    var choices=['rock','paper','scissors'];
  
    var ans=Math.floor(Math.random()*3);
   return choices[ans];
}
function game(userChoice)
{
    var compchoice=getComputerChoice();
    switch(userChoice+compchoice)
        {//user wins here
            case "paperrock":
            case "rockscissors":
            case "scissorspaper":
                wins(userChoice,compchoice);
              break;
                //lose here
            case "paperscissors":
            case "rockpaper":
            case "scissorsrock":
                loses(userChoice,compchoice);
                break;
                //draw
            case "paperpaper":
            case "rockrock":
            case "scissorsscissors":
                draw(userChoice,compchoice);
                break;
        }
        
  
}
function wins(user,computer)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML=user+" beats "+computer+" You Won!!";
}
function loses(user,computer)
{
   compScore++;
   compScore_span.innerHTML=compScore;
    result_div.innerHTML=computer+" beats "+user+" You Lost!!";
}
function draw(user,computer)
{
    result_div.innerHTML=computer+" draws with "+user;
}
rock_div.addEventListener('click',function()
                         {
    game("rock")//rock
})
paper_div.addEventListener('click',function()
                         {
    game("paper")//paper
    
})
scissor_div.addEventListener('click',function()
                         {
    game("scissors")//scissors
})
//var res=getComputerChoice();
