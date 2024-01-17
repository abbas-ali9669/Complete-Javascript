// In this topic we will learn about how we can learn about the other method of http.
// how to put, patch, delete data using fetch.

const URL = "https://jsonplaceholder.typicode.com/posts";

// No here we can give an extra optional argument for other things
fetch(URL, {
    method: "POST",
    // Using JSON.stringify for converting it into the json object
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
    }),
    // The header is very important
    headers: {
        "Content-type": "application/json;  charset=UTF-8"
    }
})

// You can visit the the following URL for more understanding
// https://jsonplaceholder.typicode.com/
    .then((response) => response.json())
    .then((json)=> {
        for (let [key, value] of Object.entries(json)){
            console.log(key, value);
        }
    })