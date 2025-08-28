"use strict";
// Write a function that rejects a Promise with the error
//  "Something went wrong" after 1 second.
function getErr() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Something went wrong");
        }, 1000);
    });
}
getErr().catch((kq) => {
    console.error(kq);
});
