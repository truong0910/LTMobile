// Handle errors using try/catch with async/await 

async function checkNumber(num: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num >= 0) {
        resolve(`Valid number: ${num}`);
      } else {
        reject("Error: Negative number not allowed");
      }
    }, 1000);
  });
}

async function runCheck() {
  try {
    const result = await checkNumber(-5); 
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}
