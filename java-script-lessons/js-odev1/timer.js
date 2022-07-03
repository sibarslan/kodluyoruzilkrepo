let userName=document.querySelector("#myName");
userName.innerHTML=prompt("adınız:","Sibel Arslan");

function showTime(){
    let clock=new Date();
    clock=clock.toLocaleTimeString();

    var d=new Date();
    var today=d.getDay();
    var days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
    
    document.querySelector("#myClock").innerHTML=clock+" "+days[today];
    setTimeout(showTime,1000);
}

showTime();