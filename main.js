const myTitle=document.querySelector("#myTitle")
const myScore=document.querySelector("#myScore")
const myImg=document.querySelector("#myImg")
const myName=document.querySelector("#myName")

const compTitle=document.querySelector("#compTitle")
const compScore=document.querySelector("#compScore")
const compImg=document.querySelector("#compImg")
const  compName=document.querySelector("#compName")

const buttonStart=document.querySelector("#buttonStart")
const buttonRemote=document.querySelector("#buttonRemote")
const buttonKlav=document.querySelector("#buttonKlav")
const buttonRock=document.querySelector("#buttonRock")
const buttonPaper=document.querySelector("#buttonPaper")
const buttonScissors=document.querySelector("#buttonScissors")

const leftDiv=document.querySelector("#leftDiv")

let hands=["r","p","s"]

// const randomElement=Math.random()

function randomElement(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
  
    return arr[randomNumber];
  }





let player1Score=0
let player2Score=0

let isRemoteControl = false;
// window.onkeydown = startGame;



// Ya Allah

buttonStart.addEventListener("click",function(){

leftDiv.setAttribute("class","d-block ")

window.onkeydown = startGame;


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
   
    myTitle.classList.remove(`${isdraw ? "text-danger" : "text-danger"}`);

    compTitle.classList.add(
      `${isdraw ? "text-success" : "text-success"}`
    );
  
  }
   function showImage(img1,img2){
myScore.innerText=`Point:${player1Score}`
compScore.innerText=`Point:${player2Score}`

myImg.src=`./images/${img1}.png`
compImg.src=`./images/${img2}.png`

if(img1==="p"){
myName.innerHTML="paper"
}
else if(img1==="r"){myName.innerHTML="rock"}
else{myName.innerHTML="scissors"}

if(img2==="p"){
    compName.innerHTML="paper"
    }
    else if(img2==="r"){compName.innerHTML="rock"}
    else{Name.innerHTML="scissors"}


 
   }

   
   

 function startGame(e){

    const myChoice = e.key;
    const compChoice = randomElement(hands);


    if (!hands.includes(myChoice)) {
        alert("Please press correct key: 'r","p","s");
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

    isWin()
    player2Score +=1
    showImage(myChoice,compChoice)}
}

 
