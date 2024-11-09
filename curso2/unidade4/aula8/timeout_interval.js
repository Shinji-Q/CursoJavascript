const timeout = setTimeout(() => {
    console.log('exec timeout');
}, 2000)

const interval = setInterval(() => {
    console.log('exec interval');
}, 2000);


setTimeout(() => {
    clearInterval(interval);
},5000);

setTimeout(() => {
    console.log('blocking first timeout');
    clearTimeout(timeout);
}, 1000)
