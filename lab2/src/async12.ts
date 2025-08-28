// Write an async function that calls simulateTask(2000) and logs the result.
async function simulateTask3(time: number): Promise<string>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done")
        }, time)
    })
}

async function async12() {
    const kq = await simulateTask3(2000)
    console.log(kq);
}

async12()