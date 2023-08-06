
let btn=document.getElementsByClassName("btn")
let hands=["r","p","s"]
let player1Score=0
let player2Score=0

function randomElement(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
  }


buttonStart.addEventListener("click",function(){
leftDiv.setAttribute("class","d-block ")


buttonKlav.addEventListener("click",function(){
  window.onkeydown = startGame;
})
})

function isWin(meWin){
 myTitle.innerHTML=meWin ? "Win" :"Lose"
compTitle.innerHTML=!meWin ? "win" :"Lose"

myTitle.classList.remove(`${meWin ? "text-danger" :"text-danger"}`)


myTitle.classList.add(`${meWin ? "text-success" :"text-danger"}`)

compTitle.classList.remove(`${meWin ? "text-danger" :"text-danger"}`)

compTitle.classList.add(`${!meWin ? "text-success" :"text-danger"}`)

}

function isDraw(isdraw){
    myTitle.innerHTML = isdraw ? "OOOPS!" : "OOOPS!";
    compTitle.innerHTML = isdraw ? "OOOPS" : "OOOPS";
  
    myTitle.classList.remove(`${isdraw ? "text-danger" : "text-danger"}`);
    myTitle.classList.add(`${isdraw ? "text-success" : "text-success"}`);
  
    //second
    compTitle.classList.remove(`${isdraw ? "text-danger" : "text-danger"}`);

    compTitle.classList.add(
      `${isdraw ? "text-success" : "text-success"}`
    );}

 function showImage(myChoice,compChoice){
myScore.innerText=`Point:${player1Score}`
compScore.innerText=`Point:${player2Score}`

myImg.src=`./images/${myChoice}.png`
compImg.src=`./images/${compChoice}.png`

if(myChoice==="p"){
myName.innerHTML="paper"
}
else if(myChoice==="r"){myName.innerHTML="rock"}
else{myName.innerHTML="scissors"}

if(compChoice==="p"){
    compName.innerHTML="paper"
    }
    else if(compChoice==="r"){compName.innerHTML="rock"}
    else{compName.innerHTML="scissors"}
   }

 function startGame(e){
    const myChoice = e.key;
    const compChoice = randomElement(hands);
    if (!hands.includes(myChoice)) {
        alert("Please press correct key(R,P,S)");
        return;
      }
      console.log("mychoice", myChoice);
      console.log("compChoice", compChoice);

if(myChoice === "s" && compChoice === "p" ||
myChoice === "p" && compChoice === "r" ||
myChoice === "r" && compChoice === "s" 
){
    console.log("You WIN");
    console.log("COMP Lose");

    player1Score += 1;

    isWin(true);

showImage(myChoice,compChoice)

}
else if(myChoice === "s" && compChoice === "s" ||
myChoice === "r" && compChoice === "r" ||
myChoice === "p" && compChoice === "p" ){

console.log("You Draw");
    console.log("COMP Draw");

isDraw()
showImage(myChoice,compChoice)}
else{
    console.log("You Lose");
    console.log("COMP Win");
    isWin(false)
    player2Score +=1
    showImage(myChoice,compChoice)}
}

buttonRemote.addEventListener("click",function(){
  rightDiv.setAttribute("class","d-block")

  
  
  buttonRock.addEventListener("click",function(){
    startGame2("r")
    myName.innerHTML="rock"
  })
  buttonPaper.addEventListener("click",function(){
    startGame2("p")
    myName.innerHTML="paper"
  })
  buttonScissors.addEventListener("click",function(){
    startGame2("s")
    myName.innerHTML="scissors"
  })
  
  })
  
  function startGame2(e){

   const myChoice = e
   const compChoice = randomElement(hands);
   
    
      console.log("mychoice", myChoice);
      console.log("compChoice", compChoice);

if(myChoice === "s" && compChoice === "p" ||
myChoice === "p" && compChoice === "r" ||
myChoice === "r" && compChoice === "s" 
){
    console.log("You WIN");
    console.log("COMP Lose");

    player1Score += 1;

    isWin(true);

showImage(myChoice,compChoice)

}
else if(myChoice === "s" && compChoice === "s" ||
myChoice === "r" && compChoice === "r" ||
myChoice === "p" && compChoice === "p" ){

console.log("You Draw");
    console.log("COMP Draw");

isDraw()
showImage(myChoice,compChoice)}
else{
    console.log("You Lose");
    console.log("COMP Win");
    isWin(false)
    player2Score +=1
    showImage(myChoice,compChoice)}
}


