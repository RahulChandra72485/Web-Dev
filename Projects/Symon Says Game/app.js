let gameseq = [];
let userseq = [];

let colors = ["red", "yellow", "green", "purple"];

let gamestart = false;
let level = 0;
let isEqual = true;

let highestScore=0;

let h3 = document.querySelector("h3");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keydown", function (event) {
    if (gamestart == false) {
        gamestart = true;
    }

    levelup();

})

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `level ${level}`;
    randomdiv();
}

function randomdiv() {
    let btnsclass = colors[Math.floor(Math.random() * 4)];
    let selectdiv = document.querySelector(`.${btnsclass}`);

    gameseq.push(btnsclass);
    console.log(gameseq);

    flash(selectdiv);
}

function flash(value) {
    value.classList.add("flash");

    setTimeout(() => { value.classList.remove("flash") }, 400);
}

function userflash(value) {
    value.classList.add("userflash");
    setTimeout(() => { value.classList.remove("userflash") }, 80);
}


// for (btn of allbtns) {
//     btn.addEventListener("click", btnpress);
// }

allbtns.forEach(function(eachbtn){
    eachbtn.addEventListener("click",btnpress);
});


function btnpress() {
    if(gamestart==false){
        alert("Press any key to start the game");
    }else{
        userflash(this);
        let userselectbtn = this.classList[1];
        userseq.push(userselectbtn);
    
        checking();  // it get executed everytime when we press any to button and check the pressed btncolor to "gameseq" array's elements 
    }
}




function checking() {

    if (userseq[userseq.length - 1] === gameseq[userseq.length - 1]) {  //whenever we click the btn it'll execute the checking every time  means buttons  will get execute checking function everytime when we press any button the checking function execute  again and again  and it will check the "userseq[i]" to gameseq[i]------ so this way we can scan every element of both arrays to eachother
        if (userseq.length == gameseq.length) {  // this check that the length of the array is equals to eachothers length or not 
            console.log("level up");

            setTimeout(function () {
                levelup();
            }, 1000);
        }
    } else {         //  this will only execute when the first condition didn't get true value ------if (userseq[userseq.length - 1] === gameseq[userseq.length - 1])
        let body=document.querySelector("body")
        body.classList.add("red");
        setTimeout(function(){body.classList.remove("red");},170);

        if(level>highestScore){
            highestScore=level;
        }
        
        h3.innerHTML = `Game Over!  Your score is:<b> ${level}</b> <br> Press any key to start again <br> HighestScore is: ${highestScore}`; 
        
        reset();
    }

}


function reset(){
    gamestart=false;
    level=0;
    gameseq=[];
    userseq=[];
}





