// In this topic we will learn about how we can learn the concept of using promise and setTimeout together.

function myPromise(){
    return new Promise ((resolve, reject)=>{
        const value = false;
        setTimeout(()=>{
            if (value){
                resolve()
            } else {
                reject()
            }
        }, 2000)
    })
}

myPromise()
.then(()=>{console.log("Resolve")})
.catch(()=>{console.log("Reject")})