// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello Async")
    }, 2000)
})

promise.then((kq) => {
    console.log(kq);
    
})
