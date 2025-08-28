"use strict";
// Write a Promise that reads an array after 1 second and filters even numbers.
function evenNumber(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const even = arr.filter((num) => num % 2 === 0);
            resolve(even);
        }, 1000);
    });
}
evenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
    .then((kq) => {
    console.log(kq);
});
