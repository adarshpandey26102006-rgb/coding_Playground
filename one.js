// // // conversion of datatype

// // // console.log(typeof score);// string
// // // console.log(typeof(score));// string

// // let valueInNumber = Number(score);// conversion of string to number
// // // console.log(typeof valueInNumber);// number
// // // console.log(valueInNumber);// NaN-> not a number




// // // let score = null;
// // // console.log(typeof score);// object
// // // console.log(typeof(score));// object

// // let valueInNumber = Number(score);// conversion of object to number
// // // console.log(typeof valueInNumber);// number
// // // console.log(valueInNumber);// iski value 0 aayegi





// // let score = undefined;
// // // console.log(typeof score);// undefined data type
// // // console.log(typeof(score));// undefined data type

// // let valueInNumber = Number(score);// conversion of undefined to number
// // // console.log(typeof valueInNumber);// number
// // // console.log(valueInNumber);// NaN-> not a number





// // let score = true;
// // // console.log(typeof score);// boolean
// // // console.log(typeof(score));// boolean

// // let valueInNumber = Number(score);// conversion of boolean to number
// // // console.log(typeof valueInNumber);// number
// // // console.log(valueInNumber);// 1




// // //"33" => 33 data type string ko number me convert karne par 33 aayega
// // //"33abc" => NaN data type string ko number me convert karne par NaN aayega
// // //null => 0 data type null ko number me convert karne par 0 aayega
// // //undefined => NaN data type undefined ko number me convert karne par NaN aayega
// // //true => 1; false => 0 data type boolean ko number me convert karne par true ki value 1 aayegi aur false ki value 0 aayegi



// // //another convesion of datatype

// // let isLoggedIn = 1
// // // console.log(isLoggedIn);// 1
// // // console.log(typeof isLoggedIn);// number
// // let booleanIsLoggedIn = Boolean(isLoggedIn);// conversion of number to boolean
// // // console.log(booleanIsLoggedIn);// true
// // // console.log(typeof booleanIsLoggedIn);//boolean




// // let isLoggedIn = 0
// // // console.log(isLoggedIn);// 0
// // // console.log(typeof isLoggedIn);// number
// // let booleanIsLoggedIn = Boolean(isLoggedIn);// conversion of number to boolean
// // // console.log(booleanIsLoggedIn);// false
// // // console.log(typeof booleanIsLoggedIn);//boolean



// // let isLoggedIn = "1"
// // // console.log(isLoggedIn);//1
// // // console.log(typeof isLoggedIn);//string
// // let booleanIsLoggedIn = Boolean(isLoggedIn);// conversion of string to boolean
// // // console.log(booleanIsLoggedIn);// true
// // // console.log(typeof booleanIsLoggedIn);//boolean

// // let valueInNumber = Number(isLoggedIn);// conversion of string to number
// // // console.log(valueInNumber);//1
// // // console.log(typeof valueInNumber);//number




// // let isLoggedIn = "Agastya"
// // // console.log(isLoggedIn);//Agastya
// // // console.log(typeof isLoggedIn);//string
// // let booleanIsLoggedIn = Boolean(isLoggedIn);// conversion of string to boolean
// // // console.log(booleanIsLoggedIn);// true
// // // console.log(typeof booleanIsLoggedIn);//boolean





// // let isLoggedIn = ""
// // // console.log(typeof isLoggedIn);//string
// // let booleanIsLoggedIn = Boolean(isLoggedIn);// conversion of string to boolean
// // // console.log(booleanIsLoggedIn);// false
// // // console.log(typeof booleanIsLoggedIn);//boolean


// // // 1 => true; 0 => false
// // // "" => false;
// // // "Agastya" => true




// // let someNumber = 33;
// // // console.log(typeof someNumber);// number data type
// // let somestring = String(someNumber);// conversion of number to string
// // // console.log(typeof somestring);// string data type
// // // console.log(somestring);// 33



// // // *****************************Operations**************************** 



// // let value = 3;
// // let negValue = -value;
// // // console.log(value);// 3
// // // console.log(negValue);// -3


// // //Airthmetic operators

// // // console.log(2+2);// 4
// // // console.log(2-2);// 0
// // // console.log(2*2);// 4
// // // console.log(2/2);// 1
// // // console.log(4%2);// 0
// // // console.log(2**3);// 8

// // //Comparison operators

// // // console.log(2==2);// true
// // // console.log(2!=2); // false
// // // console.log(2>2); // false
// // // console.log(2<2); // false


// // //Addition of string

// let str1 = " Agastya";
// let str2 = "Hello";
// let str3 = str2 + str1;// concatenation of string
// console.log(str3);// Hello Agastya


// // let str = "33";
// // let Num = 2;
// // let Num2 = Number(str);// conversion of string to number
// // // console.log(Num2+ Num);// 35



// // // console.log(1 + "2");// 12
// // // console.log("1" + 2);// 12
// // // console.log("1" + "2");// 12
// // // console.log("1" + 2 + 2);//122
// // // console.log(1 + 2 + "2"); //32




// // // console.log((2+3)* 5 / 5 );// 5

// // // console.log(+true);// 1
// // // console.log(+false);// 0
// // // console.log(+"")// 0
// // // console.log(+"33")// 33



// // //Unary operators
// // let gameCounter = 100;
// // gameCounter++;// increment operator
// // // console.log(gameCounter);// 101

// // gameCounter--;// decrement operator
// // // console.log(gameCounter);


// // // console.log("2" > 1);// true
// // // console.log("02" > 1); // true

// // // console.log(null > 0);//false
// // // console.log(null == 0);// false
// // // console.log(null >= 0);// true


// // // is tarah ke convesion ko avoied karna hai

// // // console.log(undefined > 0);// false
// // // console.log(undefined == 0);// false
// // // console.log(undefined >= 0);// false


// // // ===

// // // console.log("2" === 2);// false














// // // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // //        memory   =>   stack(primitive) , heap(non-primitive)  

// // // stack(primitive) => jab bhi iska use hota tab ek copy create hoti hai aur uske baad usko use kiya jata hai.

// // // heap(non-primitive) => jab bhi iska use hota tab ek reference create hoti hai aur uske baad usko use kiya jata hai.





// // // //*** stack memory ****

// let myName = "Agastya";
// let anotherName = myName;// copy of myName is created and stored in anotherName 
// anotherName = "Agastya Pandey";
// console.log(anotherName);// Agastya Pandey
// console.log(myName);// Agastya


// // //****** heap memory ****


// // let userOne = {
// //     email: "Agastya@pandey.com",
// //     upi: "Agastya@upi"

// // }

// // // console.log(userOne);



// // let userTwo = userOne;// reference of userOne is created and stored in userTwo
// // // console.log(userTwo);

// // userTwo.email = "adarshpandey26102006@gmail.com";// changing the value of email in userTwo will also change the value of email in userOne because both are pointing to the same reference in heap memory
// // // console.log(userTwo);
// // // console.log(userOne);// both will have the same email value because both are pointing to the same reference in heap memory


// // userTwo.upi = "26102006@ybl";// changing the value of upi in userOne will also change the value of upi in userTwo because both are pointing to the same reference in heap memory
// // // console.log(userTwo.upi);
// // // console.log(userOne.upi);// both will have the same upi value because both are pointing to the same reference in heap memory



// // const name = "Agastya";
// // const repoCount = 50;
// // // console.log(name + repoCount + "value");// Agastya50value

// // // console.log(`Hello my name is ${name} and my repocount ${repoCount}`);// Hello my name is Agastya and my repocount 50.





// sab cover



// // //************************************String in JS*****************************//

// const gameName = "fortnite";
// console.log(gameName[0]);// f
// console.log(gameName[1]);// o
// console.log(gameName[2]);// r
// console.log(gameName[3]);// t
// console.log(gameName[4]);// n
// console.log(gameName[5]);// i
// console.log(gameName[6]);// t
// console.log(gameName[7]);// e
// console.log(gameName[7]);// e


// console.log(gameName.length);// 8
// console.log(gameName.toUpperCase());// FORTNITE  (ek method hai jo string ke sare letters ko capital letters  me convert karta hai);
// console.log(gameName.toLowerCase());// fortnite  (ek method hai jo string ke sare letters ko small letters  me convert karta hai);

// console.log(gameName.charAt(3));// t  (ek method hai jo string ke kisi bhi index ke letter ko return karta hai);
// console.log(gameName.indexOf("n"));// 4  (ek method hai jo string me kisi bhi letter ke index ko return karta hai);
// console.log(gameName.endsWith("e"));// true  (ek method hai jo string ke last letter ko check karta hai ki kya wo given letter ke equal hai ya nahi);

// const newString = gameName.slice(0,5);// fortn  (ek method hai jo string ke given index ke letters ko return karta hai);
// console.log(newString);

// console.log(gameName.slice(0,5)); // fortn
// console.log(gameName.slice(-5,-1)); // tnit

// const newString1 = "  Agastya  ";
// console.log(newString1);//   Agastya
// console.log(newString1.trim());// Agastya  (ek method hai jo string ke starting aur ending ke spaces ko remove karta hai);



// const url = "https://agastya.com/agastya%20pandey"
// console.log(url.replace('%20','_')); // isme kisi word ko replace kar sakate hai


// //*************************************************************************************************//

// // Number and maths 



// const score = 400;
// console.log(score);

// const balance = new Number(100);
//  console.log(balance);


// console.log(balance.toFixed(2));// isme kisi number ke baad decimal lagane ke baad kitane digit hai.



// const otherNumber = 23.678
// console.log(otherNumber.toPrecision(3));//precision ka matlab accuracy hota hai.



// const countNumber = 76.7896756
// // console.log(countNumber.toPrecision(3));// value ko kitan digit tak precsis karna hai.


// const hunderds = 100000
// console.log(hunderds.toLocaleString());// isme kisi bhi digit ko sahi se arrange karna hota hai(100,000)
// console.log(hunderds.toLocaleString('en-IN'));// ise indian tarike se likha ja sakta hai(1,00,000)


// const num_3 = 40000000;
// console.log(num_3.toLocaleString());
// console.log(num_3.toLocaleString('en-IN'));




// //*************************************** Maths ***************************** 


// console.log(Math);
// console.log(Math.abs(-3));// absolut value ye keval negative value ko postive kar deta hai.
// console.log(Math.round(4.6));// jaise hum aise decimal value ko round of karte hai
// console.log(Math.ceil(4.2));// isme 4 se jyada agar thodi bhi hui to upper value de dega
// console.log(Math.floor(4.8));//isme hamesa kitna bhi ho lower value hi lega.
// console.log(Math.sqrt(25));// kisi number ka squareroot nikalana 
// console.log(Math.min(34,44,54,46,78));// kisi bhi arrays ke andar min value
// console.log(Math.max(34,44,54,46,78));// kisi bhi arrays ke andar max value


// console.log(Math.random()); // iski value hamesha 0 aur 1 ke beech me hogi


// min = 10
// max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10));



// //++++++++++++++++++++++++++++++++++++++ Arrays +++++++++++++++++++++++++++++++++++++++++//



// const myArr = [1, 2, 3, 4, 5];
// console.log(myArr);


// const myHeros = ["thor", "ironman", "hulk", "captionamerica"];
// console.log(myHeros); // ["thor", "ironman", "hulk", "captionamerica"];
// console.log(myHeros[2]);// isme hamesa indexing 0 se start hoga // hulk


// const myArr2 = new Array(1, 2, 3, 4, 5, 6);
// console.log(myArr2);//isko aise bhi likh sakte hai


// *********************** Arrays method **********************

// myArr.push(6)
// console.log(myArr); // ye kisi array ke andar element add karta hai.


// myArr2.push(8)
// console.log(myArr2); // ye kisi array ke andar element add karta hai.


// myArr.pop().    //[0,1,2,3,4]
// console.log(myArr); //iska sidha mtlab yeh hai ki kisi array me last element ko hatana ho agar



// // myArr.unshift(9)
// // console.log(myArr);// iska use kisi array ke starting me kuch inshirt karna ho agar

// // myArr.shift()
// // console.log(myArr); // iska use jab kisi array ke starting se remove karna ho agar

// // console.log(myArr.includes(9));// iska use pata karne ke liye kiya jata hai ki array ke ander element hai ki nahi.(False)

// // console.log(myArr.indexOf(3));// iska use index pata karne ke liye kiya jata hai



// // const newArr = myArr.join()// ye isko array se string me convert kar deta hai.
// // console.log(myArr);//[ 1, 2, 3, 4, 5 ]
// // console.log(typeof newArr);//string
// // console.log(newArr);//1,2,3,4,5



// // // Slice , Splice 


// // // console.log("A ", myArr);// A  [ 1, 2, 3, 4, 5 ]
// // // console.log(myArr.slice(1,4));// isme last vala element nahi add hota hai.[ 2, 3, 4 ]
// // // console.log(myArr.splice(1,4));// isme last vala element add hota hai.[ 2, 3, 4, 5 ]
// // //spilce operation original array ko manipulate kar deta hai.

// // // console.log(myArr);// spilce ko use karne ke baad array me jo element bache hai vahi run karne ke baad output me aate hai

// // const marval_Heros = ["thor", "hulk", "ironman"];
// // const dc_Heros = ["superman", "batman", "flash"];
// // // marval_Heros.push(dc_Heros) // iska use karte hai jab hum tab hume array ke andar array milta hai array as a element use ho jata hai.
// // // console.log(marval_Heros); // [ 'thor', 'hulk', 'ironman', [ 'superman', 'batman', 'flash' ] ]


// // // console.log(marval_Heros[3]);// iska matlab yeh hai jo array ke andar array hai aur pahale array ka 3 index  ka element ki tarah use ho raha hai.
// // // console.log(marval_Heros[3]);// [ 'superman', 'batman', 'flash' ]





// // // use of concat 

// // const myArr3 = marval_Heros.concat(dc_Heros)
// // // console.log(myArr3);// iska use karne per dono arrays ke element ek array me ho jate hai.[ 'thor', 'hulk', 'ironman', 'superman', 'batman', 'flash' ]
// // const all_Heros = [...marval_Heros, ...dc_Heros]// iska use karke bhi hum do array ko ek array me print kar sakte hai.(Spread Operater)
// // // console.log(all_Heros);//[ 'thor', 'hulk', 'ironman', 'superman', 'batman', 'flash' ]




// // const another_array = [1, 2, 3, [4, 5, 6], [6, 7[4, 5]]];
// // const Array_5 = another_array.flat(Infinity)
// // console.log(Array_5);//[1,2,3,4,5,6,6,7,4,5]



// // console.log(Array.isArray("Agastya"));//False
// // console.log(Array.from("Age"));//['A','g','e']



// // // jab mutiple variable ko array me convert karna ho

// // let score1 = 100
// // let score2 = 200
// // let score3 = 300
// // // console.log(Array.of(score1,score2,score3));





















// //+++++++++++++++++++++***********************-----------------------------------------------------

// // *******************************Object******************************************//

// // singleton






// //Object literals


// const Jsuser = {
//     userName: "Agastya",
//     fullName: "Agastya Pandey",
//     email: "Agastya@google.com",
//     age: 18,
//     location: "Raibareli",
//     isLoggedIN: false,
//     lastLogin: ["monday", "wednesday"],
// }

// // console.log(Jsuser.email);//Agastya@google.com (generaly is method se nahi jana hota hai.)
// // console.log(Jsuser.lastLogin);//[ 'monday', 'wednesday' ]
// // console.log(Jsuser.age);//18



// // print karane ka another Method

// // console.log(Jsuser["email"]);// ye sahi tarika hota hai
// // console.log(Jsuser["userName"]);//ye tarika yaad rakhna hai 
// // console.log(Jsuser["isLoggedIN"]);


// // // console.log(Jsuser["email"]);
// // // console.log(Jsuser["location"]);

// // Jsuser.email = "Agastya@chatgpt.com"
// // Object.freeze(Jsuser)// iska use karke hum variable ki value ko nahi badal sakte hai
// // // console.log(Jsuser);
// // Jsuser.email = "Agastya@claud.com"
// // // console.log(Jsuser);





// const tinderUser = {}

// tinderUser.Id = "26102006@abc"
// tinderUser.Name = "Agastya"
// tinderUser.isLoggedIN = false

// // console.log(tinderUser);



// const obj1 = { 1: "a", 2: "b", }
// const obj2 = { 3: "a", 4: "b", }
// const obj3 = { 5: "a", 6: "b", }

// const obj4 = {...obj1,...obj2,...obj3} // ye tarika sabse sahi hai object ko combine karne ka 
// console.log(obj4);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }



// const infoUser = {
//     email: "Agastya@google.com",
//     pasward: "Ap@075ap",
//     fullName: {
//         userName: "Agastya@",
//         Name: {
//             firstName: "Agastya",
//             lastName: "Pandey"
//         }
// //     }
// }

// console.log(infoUser.fullName.Name.firstName);// object ke andar kisi bhi key ki value nikal sakte hai.



//******************************************fuction************************************************************ 


//  Block of code that perfroms a specific task,can be invoked whenever needed








// function addTwoNumber(number1,number2){ // function ka syntax aisa hota hai
// console.log(number1 + number2)
// }

// addTwoNumber(2,8) // 10 // argument




// function addTwoNumber(number1,number2){ // parameter
//  let result = (number1 + number2)              // function ek rule hota hai ki agar aapne return kar diya to uske baad koi bhi value run nahi hogi.
//  return result
//  console.log("hitesh");
//  }

// const result =  addTwoNumber(2,8)
// console.log("result: ", result);// result: 10










// function addTwoNumber(number1,number2){ 
// //  let result = number1 + number2              // function ek rule hota hai ki agar aapne return ke upar agar print kara rahe hai to run ho jaiyega  .
// //  console.log("hitesh");
//  return number1 + number2
//  }

// const result =  addTwoNumber(2,8)
// console.log("result: ", result);



// function loginUserMessage(userName){
//     return `${userName} just logged in`
// }

// console.log(loginUserMessage("Agastya"));




// function calculateCartPrice(...num1){        // rest operater
//     return num1
// }

// console.log(calculateCartPrice(200,100,300)) // ye array me convert kar deta hai aur array me convert karne ke baad hum sab kuch kar lenge





// const user = {
//     userName: "Agastya",
//     prices: 199
// }

// function handelObject(anyObject) {
//     console.log(`username is ${anyObject.userName} and price is ${anyObject.price} `)
// }


// handelObject(user) // is tarike se hum kisi function ke andar hum object inshirt karte hai aur use karte hai



// handelObject({
//     userName: "Adarsh",// hum ise is tarike se bhi inshirt kar sakte hai
//     price: 399
// })

// console.log(handelObject);

// const myNewArray = [200,100,300,400];

// function returnSecoundValue(getArray){
//    return getArray[2]
// }

// console.log(returnSecoundValue(myNewArray));

// console.log(returnSecoundValue([200,100,300,400]));// is tareke se bhi likh sakate hai








// function myFunction(msg,n){
//  console.log(msg,n);
// }


// myFunction("pleace go back",100); // pleace go back 100



// function ke local variable block tak hi rahate hai

// function sum(x,y){
//     s = x+y;
//     return sum;
// }
// let val_ue = sum(3,4)
// console.log(val_ue);

// console.log(t)



// Arrow function => yeh ek shorter syntax hai function likane ka js me

// // Normal function
// function add(a,b){
//     t = a+b
//     return t
// }

// console.log(add(2,4));

// // arrow function

// const sum = (a,b)=>{ // isko hum ek variable ke andar store kar sakte hai
//     y = a+b;
//     return y
// }

// console.log(sum(2,4));



// const Arrow = (x,y)=>{
//       console.log(x*y);
// }

// // console.log(Arrow(2,4));
// Arrow(2,6)


// const Arr_1 = ()=>{
//     console.log("Hello Agastya");

// }

// Arr_1();


// function constVowels(str){
//     let count = 0
//      for(const char of str){
//         if(char === "a" || char === "i" || char === "o" || char === "e" || char === "u"){
//             count++
//         }
//      }
//      return count;
// }

// const new_vowel = constVowels("apna college");
// console.log(new_vowel);



// const vowel = (str)=>{
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "i" || char === "o" || char === "e" || char === "u"){
//             count++;
//         }
//     }
//   return count;
// }

// const new_vowel = vowel("apna college");// 5 vowel
// console.log(new_vowel);















// For each loop in array => yeh array ke her ek element per ek function chalta hai

// for each loop ko hum higher order function kah sakte hai
// ye dusare function ko as a parameter use karte hai 






// let arr9 = [1,2,3,4];

// arr9.forEach(function(val){ 
//     console.log(val);
// })                                     // 1,2,3,4



// ab arrow function ke sath

// arr9.forEach((val) => {
// //     console.log(val);
// // });





// const array = ["delhi", "kanpur", "lucknow", "gurgram"];

// // array.forEach(function (city){
// //     console.log(city.toUpperCase());
// // });



// // array.forEach((city,idx,array) => {
// //     // console.log(city.toUpperCase(),idx,array);
// // });



// const array = [2, 4, 6, 8];

// array.forEach((val) => {
//     console.log(val*val);
// })


// let calSquare = (array) => {
//     console.log(array*array);
// }

// array.forEach(calSquare);





// Some more Array method

// (map) =>  1* map array ka ek method hai jo array ke har element per fuction appy karta hai.
//           2* original array ko touch kiye bina





// let num_array = [1, 2, 3, 4];

// let new_array = num_array.map((val) => {
//    return val+2;
// })

// // console.log(new_array);


// let new_array = num_array.map((val) => {
//     return val + 2;
// })

// console.log(new_array);



// (filter) => 


// const array_2 = [2, 3, 4, 5, 6];

// let new_array = array_2.filter((val) => {
//     return val >= 3;

// });

// console.log(new_array);






// (reduce) => perform some operation & reduces the array to single value. it return that single value
// jaha input me bahut sara hota hai lekin output me ek value cahiye ho.


// array.reduce(callback,initialValue); => syntax


// const array_7 = [2, 3, 4, 5, 6];

// const output = array_7.reduce((res, val) => {
//     return res + val;
// });
// console.log(output);






// const array_7 = [2, 3, 4, 5];

// const output = array_7.reduce((res, val) => {
//     return res * val;
// });
// console.log(output);






// const array_7 = [2, 3, 4, 5];

// const output = array_7.reduce((res, val) => {
//     return res<val ? res : val;
// });
// console.log(output);  // array ke andar sabse smallest value


// const marks = [87,93,64,99,86];

// const Grade_1 = marks.filter((marks) => {
//     return marks>90;
// })

// console.log(Grade_1);







// let n = 10;


// let arr = [];

// for (i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// }

// // console.log(arr);


// const new_sum = arr.reduce((res, curr) => {
//     return res + curr;
// })


// // console.log(new_sum); // 55








// const new_sum = arr.reduce((res,curr) => {
//     return res * curr;
// })



// console.log(new_sum); //3628800














// +++++++++++++++++++++++++++++++++++++++++ Loop +++++++++++++++++++++++++++++++++//



// for(i = 1;i < 11; i++){
//     console.log(i);
//     if(i === 5){
//         console.log("5 is best number");
//     }
// }




// for(let i =1; i <= 10; i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j =0; j <= 10; j++){
//         // console.log(`inner loop value: ${j}`);
//     console.log(i + '*' + j + '=' + i*j);
//     }
// }




// const myArray = ["flash","superman","batman"];
// console.log(myArray.length);
// for(let index = 0; index < myArray.length; index++){
//     console.log(myArray[index]);
// }









// Break and continue


// for(i = 1; i <= 20; i++){
//     if(i === 5){
//         console.log(`Detected 5`);
//     }
//     console.log(`value of i ${i}`);
// }







// for(i = 1; i <= 20; i++){
//     if(i === 5){
//         console.log(`Detected 5`);
//         break                      // ab iska matlab yeh hai ki 5 se aage print nahi hoga 
//     }
//     console.log(`value of i ${i}`);
// }










// for(i = 1; i <= 20; i++){
//     if(i === 5){
//         console.log(`Detected 5`);
//         continue                       // isme 5 aane ke baad bhi nahi rukta hai
//     }
//     console.log(`value of i ${i}`);
// }






// while do while loop


// let score = 1;

// do{
//     console.log(`score is ${score}`);
//     score++
// } while(score <= 10); // ye hai do loop ka syntax hai.







// for(i = 1;i <= 50; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }


// let sum = 0;
// for(i =1; i < 11; i++){
//     sum += i;
// }

// console.log("sum: ", sum)



// for(i = 5; i < 6; i++){
//     // console.log(`outer loop ${i}`);
//     for(j = 1; j < 11; j++){
//         // console.log(`inner loop ${j}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }


// for(i = 6; i < 7; i++){
//     // console.log(i);
//     for(j = 1; j < 11; j++){
//         console.log(i + '*' + j + '=' + i*j);
//     }
// }



// for (i = 1; i < 11; i++) {
//     console.log(i);
// }



// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0)
//     sum += i;
// }
// console.log(sum)




// let a = true;
// let b = false;

// console.log(a||b);// true
// console.log(a&&b);// false
// console.log(a^b);// true



// console.log(0 ?? "default");




// let value_1 = 6;
// let value_2 = 8;

// let cond_1 = value_1 < value_2; // true
// let cond_2 = value_1 === value_2; // false

// console.log(cond_1 || cond_2);

// console.log(cond_1 ^ cond_2);


// const a = 5;
// const b = 6;

// console.log(!(a > b));// true











// ++++++++++++++++++++++++++++++++++++++ DOM ++++++++++++++++++++++++++++++++++++++++++++++

// hum html ko Js me acess kar sakte hai yeh window object ka part hota hai. ise hum console.dir se.
// window object => document(document ek model hota hai html ki.) ise ko hum DOM kahate hai.
// Window Object => window object browser ka global object hai — jab bhi tum browser mein JavaScript run karte
// ho, ek window object automatically ban jaata hai jo poori browser tab/window ko represent karta hai.

// Simple words mein: HTML page ka JavaScript se "connect" hone ka tareeka hi DOM hai.






// window.alert("hello");
// window.console.log("Agastya");
// console.dir(document.body.childNodes);
// console.log(document.head);


// document.body.childNodes[3].innerText = "Apna college";

// console.log(document.body.childNodes[3].innerText = "Apna college");



// DOM manipulation

// slecting with ID
// let heading = document.getElementById("header")
// console.dir(heading);



// // slecting with Class
// let headings = document.getElementsByClassName("heading")
// console.dir(headings);
// console.log(headings);




// Sabka Tareeka ek 


// let div = document.querySelector("div");
// // console.dir(div);
// //  console.log(div);

// let heading = document.querySelector("h1");
// console.dir(heading);

// let heading = document.querySelector("h2")
// console.log(heading);
// console.dir(heading.innerText);
// heading.innerText = heading.innerText + " from Apna College students";
// // console.dir(heading.innerText);
// console.dir(heading.innerText);






// let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";




// let div = document.querySelector("div"); // kisi bhi html line ko access karne ke liye
// console.log(div);

// let id = div.getAttribute("id"); // kisi Attribute ki value ko pata karne ke liye 
// console.log(id);


// let para = document.querySelector("p");
// console.log(para);
// let do_1 = para.getAttribute("class");
// console.log(do_1);





// kisi Attribute ki value ko replce karne ke liye 




// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "new Class"));



// let newBt = document.createElement("button");
// newBt.innerText = "click me!";
// console.log(newBt);



// Insert Element

// 1. append => adds at the end of node (inside)
// 2. prepend => add at the start of the node (inside)
// 3. before => add before the node (outside)
// 4. after => add after the node (outside)




// let newBt = document.createElement("button");
// newBt.innerText = "click me!";
// console.log(newBt);



// let div = document.querySelector("div");
// div.append(newBt);
// // div.prepend(newBt);
// div.before(newBt);
// div.after(newBt);




// let heading = document.createElement("h1");
// heading.innerHTML = "<i>Everything is a time</i> "
// console.log(heading);

// let para  = document.querySelector("p");
// para.after(heading);










































//++++++++++++++++++++++++++++++++++++ Events ++++++++++++++++++++++++++++++++++++++++++//





































































