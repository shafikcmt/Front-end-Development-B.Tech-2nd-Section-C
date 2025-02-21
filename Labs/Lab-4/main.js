document.write("<h2>Javascript Output</h2>")
document.getElementById('demo').innerHTML = 'Hello Shubham!';
// document.write()
// console.log()
// window.alert()
// innerHTML()

// window.alert('Hello Geeta!!');

document.write("<h2>Javascript Variables</h2>")
document.write('<hr><hr>')

document.write("<h2>Javascript Variable with var keyword</h2>")
var name1 = 'Abukakkar';
// ReDeclare Supported
var name1 = 'Ravi Malik';
// ReAssign Supported
name1 = 'Aslam';

document.write('Name is: '+name1+'<br>');
if(1==1){
    var num1 = 45;
    document.write('Value inside block: '+num1+'<br>')
}
document.write('Value outside block: '+num1+'<br>')


document.write('<hr>')

document.write("<h2>Javascript Variable with let keyword</h2>")
let name2 = 'Riya';
// let name2 = 'Khusbu'; ReDeclare not Supported
name2='Priya'; // ReAssign Supported
document.write('Name is: '+name2+'<br>')
if(2==2){
    let num2 = 199;
    document.write('Value inside block: '+num2+'<br>')
}
// document.write('Value outside block: '+num2+'<br>') Block Scope variable

document.write('<hr>')

document.write("<h2>Javascript Variable with const keyword</h2>")
const name3 = 'Billal'
// const name3 = 'Saniya' ReDeclare Not Supported
// name3 = 'Nizam' ReAssign not support
document.write('Name is: '+name3+'<br>')
if(3==3){
    const num3 = 400;
    document.write('Value inside block: '+num3+'<br>')
}
// document.write('Value outside block: '+num3+'<br>') Block Scope
document.write('<hr>')


document.write("<h2>Javascript Template String</h2>")
document.write('<hr>')
var a=23,b=45,sum=a+b;
document.write('A is:'+a+'<br>B is: '+b+'<br>and Sum is:'+sum);

document.write(`A is : ${a} <br> B is ${b} <br> and sum is : ${sum}`)





