// Create a function simulateTask(time) that returns a Promise resolving with "Task
// done" after time ms.


function simulateTask(time: number): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done")
        }, time)
    })
}

simulateTask(2000)
    .then((kq) => {
        console.log(kq);
        
    })