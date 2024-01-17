// In this topic we will learn about the concept about function is returning promise

function myPromise(){
    const bucket = ["Floor", "Vegetable", "Salts", "Rice", "Water"];
    return new Promise((resolve, reject)=>{
        if (bucket.includes("Vegetable") && bucket.includes("Rice") && bucket.includes("Salt")){
            resolve()
        } else {
            reject()
        }
    })
}

// Now how we can consume that type promise.
myPromise().then(()=>{
    console.log("Lets Eat Fried Rice");
}).catch(()=>{
    console.log("Oppsss Not Enough Material");
})