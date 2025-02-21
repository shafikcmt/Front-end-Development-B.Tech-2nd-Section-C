document.write('<h2>Javascript Rest Operator</h2>');
document.write('<hr>');

function sum(fname,lname, ...numbers){
    document.write(`Name is: ${fname} ${lname} <br> `);
    var i, add=0;
    for(i in numbers){
        document.write('Value is:'+ numbers[i]+'<br>');
        add += numbers[i];
    }
    document.write('Sum is: '+add+'<br>');

}

sum('Priya','Sharma',23,24,27,28);
var arr1 = [23,78,89,90,79];
var arr2 = [11,44,89,69,79];
sum('Nikhil','Sharma', ...arr1, ...arr2);