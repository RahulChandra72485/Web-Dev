// let para = document.createElement('p');

// para.innerText="hey i'm red!";
// para.style.color="red";

// let body = document.querySelector('body');

// body.appendChild(para);

// let div1= document.createElement('div');

// let h1= document.createElement('h1');

// h1.innerText="i'm in a div";

// let para2= document.createElement('p');

// para2.innerText="ME TOO!";

// body.appendChild(div1);
// div1.style.backgroundColor="pink";
// div1.style.border="2px solid black";

// div1.appendChild(h1);
// div1.appendChild(para2);


// let btn=document.createElement('button');
// let input = document.createElement("input");

// btn.innerText="Click Me!";

// btn.style.border="2px solid black";
// btn.style.backgroundColor="pink";

// let body=document.querySelector('body');

// body.prepend(btn);
// document.querySelector("body").append(input);

// input.setAttribute('placeholder','username');

// btn.setAttribute("id","btn");

// let buton=document.querySelector('#btn');

// buton.style.backgroundColor="blue";
// buton.style.color="white";

// let h1 = document.createElement('h1');

// h1.innerText="DOM Practice";
// h1.style.textDecoration="underlined";
// h1.style.color="purple";

// body.insertAdjacentElement('afterbegin',h1);

// let para=document.createElement('p');
// para.innerHTML="Apna College <b>Delta</b> Practice";

// body.insertAdjacentElement('beforeend',para);



// ---------------------------------------------------------------------------------------------------------------------------


// let btns =document.querySelectorAll('button');

// for(item of btns){
//     item.onclick=hello;
// }


// function hello(){
//     alert("hello world");
// }

// ---------------------------------------------------------------------------------------------------------------------------


let body = document.querySelector('body');

body.style.textAlign = "center";



let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let div = document.querySelector('div');
div.style.height = "auto  ";
div.style.width = "50%";
div.style.margin = "auto";
div.style.border = "2px solid black"

let inp = document.createElement("input");
inp.setAttribute("placeholder", "username");
body.appendChild(inp);

let scrollvalue = 0;

window.addEventListener("scroll", function (event) {
    // console.log("you press this key: ",event.key);
    scrollvalue = window.scrollY;
    dosomething(scrollvalue);


});

// window.addEventListener("load",function (event) {
//     // console.log("you press this key: ",event.key);
//     alert("Welcome to the page");
// });

function dosomething(scrlval) {
    if (scrlval > 0) {
        div.style.backgroundColor = "lightgreen";
    }

}

let btn2 = document.createElement("button");
btn2.setAttribute("id", "btn2");
btn2.innerText = "Change Color";
btn2.style.height = "3rem";
btn2.style.width = "8rem";

body.prepend(btn2);

btn2.addEventListener("click", function (event) {
    btn2.style.backgroundColor = "green";
})

let horizontalline = document.createElement("hr");
body.prepend(horizontalline);


let inp2=document.createElement("input");
inp2.setAttribute("placeholder","enter your name");
body.prepend(inp2);

let headingh2= document.createElement("h2");
headingh2.innerText="hello world";
body.prepend(headingh2);

inp2.addEventListener("input",(event)=>{
    headingh2.innerText=event.target.value;
});



// ---------------------------------------------------------------------------------------------------------------------------

body.appendChild(horizontalline);

let todoh1=document.createElement("h1");
todoh1.innerText="ToDo List";
body.appendChild(todoh1);

let todopara=document.createElement("p");
todopara.innerText="To delete any task enter its index no.";
body.appendChild(todopara);

let todoinput=document.createElement("input");
todoinput.setAttribute("placeholder","enter your task");
body.appendChild(todoinput);
todoinput.style.textAlign="center";

let todobtn=document.createElement("button");
todobtn.innerText="Add Task";
body.appendChild(todobtn);

let deletebtn=document.createElement("button");
deletebtn.innerText="Delete Task";
body.appendChild(deletebtn);

let ul=document.createElement("ol");
ul.classList.add("ol")
body.appendChild(ul);
ul.style.textAlign="center";

let li1=document.createElement("li");
li1.innerText="eating";
ul.appendChild(li1);

todobtn.addEventListener("click",function(event){
    let task= todoinput.value;

    if(task !==""){
        let li= document.createElement("li");
        li.innerText=task;
        ul.appendChild(li);
        todoinput.value="";
    }else{
        alert("enter any task");
    }
});

deletebtn.addEventListener("click",function(event){
    
    if(todoinput.value !== ""){
        let deleteindex=todoinput.value-1;
        ul.removeChild(ul.children[deleteindex]);
        todoinput.value="";
    }

});

window.addeventlistner("keydown", function(event){
    console.log("Key pressed, starting the application..."); 
});


