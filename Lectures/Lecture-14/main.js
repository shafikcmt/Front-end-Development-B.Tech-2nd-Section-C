var postURL = 'https://jsonplaceholder.typicode.com/posts';
var commentsURL = 'https://jsonplaceholder.typicode.com/comments';
var usersURL = 'https://jsonplaceholder.typicode.com/users';

var callPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url).then(resolve).catch(reject)
        },3000)
    })
}

var p1 = callPromise(postURL);
var p2 = callPromise(commentsURL);
var p3 = callPromise(usersURL);

Promise.all([p1,p2,p3]).then((responses)=>{
    // Convert object to array

    return Promise.all(responses.map((res)=> res.json()))
    .then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
})