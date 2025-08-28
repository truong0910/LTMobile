"use strict";
// Create a Promise chain: square the number 2, then double it, then add 5.
Promise.resolve(2)
    .then((num) => {
    return num * num;
})
    .then((num) => {
    return num * 2;
})
    .then((num) => {
    return num + 5;
})
    .then((kq) => {
    console.log(kq);
})
    .catch((err) => {
    console.error("err");
});
