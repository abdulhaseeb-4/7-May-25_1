// let i = 0;
// while (i < 10){
//     ++i
//     if (i === 5){
//         continue
//     }
//     console.log(i)
// }
// let u = 0;
// let MyName = "Abdul Haseeb"
// console.log(MyName);

// while (u < 10){
    
//     if (u === 8){
//         break
//     }
//     console.log(u)
//     ++u
// }






// let Students = ["bilal, SHOAIB, faizan, Nufail, Hassan"]
// let FirstUppercase = Students.map ( Arr =>
//     Arr.charAt(0).toUpperCase()+ Arr.slice(1).toLowerCase()
// )
// console.log(FirstUppercase);







// let i = 0;
// do {
//     if (i === 5) {
//         break
//     }
//     console.log(i);
//     ++i
// } while (i < 10)
// let MyName = "Abdul Haseeb"
// console.log(MyName);

// let u = 0;
// do {
//     ++u
//     if (u === 8) {
//         continue
//     }
//     console.log(u);

// } while (u < 10)










    let Find = " Rafale";
     let Days = 3;

  for (let i = 0; i < 3; i++) {
   let userInput = prompt("Find the missing plane:");

  if (userInput === Find) {
    alert("Find the missing plane:" + Find);
    break;
  } else {
    Days--;

    if (Days === 0) {
      alert("Not found bcz it's Shot Down");
    } else {
      alert(`Still missing. You have ${Days} day(s) remain's.`);
    }
  }
}