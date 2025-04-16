// Javascript Promise
// var completed = true;
var promise = function(completed){
    return new Promise(function(resolve,reject){
    console.log('wait data is fetching!!')
    setTimeout(()=>{
        if(completed){
            resolve('I am success!!')
        }else{
            reject('i am failed!!')
        }
    },3000)
})
}

var onFulfill = (result)=>{
    console.log(result)
}

var onReject = (error)=>{
    console.log(error)
}
promise(true).then(onFulfill()).catch(onReject())
console.log(promise)