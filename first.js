// let value = 0.25;
// console.log(typeof (value));

// let age = "21";
// console.log(typeof(age));
// let age_1 = Number(age)
// console.log(typeof(age_1));



// let age = 17;
// function isEligbleForDrink(age){
//     if(age < 21){
//     console.log("Daru nahi pi sakte ho");
// } 
// else{
//     console.log("Daru pi sakte ho");
// }
// }
// isEligbleForDrink(2);




// let isEligbleForDrink = ((age) => {
//         if(age < 21){
//     console.log("Daru nahi pi sakte ho");
// } 
// else{
//     console.log("Daru pi sakte ho");
// }

// })

// isEligbleForDrink(17);






// table of 5 using for a loop


// for(i = 5; i < 6; i++){
//     for(j = 1; j < 11; j++){
//         console.log(i + '*' + j + '=' + i*j );
//     }
// }




// for(i = 5; i <= 50; i = i + 5){
//     console.log(i);
// }




// for(i = 4; i <= 40; i = i + 4){
//     console.log(i);
// }


// for(i = 4; i < 5; i++){
//     for(j = 1; j < 11; j++){
//         console.log(i + '*' + j + '=' + i*j );
//     }
// }

// const word = "Agastya";
// const count = 5
// for(i = 1; i <= count; i++){
//     console.log(word)
// }




// const num_arr = [1,2,3,4,5]
// let sum = 0
// for(let i = 0; i < num_arr.length; i++){
//     sum += num_arr[i];

// }
// console.log(sum);




// const new_arr = [1,2,3,4,5,6];

// new_arr.forEach((val) => {
// console.log(val+ val)
// })

// console.log(new_arr);



// let isLoogedIn = true;
// console.log(typeof(isLoogedIn));
// let inNumber = Number(isLoogedIn)
// console.log(inNumber);



// const gameCount = "Agastya Pandey";

// console.log(gameCount);//Agastya Pandey
// console.log(gameCount.length);//14
// console.log(gameCount[3]);//s
// console.log(gameCount.indexOf("s"));//3
// console.log(gameCount.charAt(3));//s
// console.log(gameCount.toUpperCase());// AGASTYA PANDEY
// console.log(gameCount.toLowerCase());// agastya pandey
// console.log(gameCount.includes("Pandey"));// true
// console.log(gameCount.replace("Pandey", "Kumar"))// Agastya Kumar
// console.log(gameCount.slice(1,3));// ga
// console.log(gameCount.endsWith("y"));//true
// // console.log(gameCount.trim());




// const score = 400;
// // console.log("score =", score);



// const num_1 = 23.568;

// // console.log(num_1.toFixed(2));// 23.57
// // console.log(num_1.toPrecision(2));


// const value = 10000000;
// console.log(value.toLocaleString('en-IN'));




// let value = 4.6;
// console.log(Math.round(value));// 5
// console.log(Math.ceil(value));//5
// console.log(Math.floor(value));//4
// console.log(Math.sqrt(81));//9
// console.log(Math.min(24,45,67));//24
// console.log(Math.max(24,45,67));//67

// console.log(Math.random());


// min = 10;
// max = 20;

// // console.log(Math.floor(Math.random() * (max - min + 1) + min));



// const myArr = [1,2,3,4,5];
// // console.log(myArr);

// const myHero = ["thor", "ironman", "hulk", "captionamerica"];
// // console.log(myHero[2]);
// // console.log(myHero[3]);

// const dc_Hero = ["superman", "batman", "flash"];


// console.log([...myHero,...dc_Hero]);


// Array Methods
// myHero.push("black Panther");
// console.log(myHero);

// myHero.pop()
// // console.log(myHero);

// // myHero.unshift("Antman");
// // console.log(myHero);

// // myHero.shift();
// // console.log(myHero);

// // console.log(myHero.includes("thor"));
// // console.log(myHero.indexOf("thor"));

// const myArr_1 = [1,2,3,4,5,6,7,8,9];


// console.log(myArr_1.slice(1,6));
// // console.log(myArr_1.splice(1,6));
// // console.log(myArr_1);


// // console.log(myHero.concat(dc_Hero));
// myHero.push(dc_Hero);
// // console.log(myHero);
// // console.log(myHero.flat(Infinity));

// // console.log(Array.isArray("thor"));


// // console.log(Array.from("age"));

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// // console.log(Array.of(score1,score2,score3));



// // heap memory 


// // let userInfo = 
// //     email: "Adarsh@google.com",
// //     age: 18,
// //     myName: {
// //         userName: "Adarsh@123",
// //         fastName: "Adarsh",
// //         lastName: "Pandey",
// //     }
// // }


// const myName = "Agastya";
// const repocount = 50;

// // console.log(`my name is ${myName} and my repocount is ${repocount}`);

// const myNew_Array = [1,2,3,4,5];



// const personal_Array = myNew_Array.join()
// // console.log(personal_Array);
// // console.log(typeof(personal_Array));





// const userInfo = {
    
//          email: "Adarsh@google.com",
//          upiId: "Adarsh@ybl",
//          location: "Bakuliha",
//           isLoggedIn: true,
//          fullName: {
//             userName: "Adarsh@123",
//             Name: {
//                 firstName: "Adarsh",
//                 lastName: "Pandey",
//             }
//          }
// }



// const userInfo_1 = {
//          email: "Agastya@google.com",
//          upiId: "Agastya@ybl",
//          location: "semari",
//           isLoggedIn: false,
//          fullName: {
//             userName: "Agastya@123",
//             Name: {
//                 firstName: "Agstya",
//                 lastName: "Pandey",
//             }
//          }
// }



// obj_4 = {...userInfo,...userInfo_1};
// console.log(obj_4);




// obj_1 = {1: "a", 2: "b",}
// obj_2 = {3: "a", 4: "b",}
// obj_3 = {5: "a", 6: "b",}


// obj_4 = {...obj_1,...obj_2,...obj_3};
// console.log(obj_4);





// console.log(userInfo_1["email"]);
// console.log(userInfo_1.fullName.userName);

// userInfo_1.location = "Bakuliha";
// console.log(userInfo_1.location);
// Object.freeze(userInfo_1);
// userInfo_1.email = "Agastya@gmail.com";
// console.log(userInfo_1.email);



// const userInfo = {}
// userInfo.email = "Agastya@gmail.com";


// console.log(userInfo);




// function sum(a,b){
//     // console.log(a + b);
// }

// sum(2,4);

// // console.log(sum(2,4));




// function addTwoNumber(num1,num2){
//     sum = num1 + num2;
//     return sum
// }


// addTwoNumber(3,4);
// console.log("sum =",sum);




// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Agstya"));



// function cartPrice(...num1){
//      return num1
// }

// console.log(cartPrice(12,11,10,13));//  [12,11,10,13]


// function ke andar object inshirt karke use karo.

// let object = {
//     userName: "Agstya",
//     email: "Agstya@gmail.com",
//     // pasward: "birendrakumarpandey26102006",
// }


// function handleObject(anyobject){
//     return `username is ${anyobject.userName} and user email ${anyobject.email}.`
// }

// console.log(handleObject(object));




// const Array_6 = [10,11,34,56];

// function Array_7(getArray){
//   return getArray[1];
// }

// console.log(Array_7(Array_6));
// console.log(Array_7([10,11,34,56]));// isko is tarike se bhi likh sakte hai


// function myFunction(msg){
//     return msg
// }
// console.log(myFunction("pleace go back"));


// function myFunction(msg,n){
//     console.log(msg,n);
// }

// myFunction("please go back",100);


// function myFunction(aleart,msg){
//     // console.log(aleart,msg);
// }

// myFunction("this site in not secure",16);


// function sum(x,y){
//     sum = x + y;
//     return sum
// }
// sum(3,4);
// console.log(sum);


// Arrow function



// const sum = (x,y) => {
//     add = x + y;
//     return add
// }

// // console.log(sum(2,4));




// const product = (num1,num2) => {
//     // console.log(num1 * num2)
// }

// product(2,8);



// const Arrow_2 = () => {
//     return "hello Agastya"
// }

// console.log(Arrow_2());





// const Arrow_2 = () => {
//     console.log("hello agstya");
// }
// Arrow_2()




// let new_array = [1,2,3,4,5,6];

// // let new_array_1 = new_array.map((val) => {
// //     return val + 2;
// // })


// // console.log(new_array_1);




// let new_array_5 = new_array.reduce((res,val) => {
//     return res + val;
// }) 


// console.log(new_array_5);






// for(i = 1; i < 11; i++){
//     console.log(i);
//     if(i === 5){
//         console.log("5 is best number");
//     }
// }



// const myArray = ["flash","superman","batman"];

// for(index = 0; index < myArray.length; index++){
//     console.log(myArray[index]);
// }



// for(i = 1; i < 6; i++){
//     if(i % 2 === 0){
//         console.log(i*i);
//     }
// }





// table of 6




// for(i = 6; i < 7; i++){
//     // console.log(`outer loop ${i}`);
//     for(j = 1; j < 11; j++){
//         // console.log(`inner loop ${j}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }




// for(i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }





// let sum = 0;
// for(i = 1; i <= 100; i = i + 1){
//    if(i % 2 !== 0){
//      sum += i
//    }
    
// }
// console.log(sum);


// ++++++++++++++++++++++++++++  revision ++++++++++++++++++++++++++++++++//


// const num = "1";
// console.log(typeof(num));//string
// console.log(num);//100
// const num_1 = Number(num);
// console.log(num_1);//100
// console.log(typeof(num_1));//number
// const num_2 = Boolean(num_1);
// console.log(num_2);//true
// console.log(typeof(num_2));//boolean


// const num = 0;
// console.log(typeof(num))// number
// console.log(num)//0
// const num_1 = Boolean(num);
// console.log(num_1);//false
// console.log(typeof(num_1));//boolean

// const num = 1;
// console.log(typeof(num))// number
// console.log(num)//0
// const num_1 = Boolean(num);
// console.log(num_1);//false
// console.log(typeof(num_1));//boolean


// let score = null;
// console.log(typeof(score));//object
// console.log(score);//null
// let score_1 = Number(score);
// console.log(score_1);//0
// console.log(typeof(score_1));//number



// let score = "33abc";
// console.log(typeof(score));//string
// console.log(score);//33abc
// let score_1 = Number(score);
// console.log(score_1);//nan
// console.log(typeof(score_1));//number



// let isLoggedIn = 1;
// console.log(typeof(isLoggedIn));//number
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);//true
// console.log(typeof(booleanLoggedIn));//boolean



// let isLoggedIn = "Agastya";
// console.log(typeof(isLoggedIn));//string
// let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);//true
// console.log(typeof(booleanLoggedIn));//boolean


// let value = 3;
// let negValue = -value
// console.log(negValue);//-3

// Airthmetic Operation 

// a = 2;
// b = "3";
// c = Number(b);
// console.log(a + c);


// a = 2;
// b = "3";
// console.log(a + b);


// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2/2);//1
// console.log(2%2);//0
// console.log(2**2);//4
// let str1 = "Agastya";
// let str2 = "pandey";
// let str3 = "Hello";
// let str4 = str3  +   str1 +   str2
// console.log(str4);



// let gameCount = 100;
// gameCount++;
// console.log(gameCount);//101


// let gameCount = 100;
// gameCount--;
// console.log(gameCount);//99


// let num = 100;
// num = num + 2;
// console.log(num);




// stack memory
// let myName = "Agastya";
// let anotherName = myName;
// console.log(myName);//Agastya
// console.log(anotherName);//Agastya
// anotherName = "Adarsh";
// console.log(myName);//Agastya
// console.log(anotherName);//Adarsh




// // heap memory

// let userOne = {
//     email: "Agastya@google.com",
//     upi: "Agastya@upi",
// }
// console.log(userOne);
// let userTwo = userOne;
// console.log(userTwo);
// userTwo.email = "adarsh@chatgpt.com";
// console.log(userOne);
// console.log(userTwo);


// const Username = "Agastya";
// const repoCount = 100;
// console.log(`my name is ${Username} and my repocount ${repoCount}`);


// ++++++++++++++++++++++++++++++++++++++++++++ string ++++++++++++++++++++++++++++++++++



// const myName = "Agastya";
// console.log(myName.length);//7
// console.log(myName[3]);//s
// console.log(myName.indexOf("s"));//3
// console.log(myName.charAt(3));//s
// console.log(myName.toUpperCase());//AGASTYA
// console.log(myName.toLowerCase());//agastya
// console.log(myName.includes("Agastya"));//true
// console.log(myName.replace("Agastya", "Adarsh"));//Adarsh
// console.log(myName.slice(1,4));//gas
// console.log(myName.endsWith("a"));//true    



// ++++++++++++++++++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++

const score = 100;
// console.log("score: ",score);
// console.log(Math.abs(-2));//2
// console.log(Math.round(2.5));//3
// console.log(Math.ceil(2.1));//3
// console.log(Math.floor(2.9));//2
// console.log(Math.sqrt(81));//9
// console.log(Math.min(24,45,67));//24
// console.log(Math.max(24,45,67));//67
// console.log(Math.random());//0 to 1


// min = 10;
// max = 20; 
// console.log(Math.random()*(max-min+1)+min);


// const Rupees = 5103456789;
// console.log(Rupees.toLocaleString('en-IN'));//5,10,34,56,789
// console.log(Rupees.toLocaleString('en-US'));//5,103,456,789

// const myScore = 2354
// console.log(myScore.toFixed(3));//2354.00    


// const myScore_1 = 23.54
// console.log(myScore_1.toPrecision(2));





// ++++++++++++++++++++++++++++++++++++++++++++ Arrays ++++++++++++++++++++++++++++++++++

// const myArray = [1,2,3,4,5];
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[2]);
// console.log(myArray.includes(3));

const myHeros = ["thor", "ironman", "hulk", "captionamerica"];
// console.log(myHeros);
// console.log(myHeros[2]);

// myHeros.push("black Panther");
// console.log(myHeros);

// myHeros.pop();
// console.log(myHeros);


// console.log(myHeros.includes("thor"));//true
// console.log(myHeros.indexOf("thor"));//0

// const newArray = myHeros.join();
// console.log(newArray);
// console.log(typeof(newArray));//string

// // const num_1 = new Array(1,2,3,4,5);
// // console.log(num_1);


// // console.log(myHeros.slice(1,3));//["ironman", "hulk"]
// // console.log(myHeros.splice(1,3));//["ironman", "hulk", "captionamerica"]
// // console.log(myHeros);//["thor"] 



const dc_Heros = ["superman", "batman", "flash"];

// // console.log(myHeros.concat(dc_Heros));//["thor", "superman", "batman", "flash"]
// console.log([...myHeros, ...dc_Heros]);

// const All_Heros = [...myHeros, ...dc_Heros];
// console.log(All_Heros);




// myHeros.push(dc_Heros);
// console.log(myHeros);console.log(myHeros.flat(Infinity));//["thor", "ironman", "hulk", "captionamerica", "superman", "batman", "flash"]




// console.log(Array.isArray("thor"));//false
// console.log(Array.from("Agastya"));



const jsUser = {
    fullName:{
        userName: "Agastya@123",
        Name:{
            firstName: "Agastya",
            lastName: "Pandey",
        }
    },
     Id:{
        email: "Agastya@gmail.com",
        google: "Agastya@google.com", 
        chatgpt:"Agastya@chatgpt.com",
     }

}

// console.log(jsUser.fullName.Name.firstName);

// jsUser.email = "Adarsh@gmail.com";
// console.log(jsUser.email);
// Object.freeze(jsUser.email)
// jsUser.email = "pandey@gmail.com";
// console.log(jsUser.email);




// const facebookUser = {}

// facebookUser.Id = "agastya123@"
// facebookUser.name = "Agastya"

// console.log(facebookUser);








// function addTwoNumber(num1,num2){
//     sum = num1 + num2
//     console.log(sum);
// }

// addTwoNumber(2,4);


function addTwoNumber(a,b) {
    return a + b;
}

// console.log(addTwoNumber(2,3));



function loginUserName(userName) {
  return `${userName} just Logged in`
}

// console.log(loginUserName("Agastya"));



// function calculateCartPrice(...num1){        
//     return num1
// }

// console.log(calculateCartPrice(200,100,300))



const sum = (a,b)=>{
    console.log(a + b);
}
// sum(2,9);




function isEligible(age){
    if(age<18){
        console.log("allowed");
    }
   else{
           console.log("not allowed")
   }
   
}

// isEligible(19);


const array_9 = [2,5,6,3];

// array_9.forEach((val)=>{
// console.log(val);
// });



// array_9.forEach(function(val){
//     console.log(val);
// })



const array = ["delhi", "kanpur", "lucknow", "gurgram"];

// array.forEach((city)=>{
//     console.log(city.toUpperCase());
// });



// array.forEach((city)=>{
//     console.log(city.toLowerCase());
// });




const array_3 = [2,4,6,7];

// array_3.forEach((val)=> {
//     console.log(val*val);
// });


// array_3.forEach((val)=> {
//     console.log(val+val);
// });


let num_1 = [2,5,7,8];

// let num_2 = num_1.map((val)=>{
//     return val+2;
// });
// console.log(num_2);



// let new_6 = num_1.filter((put)=>{
//     return put >= 5
// })
// console.log(new_6);



// const output = num_1.reduce((res,val)=>{
//     return rse + val;
// });

// console.log(output);










































































































































































































































































