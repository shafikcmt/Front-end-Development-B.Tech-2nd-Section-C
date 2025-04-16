// Filter Method

var ages = [12,43,23,19,54,15];

document.writeln('Age before filter: '+ages+'<br>');

function checkAdult(age){
    return age >= 18;
}

var fiterAge = ages.filter(checkAdult);

document.writeln('Age after filter: '+fiterAge+'<br>');

document.writeln('<hr>')

// Given an array of numbers, filter out only the even numbers.

var numbers = [1,4,7,9,5,3,8,20];

var evenNumber = numbers.filter((n)=>{
    return (n%2===0)
})

document.write('Even Numbers: '+evenNumber);

document.writeln('<hr>')

// Given an array of objects representing people, filter out only those who are 18 or older.

var users = [
    {fname:'Rahul', lname:'Kumar',age:24},
    {fname:'Muskan', lname:'Kumar',age:17},
    {fname:'Nitin', lname:'Sharma',age:20},
    {fname:'Sahil', lname:'Kumar',age:23},
    {fname:'Shafiqul', lname:'Islam',age:26},
    {fname:'Ragini', lname:'Sharma',age:15}
];

var filterUser = users.filter((user)=>{
    return user.age > 18;
});

console.log(filterUser);

document.writeln('<hr>')

// Given an array of objects representing people, filter out only those who are 18 or older.

// Map Method

var value = [3,4,6,5,3,2];

document.writeln('Before Map: '+value+'<br>');
var modifide = value.map((v)=>{
    return v * 2;
});

document.writeln('After Map: '+modifide+'<br>');

document.writeln('<hr>');

// Given an array of user objects, use .map() to create a new array that contains only the fname.

var users1 = [
    {fname:'Rahul', lname:'Kumar',age:24},
    {fname:'Muskan', lname:'Kumar',age:17},
    {fname:'Nitin', lname:'Sharma',age:20},
    {fname:'Sahil', lname:'Kumar',age:23},
    {fname:'Shafiqul', lname:'Islam',age:26},
    {fname:'Ragini', lname:'Sharma',age:15}
];

var names = users1.map((user)=>{
    return `<li>${user.fname}-${user.lname}</li>`; 
});
document.writeln('<ul>');
document.writeln(`${names}`);
document.writeln('</ul>');

var names1 = ['rahul','Sagar','nitin','sahil','vansika']

var upperCase = names1.map((name)=>{
    return name.toUpperCase();
})
document.writeln(upperCase);