

// let username = prompt("Enter your name");
// let userage = prompt("Enter your age");

// alert(`${username} is ${userage} years old. `);

// let quarter = 3 ;
// switch(quarter){
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("July, August, September");
//         break;
//     case 4:
//         console.log("October, February, December");
//         break;       
// }




// let string = "Applehaikya";

// if(string.length > 5 && ((string[0] === 'A') || (string[0] === 'a' ) ) ){
//     console.log("Golden");
// }
// else{
//     console.log("Not Golden");
// }





// let a=1;
// let b=2;
// let c=3;

// if(a>b && a>c){
//     console.log(a,  " is large");
// }
// else if(b>a && b>c){
//     console.log(b,  " is large");
// }
// else if(c>a && c>b){
//     console.log(c,  " is large");
// }






// let first_number = 222134621;
// let second_number = 3527275168745321;

// if( (first_number%10) == (second_number%10) ) {
//     console.log("last digits are same");

// }
// else{
//     console.log("last digits are not same.")
// }





// let home = [7,9,0,-2];
// let n=3;

// let newhome = home.slice(1,home.length-1) ;
// console.log(newhome);






// let string = "rahul";

// let checknum = prompt("enter the index number to check lowercase");

// if( string[checknum] == string[checknum].toLowerCase() ){
//     console.log("yes it's same ");
// }

// else{
//     console.log("Not same");
// }





// let string= prompt("enter string");
// console.log(`string is = ${string}`);
// console.log(`string is = ${string.trim()}`);






// let array= [ "arr", "hello", 46 , 57 ,68 ];
// let checkitem = 46;


// if(array.indexOf(checkitem) != -1)
// if(array.indexOf(checkitem)>=0){
//     console.log("present");
// }

// else{
//     console.log("not present");
// }


// for(let i =1; i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


// let input= prompt("enter the last number to print even number ");
// for(let i= 0; i<=input; i++ ){
//     if(i%2 ==0){
//         console.log(i);
//     }
// }



// let arr =[1,2,3,4,5,6,5,4,3,2,1];

// for(let i=0; i<arr.length;i++){
//     if(arr[i]==2){
//         arr.splice(i,1);
//     }
// }
// console.log( arr );



// let number= 287152;

// let numstring=String(number);

// let count = numstring.length ;

// console.log(`number = ${number}  count = ${count} `);







// let count=0;

// let copy = number;

// while(copy>0){
//     count++;

//     copy= math.floor(copy/10);
// }

// console.log(count);







// let number = 278563 ;

// let numstring = String(number);

// add = 0;

// for(let i=0; i<numstring.length; i++){
//     add = add + parseInt(numstring[i]);
// }
// console.log(add);






// let numbers = [10, 5, 20, 8, 15];
// let largestNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestNumber) {
//         largestNumber = numbers[i];
//     }
// }
// console.log(largestNumber); // Output: 20






// let arr_3 = [4,5,7];
// let arr_4 = [8,1,9];

// let newarr = [];

// for(let i=0; i<arr_3.length;i++){
//     newarr.push(arr_3[i] + arr_4[i]);
// }

// console.log(newarr);






// let dice = Math.floor(Math.random() *6) +1 ;

// console.log(dice);








// let car ={
//     name: "suzuki" ,
//     model: "wagne",
//     color: "blue"
// };

// console.log(car.name);
// console.log(car["name"]);

// let var1 = "name";

// console.log(car[var1]);






// let person ={
//     name: "rahul",
//     age: 22,
//     city: "gorakhpur"
// };

// console.log(person);

// person["name"] = " York";
// person.country = "United States";

// console.log(person);




// function home(){
//     console.log("happy holi ");
// };

// home();








// let input = parseInt(prompt("enter any number to check any larger number is present in the array or not.");)

// let arr=[8,9,10,1,2,3,4,5,6,7];

// let arr2=[];

// let largenum = 0;

// function func(inpt){
    
//     for(let i=0; i<arr.length; i++){
        
//         if(arr[i]>inpt){
//             arr2.push(arr[i]);
//         }        
//     }
//     return arr2;
// };

//  let result=func(input);

//  console.log(result);





// let string = "abcdeeffasdllgjsl";

// let string2="";

// function func(string){
//     for(let i=0; i<string.length; i++){
        
//         let temp = string[i];

//         if(string2.indexOf(temp) == -1){
//             string2 = string2 + temp;
//         };
        
//     };
//     return string2;
// };

// let result = func(string);

// console.log(result);






// let country = ["United States of America","Australia", "Germany", "India" ];

// let Output=[];

// function func(country){
//     Output = country[0];

//     for(let i=1; i<country.length; i++){
//         if(country[i].length> Output.length){
//             Output = country[i];
//         };
//     };
//     return Output;
// };


// let result = func(country);

// console.log(result);






// let country = [ "Australia", "Germany", "India","United States of America"];

// let Output;

// function func(country) {
//     Output = country[0]; // Initialize Output with the first country name

//     for (let i = 1; i < country.length; i++) {
//         if (country[i].length > Output.length) {
//             Output = country[i]; // Update Output if a longer country name is found
//         }
//     }

//     return Output;
// }

// let result = func(country);
// console.log(result);




// let string ="apnacollege";

// let count;

// function func(){
//     for(let i=0; i<string.length; i++){
//         if(
//             str.charAt(i)=="a"||
//             str.charAt(i)=="e"||
//             str.charAt(i)=="i"||
//             str.charAt(i)=="o"||
//             str.charAt(i)=="u"
//         ){
//             count++
//         };
//     };
//     return count
// };

// let result = func(string);

// console.log(result);






// let startrange = parseInt(prompt("enter the starting range for a random number"));

// let endingrange = parseInt(prompt("enter the ending range for a random number"));

// let range = endingrange - startrange ;


// function func(range){
//     let randnum = Math.floor(Math.random() * range) + startrange;

//     return randnum;
// };


// let result = func(range);
ssssss
// console.log(result);





// let arr=[22,43,67,89];

// let arrayAverage = (arr) =>{
//     let arrlength = arr.length;
//     let sum=0;
//     for(let i=0; i < arrlength; i++){
//         sum = sum + arr[i];
//     };
//     let average= sum/arrlength;
//     console.log(average);
// };


// arrayAverage(arr);







// let num = 2;

// const Even =(num ) => { return num%2==0};

// console.log(Even(num));










// const object={
//     message:'Hello,World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
//     setTimeout(object.logMessage,1000);

//     console.log(object)





// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback.bind(this)();     // this is for ----------- example of callback function through using arguments , means calling in argument. 
//     }
// };
// object.method(callback);







// let nums = [2,4,1,5,6,2,7,8,9];
// function func(var1){
//     return var1 %2 == 0 ;
// };

// let even =nums.filter(func);     // this is for -----------  example of filter function or method's for specially array .


// console.log(even);







// let arr=[0,2,3,4,6,8,1,5,7];

// let mini =Math.min(...arr);  // this is for ----------- minimum number in array bu using "min" function from math 

// console.log(mini);






// SPREAD        ---------  (  ... put only three dots to spread the array's element   )





// let arr1 = [3,48,5,2,34,90];

// let maxi= Math.max(...arr1);

// console.log(maxi);
 






// let char = "hello world!";

// console.log(...char);





// let odd = [1,3,5,7,9,11];

// let even =[2,4,6,8,10,12];

// let var1 = [ ...odd, ...even]               // this is for -----------  SPREAD example .

// console.log(var1);











         // using SPREAD to access the object litrals 

//  let objct={
//      name: "rahul",
//      email: "rahul1510chandragkp@gmail.com",
//      password : "hello"

//  };

// let datacopy = {...objct, class: "BCA4thSEM"};

// console.log(datacopy,  );





// let arr1 = [3,48,5,2,34,90]; 

// let objct = {...arr1}          // in this case there are no key are given only values are given  -----------  so it takes the index number of the arrays element in the place of key key 

// console.log(objct);






// REST methods  -----------  so it takes the index number of the arrays element in the place of key key 












//  // --------destructuring of an array -------------


//  let arr=[ "hello", "one", "two", "three", "four"];

// //  let winner = arr[0];
  
// //  let runnerup = arr[1];

// //  let secondrunnerup = arr[2]

// let [winner, runnerup, secondrunnerup] = arr;

// console.log(winner, runnerup, secondrunnerup);









// ---------  destructuring for object   --------------

// const student ={
//   name: "rahul",
//   class: "9th",
//   age: 22,
//   subjects: ["maths", "english", "hindi","science", "Social Science"],
//   username: "rahulchandra01",
//   passw:"helloworld"

// };


// let {username: user  , passw , city = "gorakhpur"}=student;          // username and passw are the keys for students so we need to write the keys name in the curly bracket for destructuring 







//  let arr1 = [23,54,12,76,84];

//  let resultsquare = arr1.map( (el) => { return  el*el }  );

//  console.log(resultsquare);

// let resultsum = arr1.reduce( (sum, el ) => { return  sum+el } )

// console.log(resultsum);

// let resultaverage = arr1.reduce( (sum, el ) => { return (sum+el)/arr1.length  } );

// console.log(resultaverage);






// let arr1=[12,45,75,43];

// let result = arr1.map( (el) => { return el+5 }  )

// console.log(result);




// let arr1=["rahul", "vikrant", "aman", "rohit",  "vivek"];

// let result= arr1.map( (el) => { return el.toUpperCase()  } )

// console.log(result);




// let var1(){
    
// };








