
function submitData(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var roll = document.getElementById('roll').value;
    var branch = document.getElementById('branch').value;
    
    if(name =="" || email==""||roll==""||branch==""){
        window.alert('Field must not empty!!')
    }else{
        var display = document.getElementById('display');
        display.innerHTML += `
            <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${roll}</td>
            <td>${branch}</td>
            </tr>
        `
    }
}