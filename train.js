console.log('Jack Ma o`gitlaridan');
const list = [
    "Yaxshi talaba bo'ling", // 0-20
    "to`g`ri boshliq tanlang va ko`proq xato qiling", // 20-30
    "o`zingiz uchun ishlashni boshlang", // 30-40
    "siz kuchli bo`lgan narsalarni qiling", // 40-50
    "Yoshlarga investitsiya qiling", // 50-60
    "Endi dam oling, endi foydasi yo`q", //60~
];

//21-dars
        //CALL BACK FUNCTIONS
// async function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <=20) callback(null, list[01]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//         callback(null, list[5]);
//         }, 5000);
//     }
//     }


//     console.log('passed here  0');
//     maslahatBering(45, (err, data) => {
//         if (err) console.log('ERROR:', err);
//         console.log('javob:', data);
//     });
//     console.log('passed here  0');




    // 22- dars
    //ASYNC FUNCTIONS   
    // async function maslahatBering(a) {
    //     if(typeof a !== 'number') throw new Error("insert a number");
    //     else if(a <=20) return list[0];
    //     else if(a > 20 && a <= 30) return list[1];
    //     else if(a > 30 && a <= 40) return list[2];
    //     else if(a > 40 && a <= 50) return list[3];
    //     else if(a > 50 && a <= 60) return list[4];
    //     else {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //             resolve(list[5]);
    //             }, 5000);
    //         });
       
    // function countLetter(inputString) {
    //     let count = 0;
    //     inputString.split("").forEach(char => {
    //         if (char === char) {
    //             count++;
    //         
    //     });
    //     return count;
    //   }
   
    //   console.log(countLetter("hello"));
   
           
            //return list[5];
            // setTimeout(function() {
            //     return list[5];
            // }, 5000);
        
       
    
        //CALL VIA then/catch

        console.log('passed here  0');
        maslahatBering(25)
        .then(data => {
          console.log("javob:", data)  ;
        })
        .catch((err) => {
            console.log("ERROR:", err);
        });
        console.log("passed here 1");


        //asyn/await
// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//    }
// run();