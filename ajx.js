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

HTTP Methods: Get, post, delete, put

_______________________________________________________________________________


🔴 Get methods: Read data

(async () => {
    try {
        const res = await fetch(api);   // Send GET request (returns a Promise)
        const data = await res.json();  // Convert response to JS object
        console.log(data);              // Log fetched data
    } catch (error) {
        console.error("Error:", error); // Handle network or runtime errors
    }
})();


_______________________________________________________________________________


🔴 Post methods: Create data and have body and headers

(async () => {                     
    try {
        const res = await fetch(api, {   
            method: "POST",             
            headers: {
                "Content-Type": "application/json" // Send JSON data
            },
            body: JSON.stringify({       // Convert JS object to JSON
                name: "Faisal",
                role: "Backend Developer"
            })
        });

        const data = await res.json();   // Convert response to JS object
        console.log(data);               
    } catch (error) {
        console.error("Error:", error);  
    }
})();



_______________________________________________________________________________


🔴 Put methods: Rename entire existing data

(async () => {
    try {
        const res = await fetch(api, {
            method: "PUT",                    // Update existing resource
            headers: {
                "Content-Type": "application/json" // Send JSON data
            },
            body: JSON.stringify({
                name: "Faisal Updated",  // update existing data
                role: "Senior Backend Developer" // update existing data
            })
        });

        const data = await res.json();        // Convert response to JS object
        console.log(data);                    // Log updated data
    } catch (error) {
        console.error("Error:", error);       // Handle errors
    }
})();



________________________________________________________________________________



🔴 Delete methods:


(async () => {
    try {
        const res = await fetch(api, {
            method: "DELETE"          // Delete a resource
        });

        const data = await res.json(); // Server response
        console.log(data);             // Log result
    } catch (error) {
        console.error("Error:", error); // Handle errors
    }
})();




___________________________________________________________________________


🟡 Patch Method: Update specific field only


(async () => {
    try {
        const res = await fetch(api, {
            method: "PATCH",                  // Partially update resource
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                role: "Lead Backend Developer" // Update specific field only
            })
        });

        const data = await res.json();         // Convert response to JS object
        console.log(data);                     // Log updated data
    } catch (error) {
        console.error("Error:", error);        // Handle errors
    }
})();


*/

// const api = "https://dummyjson.com/users/1";


document.querySelector('button').addEventListener('click', () => {

    (async () => {
      console.log("Fetching data ....");
      const res = await fetch("https://dummyjson.com/users/1");  

      const data = await res.json(); 
      console.log(data);

      const userDiv = document.getElementById("user");
      userDiv.innerHTML = 
      `<h2> 
          id: ${data.id}, Name: ${data.firstName} ${data.lastName}, age: ${data.age}
      </h2>`
    })()

})

