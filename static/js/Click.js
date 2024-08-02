function cContent(){
    document.getElementById("Click").innerHTML = "Hello world！"
}

function bSize(){
    document.getElementById("Click").style.fontSize = "60px" 
}

function sSize(){
    document.getElementById("Click").style.fontSize = "20px" 
}

function disAppear(){
    document.getElementById("Click").style.display = "none"
}

function Appear(){
    document.getElementById("Click").style.display = "block"
}

function myFunction(a,b){
    return a * b;  
}

function myFunction2(){
    document.getElementById("Click"). innerHTML = myFunction(2,3)
}

