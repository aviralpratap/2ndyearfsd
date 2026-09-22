let questions=[
["Capital of India?",["Delhi","Mumbai","Kolkata","Chennai"],0],
["How many days are in a week?",["5","6","7","8"],2],
["Red Planet?",["Earth","Mars","Jupiter","Venus"],1],
["How many months are in a year?",["10","11","12","13"],2],
["Largest ocean?",["Indian","Atlantic","Pacific","Arctic"],2]
];

let score=0;
let current=0;
let time=30;
let timer;

function start(){
document.getElementById("form").style.display="none";
document.getElementById("quiz").style.display="block";

showQuestion();
startTimer();
}

function startTimer(){
clearInterval(timer);

timer=setInterval(function(){
time--;
document.getElementById("timer").innerHTML=time;

if(time==0){
clearInterval(timer);
nextQuestion();
}
},1000);
}

function showQuestion(){
let q=questions[current];

let html="<h3>"+(current+1)+". "+q[0]+"</h3>";

for(let i=0;i<4;i++){
html+="<input type='radio' name='answer' value='"+i+"'> ";
html+=q[1][i]+"<br>";
}

document.getElementById("questions").innerHTML=html;
document.getElementById("timer").innerHTML=time;
}

function nextQuestion(){
let answer=document.querySelector("input[name='answer']:checked");

if(answer && answer.value==questions[current][2]){
score++;
}

current++;

if(current<questions.length){
time=30;
showQuestion();
startTimer();
}
else{
clearInterval(timer);

document.getElementById("quiz").style.display="none";
document.getElementById("result").innerHTML=
"<h2>Quiz Completed</h2><h3>Score: "+score+"/5</h3>";
}
}

function submitQuiz(){
clearInterval(timer);
nextQuestion();
}