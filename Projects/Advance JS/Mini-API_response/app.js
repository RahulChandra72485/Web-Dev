// let h1 = document.querySelector("h1");

// h1.style.color="red";

// function changecolor(color){
//     h1.style.color=color
// }

// setTimeout(function(){changecolor("blue");}, 1000);

// setTimeout(function(){changecolor("yellow");}, 2000);

// setTimeout(function(){changecolor("green")}, 3000);

//------------------------------------------------------------------------------------------------------------------------------


// let h1 = document.querySelector("h1");

// h1.style.color="red";

// function changecolor(color,delay,nextcolorchange){
//    setTimeout(() => {
//     h1.style.color=color
//     nextcolorchange();
//    }, delay);
// };

// changecolor("blue",1000,function(){
//     changecolor("green",1000,()=>{
//         changecolor("yellow",1000,function(){
//             changecolor("pink",1000);
//         });
//     })
// });


// nesting of callbacks -----> this CallBack Hell



//----------------------------------------------------------------------------------------------------------------------------------------





// function datasave(data,success,failure){
//     let internetspeed=Math.floor(Math.random()*10)+1;
//     console.log(internetspeed);

//     if(internetspeed>4){
//         success();
//     }else{
//         failure();
//     }

// }

// //datasave("hello world",success,failure);   -------------  in this case callback are callng infinite times so it is not a good technices

// datasave("hello world",  ()=>{
//     console.log("success: Your data is saved!");
//     datasave("universe is beautifull", ()=>{console.log("second data is saved");},   ()=>{console.log("second data not saved");});
// },
// ()=>{
//     console.log("failure: your connection is weak, Try Again");
// });

// function success(){
//     console.log(" success: Your data is saved!");
//     datasave("universe is beautifull",success,failure);
// }

// function failure(){
//     console.log("failure: your connection is weak, Try Again");
// }




// let body= document.querySelector("body");

// let textkit=document.createElement("h1");

// textkit.innerText="Rahul Chandra";

// body.prepend(textkit);

// textkit.style.color="lightgreen";

// textkit.style.textDecoration="underline";


// let firstdiv=document.querySelector(".first");

// let input= document.querySelector("#inp");



// window.addEventListener("scroll",function(event){

//     let scrollposition= window.scrollY;

//     if(scrollposition>0){
//         body.style.backgroundColor="lightblue"
//     }else{
//         body.style.backgroundColor="white"
//     }


// });

// let input=document.querySelector("input");

// input.addEventListener("keypress",function(event){
//     console.log("key = ",event.key);
//     console.log("code = ",event.code);
// });


// let form=document.querySelector('form');

// form.addEventListener("submit",function(event){
//     event.preventDefault();


//     alert("Data has been saved ")

//     username.value="";
//     h2.innerText="";

// let sec2inp= form.elements[1];
// console.log(sec2inp);

// });


// let username= document.querySelector(".username");
// let h2=document.querySelector("h2");

// username.addEventListener("input",function(event){
//     let inputtext= event.target.value;
//     let filtertext= inputtext.replace(/[^a-zA-Z\s]/g, '');

//     event.target.value= filtertext;

//     h2.innerText=event.target.value;

// });



// setTimeout(()=>{
//     console.log("hello");
//     setTimeout(()=>{
//         console.log("hi! my name is Rahul Chandra");
//         setTimeout(() => {
//             console.log("i live in Gorakhpur");
//         }, 1000);
//     },1000);
// },1000);

// function callhell(word, delay, func){
//     setTimeout(() => {
//         console.log(word);
//         if(func) func();
//     }, delay);
// }


// callhell("hello", 1000, ()=>{
//     callhell("my name is Rahul;", 1000, ()=>{
//         callhell("I live in Gorakhpur",1000);
//     } );
// });


let input = document.querySelector("#inpcountry");

let btn = document.querySelector(".btn");

let ul = document.querySelector("#list");

let h2country = document.createElement("h2")

try {
    btn.addEventListener("click", async () => {
        let country = input.value;
        h2country.innerText="";
        ul.innerText="";

        await getcollegename(country);
    });

    async function getcollegename(country) {
        let url = "http://universities.hipolabs.com/search?country="
        let data = await fetch(url + country );
        let data2 = await data.json();
        console.log(data2);

        
        h2country.innerText = country;
        h2country.style.fontWeight = 'bold';
        ul.append(h2country);

        for (element of data2) {
            // console.log(element);
            let li = document.createElement("li");
            li.innerText = element.name;
            ul.appendChild(li);
        }
        input.value = "";
        

    }
} catch (error) {
    console.log("some error apper");
}




