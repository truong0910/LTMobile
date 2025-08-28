// Use Promise.all() to run 3 simulated Promises in parallel and print the result.
function simulateTask1(time: number): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Chạy trong ${time}`)
        }, time)
    })
}

Promise.all([
    simulateTask1(1000),
    simulateTask1(2000),
    simulateTask1(3000)
])
    .then((kq) => {
        console.log(kq);
    })
    .catch((err) => {
        console.error(err);
    })

