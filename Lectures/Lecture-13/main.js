var p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The first promise is solved');
        resolve(10);
    },1*1000)
});

var p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Second promise is fail');
        reject('Fail');
    },2*1000)
});

var p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The Third promise is solved');
        resolve(30);
    },3*1000)
});

Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`Result: ${result}`);
}).catch((error)=>{
    console.log('Promise is fail');
})