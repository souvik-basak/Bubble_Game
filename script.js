var RandNum=0;
var score=0;
// for generating random number
function MakeBubble()
{var clutter="";
for(var i=1;i<=133;i++){
    var number=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${number}</div>`;
};
    document.querySelector(".containerBottom").innerHTML=clutter;
};
// for timer Interval
function runTime()
{
    var timer=60;
    var timerInterval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#time").textContent=timer;
        }else{
            clearInterval(timerInterval);
            document.querySelector(".containerBottom").innerHTML=`<h1>Game Over!!!</h1>`;
            alert(`Woo Hoo!!🎉
Your score is ${score}
Thanks for Playing!`)
        }
        },1000);
};
// for getting new hit
function getNewHit()
{
    RandNum = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent=RandNum;
};
// for every new score
function increaseScore()
{
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}
// we can add event listener to the parent of parent...n of every element
// we have to add event listener in parent of the bubble
// i.e. containerBottom, because there are more than 130 bubbles
// and it is physically impossible to add event listener to every single
// bubble, now every bubble has a common parent so it is better to use the parent for
// adding event listener.
document.querySelector(".containerBottom").addEventListener("click",
function(details){
    var clickedNumber=Number(details.target.textContent);
    if(clickedNumber === RandNum){
        increaseScore();
        MakeBubble();
        getNewHit();
    }
})
getNewHit();
runTime();
MakeBubble();