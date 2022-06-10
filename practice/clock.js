function clock(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();

    s=checktime(s);
    m=checktime(m);
    h=checktime(h);

    document.getElementById('clock').innerHTML= h+":"+m+":"+s;

    var t=setTimeout(clock, 1000);

}

function checktime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}