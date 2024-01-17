
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event Bubbling / Propagation
// child.addEventListener("click", ()=>{
//     console.log("Event Bubble Child")
// })
// parent.addEventListener("click", ()=>{
//     console.log("Event Bubble Parent")
// })
// grandparent.addEventListener("click", ()=>{
//     console.log("Event Bubble GrandParent")
// })
// document.body.addEventListener("click", ()=>{
//     console.log("Event Bubble Body")
// })

// Now why we click on the child and the parent events triggers ?
// Event bubbling starts from child to parent.
// The browser see if the same event is applied on the parent then the browser will invoke the parent ass well
// Bubbling will parent wise. is called Event Bubbling also called as Event propagation.

// Event Capturing.
// For appltin event capturing we have to pass an argument "true" inside the eventlistener method 
// Event capturing start from parent
// The browser see if the same event is applied on the child then the browser will invoke the parent ass well

// child.addEventListener("click", () => {
//     console.log("Event Capture Child")
// }, true)
// parent.addEventListener("click", () => {
//     console.log("Event Capture Parent")
// }, true)
// grandparent.addEventListener("click", () => {
//     console.log("Event Capture GrandParent")
// }, true)
// document.body.addEventListener("click", () => {
//     console.log("Event Capture Body")
// }, true)

// The browser will see the parent of parent, if the eventlsitener capture an event ?
// If whereever the event captures, it will print. (In our case we start capturing event from body).
// The event capturing see the child wise.

// This all the process of capturing and bubbling is running on U shape.
// First they will search for capturing then bubbling.


// Event Delegation
// Event Delegaton is about you odnt need to apply event listener on each of the element. Just applly the event listener on th grand parent. First the capturing will happens and check for the child if any of the child contain same event then it will be print but then the bubbling will occur and check for the parent, and if we click on the child the bubbling will occur and the event will be triggers. Because the same event is applied on a parent.
// But how would we know which element has triggers the event ?
// We will use the target and current target property of the event object.


grandparent.addEventListener("click", (event)=>{
    console.log(event.target);
    // Now here it(target) will print which element has triggers the event.
    // This mwthod is very usefull for not to apply the event listener on all the elements. Just apply in the grandparent and use the target property
})

// 1. target - Which elements triggers the events.
// 2. currentTarget - Which element we have atttached the event listener.