var winningScore  = 100;
var ws = document.getElementById("ws");
ws.value ="100";
var rollDice = document.getElementById("btn2");
var image = document.getElementById("dimg");
var current1 = document.getElementById("cscore1");
var current2 = document.getElementById("cscore2");
var activep1 = true;
var p1 = document.getElementsByClassName("dv1")[0];
var p2 = document.getElementsByClassName("dv1")[1];
var totp1 = document.getElementById("dvh12");
var totp2 = document.getElementById("dvh22");
p1.style.backgroundColor = "grey";
var currentScore,totScore;
var p1Status = document.getElementById("dvh11");
p1Status.style.color ="green";
var p2Status = document.getElementById("dvh21");
rollDice.addEventListener("click",fn1);
var num =6,previous,next;
function fn1(){
    previous =num;
    console.log(previous);
     num = Math.ceil(Math.random()*6);
    next =num;
    console.log(next);
     if(activep1){
         currentScore=Number(current1.textContent);
         
     }
     else{
        currentScore=Number(current2.textContent);
     }
    switch(num){
        case 1 : image.src = "d1.png";
        if(activep1){
        current1.textContent=0;
        p1.style.backgroundColor = "white";
        p2.style.backgroundColor = "grey";
        p2Status.style.color ="green";
        p1Status.style.color ="black";
        activep1=false;
        }
        else{
        current2.textContent=0;
        p1.style.backgroundColor = "grey";
        p2.style.backgroundColor = "white";
        p2Status.style.color ="black";
        p1Status.style.color ="green";
        activep1=true;
        }
            break;
        case 2 : 
            image.src = "d2.png";
            if(activep1){
               totScore= currentScore+2;
        current1.textContent=totScore;
            }
        else{
            totScore= currentScore+2;
            current2.textContent=totScore;
        }
        break;
        case 3 : image.src = "d3.png";
           if(activep1){
            totScore= currentScore+3;
            current1.textContent=totScore;
                }
            else{
                totScore= currentScore+3;
                current2.textContent=totScore;
            }
            break;
        case 4 : image.src = "d4.png";
        if(activep1){
            totScore= currentScore+4;
            current1.textContent=totScore;
                }
            else{
                totScore= currentScore+4;
                current2.textContent=totScore;
            }
            break;
        case 5 : image.src = "d5.png";
        if(activep1){
            totScore= currentScore+5;
            current1.textContent=currentScore+5;
                }
            else{
                totScore= currentScore+5;
                current2.textContent=totScore;
            }
            break;
        case 6 : image.src = "d6.png";
        if(activep1){
            totScore= currentScore+6;
            current1.textContent=totScore;
            if(previous===6 && next===6){
                fn5();
            }
                }
            else{
                totScore= currentScore+6;
                current2.textContent=totScore;
                if(previous===6 && next===6){
                    fn5();
                }
            }
            break;
    }
}
rollDice.addEventListener("mousedown",fn2);
function fn2(){
    this.style.backgroundColor="blue";
}
rollDice.addEventListener("mouseup",fn4);
function fn4(){
    this.style.backgroundColor="pink";
}
var hold = document.getElementById("btn3");
hold.addEventListener("click",fn3);
function fn3(){
    if(activep1){
        p1.style.backgroundColor = "white";
        p2.style.backgroundColor = "grey"; 
        var p1Score = Number(totp1.textContent);
        totp1.textContent =p1Score+totScore;
        totScore = 0;
        current1.textContent=totScore;
        p2Status.style.color ="green";
        p1Status.style.color ="black";
        if(Number(totp1.textContent)>=winningScore){
            p1Status.textContent ="Winner !";
            p1Status.style.color ="red";
            hold.removeEventListener("click",fn3);
            rollDice.removeEventListener("click",fn1);
        }
        activep1 = false;
    }
    else{
        p1.style.backgroundColor = "grey";
        p2.style.backgroundColor = "white"; 
        var p2Score = Number(totp2.textContent);
        totp2.textContent =p2Score+totScore;
        totScore = 0;
        current2.textContent=totScore;
        p2Status.style.color ="black";
        p1Status.style.color ="green";
        if(Number(totp2.textContent)>=winningScore){
            p2Status.textContent ="Winner !";
            p2Status.style.color ="red";
            hold.removeEventListener("click",fn3);
            rollDice.removeEventListener("click",fn1);
        }
        activep1 = true;
    }
}
function fn5(){
    if(activep1){
        p1.style.backgroundColor = "white";
        p2.style.backgroundColor = "grey"; 
        totScore = 0;
        totp1.textContent =totScore;
        current1.textContent=totScore;
        current2.textContent=totScore;
        p2Status.style.color ="green";
        p1Status.style.color ="black";
        activep1 = false;
    }
    else{
        p1.style.backgroundColor = "grey";
        p2.style.backgroundColor = "white"; 
        totScore = 0;
        totp2.textContent =totScore;
        current1.textContent=totScore;
        current2.textContent=totScore;
        p2Status.style.color ="black";
        p1Status.style.color ="green";
        activep1 = true;
    }
}
hold.addEventListener("mousedown",fn2);
hold.addEventListener("mouseup",fn4);
ws.addEventListener("input",fn6);
ws.addEventListener("change",fn6);
function fn6(){
    winningScore = Number(ws.value);
    totp1.textContent =0;
    totp2.textContent =0;
        current1.textContent=0;
        current2.textContent=0;
        image.src ="d6.png";
        previous =6;
        p1Status.textContent = "PLAYER 1";
        p2Status.textContent ="PLAYER 2";
        hold.addEventListener("click",fn3);
        rollDice.addEventListener("click",fn1);
        if(activep1){
            p1Status.style.color ="green";
            p2Status.style.color ="black";
        }
        else{
            p1Status.style.color ="black";
            p2Status.style.color ="green";
        }
}