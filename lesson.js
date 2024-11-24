// callback functions

console.log("Jackmaning yoshlarga bergan tavsiyalari")

const list = [
  "yaxshi talaba bo'ling",// 0 - 20
  "to'gri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashini boshlang", // 30 - 40
  "siz kuchli bolgan narsalarni qiling", //40 - 50
  "yoshlarga investitsiya qiling ", // 50 - 60
  "dam oling, endi foydsasi yoq", // 60
];

// calback funtion tuzamiz

function maslahatBering(a, callback) {
   if (typeof a !=='number') callback("inserat a number", false);
   else if(a <= 20) callback(null, list[0]);
   else if(a < 20 && a <=30) callback(null, list[1]);
   else if(a < 30 && a <=40) callback(null, list[2]);
   else if(a < 40 && a <=50) callback(null, list[3]);
   else if(a < 50 && a <=60) callback(null, list[4]);
   else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);

   }
}

// callback functionni ishga tushiramiz
console.log("passed here 0")
maslahatBering(70, (err, data) => {
  if (err) console.log('Error:', err);
  else{
    console.log('javob:', data);
  }

});
console.log('passed here 1');

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list [2];
//   else if (a > 30 && a <= 40) return list [3];
//   else if (a > 40 && a <= 50) return list [4];
//   else {
//   // settimeoutni async functionlar ichida ishlatish
//    return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//       resolve(list[5]);
//     }, 5000);
//    });

//   }
// }

//asnync functionni call qismi
// console.log("passed here 0");

// // then catch methodlaridan foydalanish
// maslahatBering(25).then(data => {
//   console.log("javob: ", data);
// })
// .catch(err => {
//   console.log("Error:", err);
// });

// console.log("passed here 1");

//  asnync functionnni call qismida ham async function ishlataylik (await)!
// async function run () {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(32);
//   console.log(javob);
//   javob = await maslahatBering(40);
//   console.log(javob);
// }
// run();