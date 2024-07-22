// Sync in JS or TS
//synchronous : means the code run in a particular sequence of instructionof given  in the program, each instruction wait for the previous instruction to complete itd execution.
//defaultly javascript work in synchronous programing but help of callbacks we made it asynchronous
// for example :
// console.log("hello world");
// console.log("hello it student");
// console.log("hello teachers");
//it will be simply execute line by line .

//Asynchronous :
// somtimes some code take times for execution so synchronous make wait to other codes for execution those written after this code
// but asynchronus allow to next code to execute imemediately and also those code taking time, after complete timing it will also execute during others codes execution.
// for example
// console.log("uderstanding asynchronous concept");
// function hello (){
//     console.log("hello khadija");

// }
//we use set timeout to make your execution delay for 4second and the also task some other execution
// setTimeout(hello, 4000); // 4secound = 4000miliseconds
// console.log("hello ayesha");
// setTimeout(() => {
// console.log( "hello programmer")
// });

//callbacks;
//A call backs is a function passed as an argument to another function.
//first way passed callback
// function sub(a: any, b: any){
//     console.log(a * b);

// }
// const calulate = (a: any, b: any, call: any) => {
//     call(a, b) //call here call back

// }
// calulate(2, 4, sub);
// callback work as synchronous in another function argument and in settimeout work as a asynchronous
//functions pass as setimeout is the example of also a call back example

//callback hell:
//nested callbacks stracted below one another forming a pyramid structure

// let make problem example make a senerio to understand call back hells we want some data from database for different many dataIdes
//and want to get every data id one by one and every data id take 2sec to bring out
// function database(dataId: any, getNextId: any) {
//   // take 2s to  search data and then bring data to you
//   setTimeout(() => {
//     console.log(`data here ${dataId}`);
//     if (getNextId) {
//       getNextId();
//     }
//   }, 2000);
// }
// // example problem of callbeck hells and nested callbacks
// //very unexceptable and understanding way of programming
// database(2345, () => {
//   console.log("getting data 1......");
//   database(45, () => {
//     console.log("getting data 2......");
//     database(67, () => {
//       console.log("getting data 3......");
//       database(77, () => {
//         console.log("getting data 4......");
//         database(67, 89);
//       });
//     });
//   });
// }); // in excution of this example hell, its will also problem because of typescript but run proper only in javascript

//THE SOLUTION OF CALL BACK HELL IS PROMISES
//promises:
//promise is for "eventual" completion of task. it is an object in JS
// it is solution to callbeck hells.
// resolve & reject are callbacks functions provided by JS

//promise has state (pending, fullfilled)& some result (result for resolve & error for reject);
// the three stage of promise
//1 pending : the result is undefined
//2: resolve (fullfilled) : the result is a value (fullfilled)
//3: reject (error) : the result is an error

//pending mode
// let promise = new Promise ((resolve, reject) => {
//     console.log("i am a promise with pending");
//     //if we never use resolve and reject it will show pending after console promise
// });
// console.log(promise);

//resolve(fullfilled)
// let promise2 = new Promise((resolve, reject) => {
//  console.log("i am promise with resolve ");
//  resolve(1234); // resolve is provided by js as callbeck function in promise
// });// this means fullfilled promise result provided as a value
// console.log(promise2);

// //reject(error);
// let promise3 = new Promise((resolve, reject) => {
//     console.log("i am promise with reject ");
//     reject("create some error"); // reject also provided by js as callbeck function in promise
//    }); // automatically create error in your console
//    console.log(promise3);

// upper di hui 3 promise theory just understanding krne k lye hai k promises kese kam krte hain
// according to shrdha di di hum promise ko general programming mein create nhi krte , ager hum kesi (API) k pass request bhejte hain k hamein koi data chai hai to wow API hamein eak promise return krti hain ,
// then hum promises se data k sath deals krtein hain, promises se apna data nikalte, results nikalte,  or uski state wagera check krte hain

// class work
//key alt+shift+uperarrow

// let promise4 = new Promise((response, reject) => {
//    response("the student is passed");
// });

// promise4.then((response)=>{
//   console.log(response);
// });

// let promise5 = new Promise ((response, reject) => {
//    reject("this is failed")
// });
// async function sirzia(){
//     try{let status = await promise5
//     console.log(status, "try block");}
//     catch(error){
//         console.log(error,"try error");
//     }
// }
// sirzia();
//class work ended

/// how to use our promise with
//1 - promise.then((resolve) = {......})
//2 - promise.catch((reject) = {......})

//.then example with function procces with promise
// function returnPromise() {
//   return new Promise((resolve, reject) => {
//     console.log("i am a fullilled promise");
//     resolve("fullfiled promise");
//   });
// }
// // let response: any = returnPromise();
// // response.then((result: any) => {
// //   console.log(result);
// // });

// //.catch examplwe with simple promise
// let anotherPromise = new Promise((resolve, reject) => {
//   reject("rejected promise");
// });
// // anotherPromise.catch((error) => {
// //   console.log(error);
// // });

// //most important topic promises chain

//promise chaining is the solution of callbeck hells and now there are some example of promise chaining
// const promise6 = new Promise((res, rej) => {
//   return res(2);
// })
//   .then((resp: any) => {
//     let add = resp + 3;
//     return add;
//   })
//   .then((resp2: any) => {
//     let multiply = resp2 * 2;
//     return multiply;
//   })
//   .then((resp3) => {
//     let subtract = resp3 - 5;
// //     return subtract;
// //   });
// function userName() { //self example
//   return new Promise((resolve) => {
//     setTimeout((userId: string) => {
//       userId = "@khadijamughal1119";
//       resolve(userId);
//     }, 3000);
//   });
// }
// function passWord() {
//   return new Promise((resolve) => {
//     setTimeout((usercode: number) => {
//       usercode = 123456;
//       resolve(usercode);
//     }, 3000);
//   });
// }
// // console.log("fetching username...");
// // userName().then((response) => {
// //   console.log(response);
// //   setTimeout(() => {
// //     console.log("fetching password...");
// //   }, 1000);
// //   passWord().then((response2) => {
// //     console.log(response2);
// //   });
// //   setTimeout(() => {
// //     console.log("_____User successfully Login In!_______");
// //   }, 4000);
// // });

// // api example with promise chaining
// const bringData = (data1: number) => { //function provide data with promise and 2 sec delay for fetching
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(data1);
//     }, 2000);
//   });
// };

// bringData(1234)
//   .then((res) => { // get different data by one function withe sequence of time and turn
//     console.log(res);
//     return bringData(45678);
//   })
//   .then((res2) => {
//     console.log(res2);
//     return bringData(9101112);
//   })
//   .then((res3) => {
//     console.log(res3);
//     console.log("success");
//   })

//now learning async await those better then promise chaining
//ASYNC-AWAIT:
//async function always return a promise compulsare. means if does not give promise it still return promise
//async function myFunc(){....}
//await pauses the execution of itsurrounding async function untill the promise is settled.

////our create promise work with async function (addition example with class learning + self learning)
// let ourfetchPromise = new Promise((resolve, reject) => {
//   resolve("resolve promise");
// });

// async function bringData(userData: any, nextUserData: any) {
//   try {
//     let result = await ourfetchPromise;
//     setTimeout(() => {
//       console.log(`our first user data : ${userData}`);
//       console.log(`our second data ${nextUserData}`);
//     }, 5000);
//   } catch (error) {
//     console.log(error, "try error");
//   }
// }
// bringData(123, 4567);

function callApi (location : string){
  return new Promise ((res, rej)=>{
   setTimeout(()=>{
       res(location);
   }, 2000);
  });
}
async function getlocation() {
 console.log( await callApi("karachi, sindh"));
 console.log( await callApi("sukker, sindh"));
 console.log( await callApi("hyderabad, sindh"));
 console.log( await callApi("kherpor, sindh"));
}
getlocation();