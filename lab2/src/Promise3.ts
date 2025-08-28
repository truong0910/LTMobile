// Write a function that rejects a Promise with the error
//  "Something went wrong" after 1 second.

function getErr() : Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong")
        }, 1000)
    })
}

getErr().catch((kq) => {
    console.error(kq);
    
})