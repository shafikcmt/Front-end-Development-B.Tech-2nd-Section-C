// setInterval(callbacfunction, timing) 2000
var a = 0;

var anim = setInterval(()=>{
    a = a + 10;
    if(a==100){
        clearInterval(anim);
    }else{
        var target = document.getElementById('test');
        target.style.width = a + 'px';
        // console.log(a);
    }
},1000);

// setTimeout & clearTimeout

var ani = setTimeout(Animation,3000);

 function Animation(){
    var target1 = document.getElementById('test1');
    target1.style.marginLeft = '200px';
    target1.style.transition = '2s';
    console.log('hello')
}

function stopAnimation(){
    clearTimeout(ani)
    window.alert('Animation is Stop!!');
}

