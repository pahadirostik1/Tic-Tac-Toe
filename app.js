let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".new_btn");
let msgdisplayer=document.querySelector(".message_displayer");
let message=document.querySelector("#message");

let turnO= true;//PlayerX,PlayerO

const winPatterns = [
    [0, 1, 2],  // Horizontal wins
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  // Vertical wins
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],  // Diagonal wins
    [2, 4, 6]
];



const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgdisplayer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
        turnO=false;
     }
     else{
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     checkWinner();
    });
});

const disableBoxes=()=>{

    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
};


const showWinner=(winner)=>{
  message.innerText=`Congratulations,Winner is ${winner}`;
  msgdisplayer.classList.remove("hide");
  disableBoxes();
};


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;  
      if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val && pos2val===pos3val)
        {
           showWinner(pos1val);
        }
      }
    }


};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);