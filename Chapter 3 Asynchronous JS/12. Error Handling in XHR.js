// In this topic we will learn about how we can handle the errors in xhr.

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
xhr.open("GET", URL);

xhr.onload = () => {
    // Now here we will use the if condition and check for the status for handling an error.
    if (xhr.status >= 200 && xhr.status <300){
        const data = JSON.parse(xhr.response);
        console.log(data);
    }
    else {
        console.log("Something went wrong");
    }

}

// And what if we the internet connection is disconnected ?
// The xhr object has a function for checking the connection. If the connection is disconnected it will be notified. else program executes
xhr.onerror = () =>{
    // The browser will check for that.
    console.log("Check internet connection")
}

xhr.send();