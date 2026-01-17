/* 
Ajax: Asynchronous javascript and XML

- AJAX is a web development technique that allows web pages to communicate with a server asynchronously without reloading the entire page

___________________________________________________________________

-- Fetch API:
// const api = "https://dummyjson.com/users/1";


// simple format:

(async () => {
    const res = await fetch(api);  // fetch() -> return a promise
    const data = await res.json();
    console.log(data);  // this is a object and return accurate data
})();


// Old way to fetch api:

document.querySelector('button').addEventListener('click', () => {
    fetch("https://dummyjson.com/users/1")
        .then((res) => res.json())
        .then(user => {
            console.log(user);
        })
});

// Modern way to write:

document.querySelector('button').addEventListener('click', () => {

    (async () => {
      console.log("Fetching data ....");
      const res = await fetch("https://dummyjson.com/users/1");  // fetch() -> return a promise
      console.log(res); // This is a Response object

      const data = await res.json(); // it is converts the JSON string to a js object
      console.log(data);

      const userDiv = document.getElementById("user");
      userDiv.innerHTML = 
      `<h2>
       id: ${data.id}, 
       Name: ${data.firstName} ${data.lastName},
       age: ${data.age}
      </h2>`
    })()

})



_______________________________________________________________________________

*/

// const api = "https://dummyjson.com/users/1";


// Old way to fetch api:

// document.querySelector('button').addEventListener('click', () => {
//     fetch("https://dummyjson.com/users/1")
//         .then((res) => res.json())
//         .then(user => {
//             console.log(user);
//         })
// });

// Modern way to write:

document.querySelector('button').addEventListener('click', () => {

    (async () => {
      console.log("Fetching data ....");
      const res = await fetch("https://dummyjson.com/users/1");  // return promise
      console.log(res); // This is a Response object

      const data = await res.json(); // it is converts the JSON string to a js object
      console.log(data);

      const userDiv = document.getElementById("user");
      userDiv.innerHTML = 
      `<h2>
       id: ${data.id}, 
       Name: ${data.firstName} ${data.lastName},
       age: ${data.age}
      </h2>`
    })()

})

