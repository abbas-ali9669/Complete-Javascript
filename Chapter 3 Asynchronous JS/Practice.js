const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");

function changeText(element, color, text, time){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.background = color
                resolve();
            }
            else{
                reject("Element Not Found");
            }
        }, time)
    })

}

changeText(heading1, "lightgreen", "Heading One", 1000)
    .then(()=> changeText(heading2, "lightyellow", "Heading Two", 1000))
    .then(()=> changeText(heading3, "lightblue", "Heading Three", 2000))
    .then(()=> changeText(heading4, "lightbrown", "Heading Four", 1000))
    .then(()=> changeText(heading5, "red", "Heading Five", 1000))
    .catch((error)=> console.log(error));