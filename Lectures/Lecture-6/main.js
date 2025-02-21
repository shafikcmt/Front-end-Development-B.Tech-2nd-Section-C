document.write('<h2>Immediate Invoked Expression Function</h2>');

(()=>{
    document.write('Good Morning Students!!');
})();

document.write('<h2>Find Greater value from three numbers </h2>');
 
((a,b,c)=>{
    if(a>b){
        if(a>c){
            document.write('Greater value is A:'+a);
        }else{
            document.write('Greater value is C:'+c);
        }
    }else{
        if(b>c){
            document.write('Greater value is B:'+b);
        }else{
            document.write('Greater value is C:'+c);
        }
    }
})(2,5,8);

// Find odd and Even number using IIEF function

document.write('<h2>Constructor Function</h2>');

var obj1 = {
    fname:"Ragini",
    lname:"Sharma"
}

var obj2 = {
    fname:"Atul",
    lname:"Sharma"
}

var obj3 = {
    fname:"Aditi",
    lname:"Kumar"
}

function Person(fn,ln){
    this.fname = fn;
    this.lname = ln;
}

let p1 = new Person('Ragini','Sharma');
let p2 = new Person('Rahul','Kumar');
p2.age = '23';
console.log(p1);
console.log(p2);
document.write(p2.fname);