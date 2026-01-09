/*

const getData = (data) => {
    setTimeout(() => {
        console.log("Data", data);
    })
}

getData(1);

Data:  1
Data:  3
Data:  2 
*/


// callback:

// const getData = (data, getNextData) => {
//     setTimeout(() => {
//         console.log("Data: ", data);
//         getNextData();
//     }, 2000);
// }
// getData(1, () => {
//     getData(3, () => {
//         getData(2, () => {})
//     })
// })



// Promises:

// const getData = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("Data", data);
//           resolve("SUCCESS");
//         }, 2000);
//     })
// }

// getData(1).then((res) => {
//     getData(2).then((res) => {
//         getData(3);
//     });
// });




// async await

// const getData = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", data);
//       resolve("Success");
//     }, 2000);
//   })
// };

// (async function fetchApi() {
//     await getData(1);
//     await getData(3);
//     await getData(2);
// })();
