// let productList = 
// [
//     {
//         item: "Laptop0" , 
//         model: "HP" , 
//         year: 2022
//     },

//     {
//         item: "Laptop1" , 
//         model: "Dell" , 
//         year: 2023
//     },

//     {
//         item: "Laptop2" , 
//         model: "Asus" , 
//         year: 2024
//     }
// ]







// const getData = (dataId , getNextData) => {
//     setTimeout(() => {
        
//         console.log("data" , dataId);
        
//         if( getNextData ) {
//             getNextData();
//         }

//     }, 3000);
// }

// getData(1 , () => {
//     console.log("getting data 2....");
//     getData(2 , () => {
//         console.log("getting data 2....");
//         getData(3 , () => {
//             console.log("getting data 2....");
//             getData(4 , () => {
//             })
//         })
//     })
// });


// let promise = new Promise( ( resolve , reject) => {

//     console.log( "I am promises" );
//     reject("some error");

// } )
 


// const getData = ( dataId , getNextData ) => {

//     return new Promise( ( resolve , reject ) => {
//         setTimeout(() => {
//             console.log("data" , dataId);
//             resolve("success");

//             if( getNextData ) {
//                 getNextData();
//             }
//         }, 5000);
//     } )
// }




// const getPromise = () => {
//     return new Promise( ( resolve , reject ) => {
//         console.log("promise is here");
//         resolve("Success");
//     } )
// }

// let promise = getPromise();
// promise.then( () => {
//     console.log("promise fulfilled");
// } )





// const asyncFun1 = () => {
//     return new Promise( ( resolve , reject ) => {
//         setTimeout( () => {
//             console.log("data1");
//             resolve("success");
//         } , 4000 );
//     } )
// }

// const asyncFun2 = () => {
//     return new Promise( ( resolve , reject ) => {
//         setTimeout( () => {
//             console.log("data2");
//             resolve("success");
//         } , 4000 );
//     } )
// }

// console.log("fetching data 1 ......");
// asyncFun1().then( (res) => {
//     console.log("fetching data 2 ......");
//     asyncFun2().then( (res) => {

//     } )
// } )



// function api() {
//     return new Promise( (resolve , reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 3000);
//     } )
// }

// async function getWeatherData() {
//     await api();
// }
// getWeatherData();





//   .................................. API ....................................

// const getData = ( dataId ) => {

//     return new Promise( ( resolve , reject ) => {
//         setTimeout(() => {
//             console.log("data" , dataId);
//             resolve("success");
//         }, 2000);
//     } )
// }


// Async-await

// async function getAllData() {

//     console.log("fetching data 1.......");
//     await getData(1);

//     console.log("fetching data 2.......");
//     await getData(2);

//     console.log("fetching data 3.......");
//     await getData(3);

//     console.log("fetching data 4.......");
//     await getData(4);
// }
// getAllData();



//    ( async () => {
     

//     console.log("fetching data 1.......");
//     await getData(1);

//     console.log("fetching data 2.......");
//     await getData(2);

//     console.log("fetching data 3.......");
//     await getData(3);

//     console.log("fetching data 4.......");
//     await getData(4);

// }) ();




// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () => {
//     console.log("fetcing data ........")
//     let response = await fetch( URL );
//     console.log(response); // json format

//     let data = await response.json();
//     console.log(data);
// }



// const URL = "https://jsonplaceholder.typicode.com/todos/";

// const getData = async () => {
//     let response = await fetch(URL);
//     //console.log(response);

//     let finalData = await response.json();
//     //console.log(finalData);

// }
// getData();







// .............................CRUD OPERATION......................... //




/*
// ...... PRODUCT LIST READ ......    URL: https://crud.teamrabbil.com/api/v1/ReadProduct



const OnRead = async () => {
    const ReadUrl = "https://crud.teamrabbil.com/api/v1/ReadProduct";
    console.log("fetching data.....");

    let response = await fetch(ReadUrl);
    console.log(response);  // JSON Format

    let finalData = await response.json();
    console.log(finalData);  // Object Format

}
*/




// ....... PRODUCT LIST CREATE .......   url: https://crud.teamrabbil.com/api/v1/CreateProduct


// const OnCreate = async () => {

//     let CreateUrl = "https://crud.teamrabbil.com/api/v1/CreateProduct";

//     //header

//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     // Raw / request  Data

//     let RawData = {
//         "ProductName":"Comics Book",
//         "ProductCode":"#2023200000043",
//         "Img":"abc",
//         "UnitPrice":"2000",
//         "Qty":"100",
//         "TotalPrice":"2100"
//     }

//     // Option Data /  request format

//     let reqOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: JSON.stringify(RawData),   //    json ---> string
//     }


//     // get data

//     console.log("fetching data ......");
//     let CreateResponse = await fetch(CreateUrl , reqOptions);
//     let CreateData = await CreateResponse.json();
//     console.log(CreateData);

// }
// console.log(OnCreate());








/*
//  PRODUCT LIST DELETE    ------>> url + {id}


const OnDelete = async () => {
    const id = "667c0066c0df96138d5ff2ee";
    const URL = "https://crud.teamrabbil.com/api/v1/DeleteProduct/" + id;

    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
}

*/




/*
//  PRODUCT LIST UPDATE   ( Update like create )

// url: https://crud.teamrabbil.com/api/v1/UpdateProduct/667c2709c0df96138d5ff460  url + {id}


const onUpdate = () => {

    const id = "667c2709c0df96138d5ff460";
    const url = "https://crud.teamrabbil.com/api/v1/UpdateProduct/" + id;

    
    //header

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Raw / request  Data

    let RawData = {
        "ProductName":"Comics Books",
        "ProductCode":"#2023200000043",
        "Img":"abc",
        "UnitPrice":"2000",
        "Qty":"100",
        "TotalPrice":"2100"
    }

    // Option Data /  request format

    let reqOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(RawData),   //    json ---> string
    }


    // get data

    console.log("fetching data ......");
    let CreateResponse = await fetch(url , reqOptions);
    let CreateData = await CreateResponse.json();
    console.log(CreateData);

}

*/