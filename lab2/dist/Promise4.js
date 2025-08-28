"use strict";
// Use .then() and .catch() to handle a Promise that returns a random number.
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num < 0) {
            resolve(num);
        }
        else {
            reject("Err");
        }
    });
}
getRandomNumber()
    .then((kq) => {
    console.log(kq);
})
    .catch((err) => {
    console.error(err);
});
