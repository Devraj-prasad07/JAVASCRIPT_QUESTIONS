/*Multiple requests.
Create an asynchronous function that retrieves data from two different API endpoints: "https://
jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder.typicode.com/posts/1". The first API returns
a to-do task, while the second API provides post details. The function should combine the results from both APIs
and log them as an object, where the keys are "todo" and "post", and the corresponding values are the
responses from the respective APIs. */

const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/posts/1";

function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error : ${error}`);
    });
}

const combineData = {};

Promise.all([fetchData(url1), fetchData(url2)])
  .then(([data1, data2]) => {
    combineData.todo = data1;
    combineData.post = data2;
    console.log(combineData);
  })
  .catch((error) => {
    console.error(error);
  });
