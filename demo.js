const api = "https://dummyjson.com/users/1";

const btn = document.getElementById("btn").addEventListener('click', () => {

    (async () => {
        const res = await fetch(api);
        const data = await res.json();
        console.log(data);

        const userDiv = document.getElementById("userDiv");
        userDiv.innerHTML = `<h2>${data.firstName} ${data.lastName}</h2>`
    })();
})