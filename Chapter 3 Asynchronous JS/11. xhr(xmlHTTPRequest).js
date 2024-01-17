// In this topic we will learn about xhr stands for xmlHTTPRequest.

// API / Paths / End Points
const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// Now here we have to make HTTP request using XMLHttpRequest constructor.

// There are multiple HTTP Mehtods OR http verbs.
// GET - For retreiving Data
// POST - For creating data
// DELETE - For deleting data
// PUT - For updating data
// PATCH - For making a minor changes in the data.

// The bydefault request of browser is GET.

// console.log(xhr.readyState)
// Here the value will be 0

// Now lets do the request.
// Step 1. Use open(request, URL) method.
xhr.open("GET", URL);

// After opening xhr
// console.log(xhr.readyState)

// The request will will go through from manyy states
xhr.onreadystatechange = function(){
    // console.log(xhr)

    // console.log(xhr.readyState)
    // Now here our readyState starts from 2. why ?
    //   Value	State	      Description
        // 0	UNSENT	        Client has been created. open() not called yet.
        // 1	OPENED	        Open() has been called.
        // 2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
        // 3	LOADING	        Downloading; responseText holds partial data.
        // 4	DONE	        The operation is complete.

        // 0. The ready state will be 1 before opening
        // 1. The ready state will be 2 after openning
        // 2. The server has received request and the status is available.
        // 3. The response holds
        // 4. Done, Operation completed
        
        // You can see above the readdy states priting

    // NOTE - When the ready state will be 4, then we will receive data from API.

    if (xhr.readyState === 4){
        // console.log(xhr.readyState)

        // console.log(xhr.response)
        // Congratulation we have received the response.

        // Lets check the type of xhr.response
        // console.log(typeof xhr.response);   // string

        // Now lets convert it into the JSON object.
        // const xhrResponse = xhr.response;
        // const data = JSON.parse(xhrResponse);
        
        // console.log(Array.isArray(data))   // True
        // We can also see in the browser

        // Some more thing to know about requests.
        // What if the links expires or mistakenly we change the link.
        // For example if we change the link. (postss).
        // The status will be 404. 
        // What does it means. lets search on the google.

        // There are multiple status numbers, which indicates different meaning.
        // 100 to 199 Informational response - The request was received and continuing process
        // 200 to 299 Successfull - The request was successfuly received, understand, and accepted
        // 300 to 399 Redirection - Further action need to be taken in order to complete the request
        // 400 to 499 Client Error - The request contain bad syntax or cannot be fulfilled 
        // 500 Server Error - The server failed to fulfil an apperantly valid request

        // Now our link is perfect and working fine, so our status code will be between 200.
        // console.log(xhr.status)
    }

}

// xhr.onreadystatechange will be called when th state cahnge and inside of this function we have t check for the state. If the state is equal to the 4 then do next things
// But we jave one more function called xhr.onload. This function will autmatically called when the state will be 4.
// So instead of using  that function, use .onload function.

xhr.onload = function(){
    // console.log("Onload invoked");
    // console.log(xhr.readyState)

    const xhrResponse = xhr.response;
    const data = JSON.parse(xhrResponse);
    console.log(data)
}

// NOTE - This all the work is running asynchronously.

xhr.send();