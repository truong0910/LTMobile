// Use Promise.race() to return whichever Promise resolves first.
function simulateTask2(time: number): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Chạy trong ${time}`)
        }, time)
    })
}


Promise.race([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(3000)
])
    .then((kq) => {
        console.log(kq);
    })
    .catch((err) => {
        console.error(err);
    })
