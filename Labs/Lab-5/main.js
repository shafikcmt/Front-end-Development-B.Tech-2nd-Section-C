document.write('<h2>Javascript Basic Function</h2>');
document.write('<hr>');

function msg(){
    document.write('Hello Students, Good Afternoon!! <br>');
}
msg();
msg();
msg();
msg();

document.write('<h2>Function with arguments and parameters</h2>');
document.write('<hr>');

function sum(a,b){
    let add = a+b;
    document.write('Sum is: '+add+'<br>');
}
sum(23,89);
sum(23,100);
sum(23,400);
sum(389,89);

document.write('<h2>Function with Return Statements</h2>');
document.write('<hr>');

function oddEven(n){
    let oddevv = (n%2===0)?'Even Number':'Odd Number';
    return oddevv;
}
let oe = oddEven(10);
document.write('Number is: '+oe+'<br>');

// Second Example for Return Statement

function totalMarks(s1,s2,s3,s4,s5){
    let total = s1+s2+s3+s4+s5;
    return total;
}
let t = totalMarks(67,89,70,67,90);
document.write('Total Marks is: '+t+'<br>');

function percentage(tm){
    let per = tm/500*100;
    return per;
}
let p = percentage(t)
document.write('Percentage is:'+p+'%');

document.write('<h2>Expression Function</h2>');
document.write('<hr>');

// Named Expression function
let hello = function msg1(){
    document.write('Hello Students!!');
}
hello();

// Anonymous Expression function

let sub = function(a,b){
    let subs = a-b;
    document.write('<br> Sub is: '+subs);
}
sub(34,20);

document.write('<h2>Arrow Function</h2>');
document.write('<hr>');

let oddev = (n) => {
    return (n%2===0) ? 'Even Number':'Odd Number';
}
let oev = oddev(6);
document.write('Number is: '+oev+'<br>')

document.write('<hr>');

let oddev1 = n => (n%2===0) ? 'Even Number':'Odd Number';

let oev1 = oddev1(11);
document.write('Number is: '+oev1+'<br>')
