// Use .finally() to log "Done" when a Promise finishes (success or failure).
Promise.resolve(2)
    .then((num) => {
        return num * 2
    })
    .then((kq) => {
        console.log(kq);
    })
    .catch((err) => {
        console.error("err");
    })
    .finally(() => {
        console.log("done");
        
    })