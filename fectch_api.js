/*
API = Application Programming Interface
fetch() -> return a promise

*/

const url = "https://movie-database-alternative.rapidapi.com";

const api = async () => {
    let response = await fetch(url);
    console.log(response);
}
api();