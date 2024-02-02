/* Fetch results asynchronously.

Write a function that asynchronously fetches data from an API
[ https://jsonplaceholder.typicode.com/todos/1 ] and logs the result to the console. */


const url =  'https://jsonplaceholder.typicode.com/todos/1';

function fetchData(url){
    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
};

fetchData(url);