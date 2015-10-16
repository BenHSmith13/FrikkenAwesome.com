/**
 * Created by bensmith on 4/28/15.
 */

var n = 100;
var fibArr = [];

function setN(){
    n = document.getElementById("n").value;
    fibArr = [];
}


function fibonacci(x, y, i, n){
    fibArr[fibArr.length] = x;
    if(i >= n) {
        document.getElementById("answer").innerHTML = x;
        return;
    }
    return fibonacci(y, x+y, i+1, n);
}

function allFibs(){
    document.getElementById("fibs").innerHTML = fibArr.toString();
}