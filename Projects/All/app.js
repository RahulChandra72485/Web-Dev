// let smallImg = document.getElementsByClassName("oldImg");

// for(let i=0; i< smallImg.length; i++){
//     smallImg[i].src = "assets/spiderman_img.png";
//     console.log(`the value of this number is ${ i} changed!`);
// }


// // let img = document.querySelector('img');

// // img.setAttribute('class', 'genshinimpact');

// // img.getAttribute('class');

// ----------------------------------------------------------------------------------------------------------------

// let heading = document.querySelector('h1');

// heading.style.color= 'blue';
// heading.style.backgroundColor='yellow';

// let links = document.querySelectorAll('.box a ');

// for(link of links){
//     link[i].style.color='green';
// }

// for(let i=0; i<link.length; i++){
//     link[i].style.color='yellow';
// };


// ----------------------------------------------------------------------------------------------------------------


// console.log("traffic ligth");

// let color ="yellow";

// if(color=="red") { console.log("Stop");}

// else if(color=="yellow") {console.log("slow down");}

//  else if(color=="green") {console.log("Stop");}


// ----------------------------------------------------------------------------------------------------------------

// console.log("Popcorn Price");

// let order="S";

// if(order == "XL") {console.log("Price is Rs.250")}

// else if(order == "L") {console.log("Price is Rs.200")}

// else if(order == "M") {console.log("Price is Rs.100")}

// else if(order == "S") {console.log("Price is Rs.50")}

// else{console.log("invalide order")}


// ----------------------------------------------------------------------------------------------------------------


// console.log("Good String");

// let str="App";

// if( str[0]=="A" && str.length>=3  ){
//     console.log("its a Good String");
// }else{
//     console.log("its not a Good String");   
// }

// ----------------------------------------------------------------------------------------------------------------


// console.log("Day of the weeek");

// let num = 6;

// switch (num) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;


//     default:
//         console.log("Invalid Input");

// }

// ----------------------------------------------------------------------------------------------------------------



// let number=30;

// let lastdigit=number.toString().slice(-1);    

// if(lastdigit==0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }


// ----------------------------------------------------------------------------------------------------------------


// let username =prompt("Enter your name : ");

// let userage = prompt("Enter your age");

// let massage=`your name is ${username} and you are ${userage} years old `;

// alert(massage);


// ----------------------------------------------------------------------------------------------------------------


// let number = 1;

// switch (number) {
//     case 1:
//         console.log("January, Febuary, March");
//         break;

//     case 2:
//         console.log("April, May, June");
//         break;

//     case 3:
//         console.log("July, August, September");
//         break;

//     case 4:
//         console.log("October, November, December");
//         break;

//     default:
//         console.log("invalid input");

// }


// ----------------------------------------------------------------------------------------------------------------


// let strng=prompt("Enter any string");

// if( (strng[0]==="a" || strng[0]==="A") && strng.length>5 ){
//     console.log("Golden String");
// }
// else{
//     console.log("Bad String");
// }


// ----------------------------------------------------------------------------------------------------------------

// let a = 3;
// let b = 9;
// let c = 6;

// if(a>b && a&&c){
//     console.log(`${a} is a greater number.`)
// }

// else if(b>a && b>c){
//     console.log(`${b} is a greater number.`)
// }
// else{
//     console.log(`${c} is the greater number.`)
// }


// ----------------------------------------------------------------------------------------------------------------



// let firstnum = prompt("Enter First number");

// let secondnum = prompt("Enter Second number");


// let lastdigit1 = firstnum.toString();
// let lastdigit2 = secondnum.toString(); 



// if(lastdigit1[lastdigit1.length-1] == lastdigit2[lastdigit2.length-1]){
//     console.log(`both last numbers are same ${firstnum, secondnum}`);
// }
// else{
//     console.log("both last digit are not same");
// }


// ----------------------------------------------------------------------------------------------------------------


// console.log("hello world");

// let arr = [7,9,0,-2];

// let num=arr.splice(arr.length-3);

// console.log(num);


// ----------------------------------------------------------------------------------------------------------------


// let str = prompt("enter any string");

// if(str.length==0){
//     console.log("string is empty");
// }
// else{
//     console.log("it's filled");
// }


// ----------------------------------------------------------------------------------------------------------------


// let str= prompt("enter any string");

// let check =prompt("enter index to check lowercase");

// if(str[check] === str[check].toLowerCase() ){
//     console.log("character is in lowercase");
// }
// else{
//     console.log("character is in uppercase");
// }

// ----------------------------------------------------------------------------------------------------------------


// let arr = ["hello", 23, 45, 67, 80 ];

// let num = prompt("enter the element ");

// let check = Number(num);

// if(arr.includes(check)){
//     console.log(`${check} element is present at position of ${arr.indexOf(check)}`);
// }
// else{
//     console.log("no, not present");
// }


// ----------------------------------------------------------------------------------------------------------------


// let str = prompt("enter any word ");

// if( (str[str.length-1]==5) && ( (str[0]===str.tolowercase()) ||  ))


// ----------------------------------------------------------------------------------------------------------------


// let nums = prompt("enter number to print even numbers");

// let num = Number(nums); 


// for(let i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(`${i} `);
//     }

// }
// console.log("Even numbers");


// ----------------------------------------------------------------------------------------------------------------


// let nums = prompt("enter number to print odd numbers");

// let num = Number(nums); 


// for(let i=1;i<=num;i++){
//     if(i%2!==0){
//         console.log(`${i} `);
//     }

// }
// console.log("odd numbers");


// ----------------------------------------------------------------------------------------------------------------


// let table= prompt("enter the number to print the table");

// let num = Number(table);

// for(let i=1; i<=10; i++ ){
//     console.log(`${num*i}`);
// }
// console.log(`${num} table`);



// ----------------------------------------------------------------------------------------------------------------


// let favmovie=prompt("enter your favraite movie name");

// alert("for quiting the game write exit");

// for(let i=1; i>=0; i++ ){
//     let guess= prompt("enter the movie name :");
//     if(guess=="exit"){
//         console.log("betichod bhag gaya maidaaan chhod ke mauga.");
//         break;
//     }
//     else if(guess==favmovie){
//         console.log("you win");
//         break;
//     }
//     else{
//         alert("guess again :");
//     }
// }


// ----------------------------------------------------------------------------------------------------------------


// let favmovie=prompt("enter your favraite movie name");

// alert("for quiting the game write exit");

// let i=1;

// while(i>=0){
//     let guess= prompt("enter the movie name :");

//     if(guess=="exit"){
//         console.log("betichod bhag gaya maidaaan chhod ke mauga.");
//         break;
//     }
//     else if(guess==favmovie){
//         console.log("you win");
//         break;
//     }
//     else{
//         alert("guess again :");
//     }

//     i++
// }


// ----------------------------------------------------------------------------------------------------------------


// let i = 1;
// let list = [];

// while (i > 0) {
//     let order = prompt("Enter what you want to do (list, add, delete, exit):");

//     if (order === null) {
//         console.log("Prompt cancelled");
//         continue;
//     }

//     if (order == "list") {
//         console.log("-------------");
//         if (list.length === 0) {
//             console.log("The list is empty.");
//         } else {
//             for (item of list) {
//                 console.log(item);
//             }
//         }
//         console.log("-------------");
//     } else if (order == "add") {
//         let taskadd = prompt("Enter new task:");

//         if (taskadd === null || taskadd.trim() === "") {
//             console.log("Task cannot be empty.");
//         } else {
//             list.push(taskadd);
//             console.log("Task added.");
//             console.log("-------------");
//             for (item of list) {
//                 console.log(item);
//             }
//             console.log("-------------");
//         }
//     } else if (order == "delete") {
//         console.log("-------------");
//         if (list.length === 0) {
//             console.log("The list is empty.");
//         } else {
//             let deleteitem = prompt("Enter the task to delete:");

//             if (deleteitem === null) {
//                 console.log("Delete cancelled");
//             } else {
//                 let index = list.indexOf(deleteitem);
//                 if (index !== -1) {
//                     list.splice(index, 1);
//                     console.log("Task deleted.");
//                 } else {
//                     console.log("Task not found.");
//                 }
//                 console.log("-------------");
//                 for (item of list) {
//                     console.log(item);
//                 }
//                 console.log("-------------");
//             }
//         }
//     } else if (order == "exit") {
//         console.log("Exiting...");
//         break;
//     } else {
//         console.log("Invalid input.");
//     }

//     i++;
// }


// ----------------------------------------------------------------------------------------------------------------


// let arr=[1,2,3,4,5,6,2,3];

// let num=2;

// let i=1;
// while(true){
//     let deleteindex =arr.indexOf(2);
//     arr.splice(deleteindex,1);

//     if(deleteindex==-1){
//         break;
//     }
//     i++
// }

// for(item of arr){
//     console.log(item);
// }


// ----------------------------------------------------------------------------------------------------------------


// let number=287152;

// let convert= String(number);

// console.log(convert.length);


// ----------------------------------------------------------------------------------------------------------------


// let num=123456789;

// let convert= String(num);
// let sum=0;

// for(let i=0; i<convert.length; i++){
//     sum=sum+Number(convert[i]);
// }

// console.log(sum);

// ----------------------------------------------------------------------------------------------------------------

// let num=prompt("enter any number for it  factorial ");

// let numberin=parseInt(num);

// let sum=1;

// for(let i=numberin; i>0; i--){
//     sum=sum*i;
// }

// console.log(`Factorial of ${numberin} is: ${sum}`);


// ----------------------------------------------------------------------------------------------------------------


// let arr=[56,34,76,-2,3,4,5,6,2];

// let largenum=arr[0];

// for(let i=0; i<arr.length; i++){

//     if((arr[i]>largenum) && (arr[i]>0)){
//         largenum=arr[i]
//     }
// }
// console.log(`largest number in array is ${largenum}`);


// ----------------------------------------------------------------------------------------------------------------


// const obli={
//     username: "rahul",
//     content: "study",
//     likes:  217,
//     reposts:  14,
//     tags:  ["@rohit","@vikrant"]
// }


// ----------------------------------------------------------------------------------------------------------------


// let input=prompt("Enter the max limit in numbers to play guessing game");

// input=parseInt(input);

// let num=Math.floor(Math.random()*input)+1;

// let guess=prompt("Guess the number: ");

// guess=parseInt(guess);

// while(true){

//     if(guess=="exit"){

//         break;
//     }else if(guess==num){
//         alert("Congrats, You won");
//         break;
//     }else if(guess>num){
//         guess=prompt("Wrong guess, number was too large, try again: ");
//     }
//     else if(guess<num){
//         guess=prompt("Wrong guess, number was too small, try again; ");
//     }

// }


// ----------------------------------------------------------------------------------------------------------------


// let random=Math.floor(Math.random()*6)+1;

// console.log(random);

// ----------------------------------------------------------------------------------------------------------------


// const cars={
//     name: "Maruti",
//     model: "city 100",
//     color: "pink"
// };

// console.log(cars["name"]);

// ----------------------------------------------------------------------------------------------------------------



// const Person={
//     name: "Rahul",
//     age: 22,
//     city: "Gorakhpur"
// };

// console.log(Person["name"]);

// Person["city"]="New York";
// Person["Country"]="United States";

// ----------------------------------------------------------------------------------------------------------------


// function sum(num){
//     let total=0;

//     for(let i=0; i<=num; i++){
//         total=total+i;
//     }
//     return total;
// }

// let result=sum(10); 

// console.log(result);


// ----------------------------------------------------------------------------------------------------------------



// let arr=["hello","rahul","how","are","you"];

// function concat(arry){
//     let str="";
//     for(let i=0; i<arry.length; i++){
//         str=str+arry[i];
//     }
//     return str;
// }

// let finalstr=concat(arr);

// console.log(finalstr);

// ----------------------------------------------------------------------------------------------------------------


// function func(num){
//     let arr=[];
//     let count=0;
//     for(let i=num+1; arr.length<=5; i++ ){
//         arr[count]=i
//         count++;
//     }
//     return arr;
// }

// let result=func(50);

// console.log(result);

// ----------------------------------------------------------------------------------------------------------------



// let arr=[8,9,10,1,2,3,4,5,6,7];
// let num=5;

// function arrelem(numb){
//     let newarr=[];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;    
// }

// let result= arrelem(num);

// console.log(result);

// ----------------------------------------------------------------------------------------------------------------


// let str="abcdabcdefgggh";

// function removeDuplicates(str) {
//     let newstr = "";
//     for (let i = 0; i < str.length; i++) {
//         if (!newstr.includes(str[i])) {
//             newstr += str[i];
//         }
//     }
//     return newstr;
// }

// let result = removeDuplicates(str);
// console.log(result);



// ----------------------------------------------------------------------------------------------------------------


// let str="abcdabcdefgggh";

// function func(strg){
//     let newstr="";
//     for(let i=0; i<strg.length; i++){
//         if(newstr.indexOf(str[i])==-1){
//             newstr=newstr+strg[i];
//         }
//     }
//     return newstr;
// }

// let result=func(str);
// console.log(result);

// -------------------------------------------------------------------------------------------------------------------------




// country=["Australia","Germany","United States of America","fhsfhsfkjshfskj","fagshszgfgshskjgclshdfjasfkas"]

// function func(country){
//     let largest=country[0];
//     for(let i=0; i<country.length; i++){
//         if(country[i].length>largest.length){
//             largest=country[i];
//         }
//     }
//     return largest ;
// }
// let result=func(country);
// console.log(result);


// ---------------------------------------------------------------------------------------------------------------------------


// let str="United States of America";

// let vowels="aeiou"

// function vowelcount(strg){
//     let count=0;
//     let vowelstr="";

//     for(let i=0; i<str.length; i++){
//         if( (str[i]=="a") || (str[i=="A"])){count++; vowelstr=vowelstr+str[i];}
//         else if( (str[i]==="e") || (str[i]==="E")){count++; vowelstr=vowelstr+str[i];}
//         else if( (str[i]==="i") || (str[i]==="I")){count++; vowelstr=vowelstr+str[i];}
//         else if( (str[i]==="o") || (str[i]==="O")){count++; vowelstr=vowelstr+str[i];}
//         else if( (str[i]==="u") || (str[i]==="U")){count++; vowelstr=vowelstr+str[i];};
//     }
//     return [count,vowelstr];
// }

// let [resultcount,resultvowel]=vowelcount(str);
// console.log(`${resultcount} vowels are encounter in string and those vowels are: ${resultvowel} in = ${str}`);



// ------------------------------------------------------------------------------------------------------------------------------


// let str="United States of America";

// let vowels="aeiou"

// function vowelcount(strg){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if(str.includes()){}
//     }
//     return ;
// }

// let result=vowelcount(str);
// console.log(result);


// ------------------------------------------------------------------------------------------------------------------------------

// let start=prompt("enter the starting range to generate a random number:");
// let end=prompt("enter the ending range to generate a random number:");

// let startnum=parseInt(start);
// let endnum=parseInt(end);

// function func(startnum,endnum){

//     let random=Math.floor(Math.random()*(endnum - startnum + 1)) + startnum;

//     return random;
// }

// let result=func(startnum,endnum);
// console.log(result);


// ------------------------------------------------------------------------------------------------------------------------------


// let arry1=[3,5,6,2,45,8,4,1];
// const arrayAverage=(arr) => {
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     let avg=sum/arr.length;
//     return avg;
// };

// let result=arrayAverage(arry1);
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------



// const isEven=(n)=>{
//     return n%2==0
// }

// let result=isEven(10);
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

// let length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback,1,2);

// ------------------------------------------------------------------------------------------------------------------------------


// let arr=[
//     {
//         name: "rahul",
//         class: 9,
//     },
//     {
//         name:"vikky ",
//         class:9,
//     },
// ];

// arr.forEach(function(k){console.log(k.name)});


// ------------------------------------------------------------------------------------------------------------------------------

    // let arr = [2, 7, 11, 15];
    // let target = 26;
    // let twoSum = function (nums, target) {

    //     let answer = [];
    //     let index = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         let one = nums[i];
    //         let two = nums[i + 1];
    //         if ((one + two) == target) {
    //             // answer.push(nums[i]);
    //             // answer.push(nums[i+1]);
    //             index.push(i);
    //             index.push(i + 1);
    //         }
    //     }
    //     return index;
    // };
    // let result = twoSum(arr, target)
    // console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

    // let arr = [2, 7, 11, 15];
    // let target = 26;
    // let twoSum = function (nums, target) {
    //     let one;
    //     let two;
    //     let answer;
    //     for (let i = 0; i < nums.length; i++) {
    //         for(let j=1; j<nums.length; j++){
    //             one=nums[i];
    //             two=nums[j];
    //             if((one+two)==target){
    //                 answer.push(i);
    //                 answer.push(j);
    //                 return answer;
    //             }
    //         }
    //     }
    //     return answer;
    // };

    // let result = twoSum(arr, target)

    // console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

// let arr = [2, 7, 11, 15];
// let target = 26;

// let twoSum = function (nums, target) {
//     let answer = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if ((nums[i] + nums[j]) === target) {
//                 answer.push(i);
//                 answer.push(j);
//                 return answer; // Return the answer as soon as the pair is found
//             }
//         }
//     }
//     return answer;
// };
// let result = twoSum(arr, target);
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

// let arr=[20,30,40,55,60,10]

// let answer = arr.every((el) => {return el%10==0});
// console.log(answer);


// ------------------------------------------------------------------------------------------------------------------------------

// let arr=[24,26,-32,14,54,60,75,92];

// let answer=arr.reduce((res,el)=>{
//     if(res<el){
//         return res;
//     }else{
//         return el;
//     }
// });

// console.log(answer );

// ------------------------------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5];

// let square=arr.map((el)=>{return el*el});

// let sum=square.reduce((res,el)=>{return res+el });

// let avg=sum/square.length;

// console.log(avg);
// console.log(square);
// console.log(sum)

// ------------------------------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5,6];

// let newarr=arr.map((el)=>{return el+5});

// console.log(newarr);

// ------------------------------------------------------------------------------------------------------------------------------

// let arr=["rahul","vikrant","vikky","vishakha","sonam"];

// let newarr=arr.map((el)=>{return el.toUpperCase()});

// console.log(newarr);


// ------------------------------------------------------------------------------------------------------------------------------

// let arr=[1,2,3,4,5,6]

// function doubleAndReturnArgs(arry,...arg){
//     let double=arg.map((el)=>{return el*2});
//    let newarr=[...arry,...double];
//    return newarr;
// }
// let result=doubleAndReturnArgs(arr,9,8,7,88)
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------

// let object1 = { a: 1, b: 2 };
// let object2 = { c: 3, d: 4 };

// let mergeObjects= (one,two)=>{
//     let newobj={...one,...two};
//     return newobj;
// }
// let result=mergeObjects(object1,object2);
// console.log(result);








