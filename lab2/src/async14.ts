// Write an async function that takes a number, waits 1 second, 
// and returns the number × 3.
async function number(num:number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const num1 = num*3
            console.log(num1);
        }, 1000)
    })
}

async function async14() {
    const kq = await number(10)
    console.log(kq);
    
}