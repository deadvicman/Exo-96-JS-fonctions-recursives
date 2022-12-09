function myFunct(a) {
    let moi = document.getElementById("monDiv").innerHTML = "ma fonction est égale à : " + a;
    console.log("ma fonction est égale : " + a);
    (a++ <= 10) ? myFunct(a) : null;
    
}
myFunct(1);