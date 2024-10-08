const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('exec0');
        reject(new Error('coisa'));
        console.log('exec1');
        resolve('RESOLVEU');
        console.log('exec2');
        return;
        console.log('exec3');
    }, 2000);
});


promessa.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
