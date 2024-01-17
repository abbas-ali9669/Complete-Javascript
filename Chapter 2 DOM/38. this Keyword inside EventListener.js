// In this topic we will learn about how we can learn the concept of this keyword inside the eventListener method.
// This lecture is very usefull for the purpose of interview.
const btn = document.querySelector(".btn-headline");

function thisKey(){
    // In the case this the element itself is the value of this. For example the event is related to the button, then the button will be the value of this. If other element the then the value of this will be other element.
    console.log(this);
}

// // btn.addEventListener("click", thisKey)

// // In case of arrow function.
btn.addEventListener("click", ()=>{
    // In case of arrow function this value will be the window. For understanding is One level up from the arrow function (What if we print the from outside arrow function the value will also be the window object) just for understanding.
    console.log(this);
})



// For just practice to get the location.
// btn.addEventListener("click", ()=>{
//     navigator.geolocation.getCurrentPosition((position)=>{
//         const {latitude, longitude} = position.coords;
//         const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
//         fetch(url).then((res)=>res.json()).then((data)=>{
//             console.log(data.address);
//         }).catch(()=>{
//             console.log("Error fetching data from API")
//         })
//     })
// })