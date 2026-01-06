/*
- async await is a keyword in js.
- 'async function always return a promise'.
- await pauses the execution of it's surrounding async function until the promise is settle.

-------------------------------------


// example 1:

// assume like a api
function api(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Weather data ${val} ...`);
            resolve();
        }, 2000);
    })
}

async function getWeatherData() {
    
    await api(1); 
    await api(2);
    await api(3);
}
getWeatherData();




// Using IIFE:

function api(val) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Weather data ${val} ...`);
      resolve();
    }, 2000);
  });
}

// Not need to create a function and call the function
(async () => {
  await api(1);
  await api(2);
  await api(3);
})();

*/
