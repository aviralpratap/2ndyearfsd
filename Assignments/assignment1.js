let questions=[
["Capital of India?",["Delhi","Mumbai","Kolkata","Chennai"],0],
["How many days are in a week?",["5","6","7","8"],2],
["Red Planet?",["Earth","Mars","Jupiter","Venus"],1],
["How many months are in a year?",["10","11","12","13"],2],
["Largest ocean?",["Indian","Atlantic","Pacific","Arctic"],2]
];

let score=0;
let timer;
let time=150;

function start(){
document.getElementById("form").style.display="none";
document.getElementById("quiz").style.display="block";

let q="";

for(let i=0;i<questions.length;i++){
q+="<div class='question'>";
q+="<h3>"+(i+1)+". "+questions[i][0]+"</h3>";

for(let j=0;j<4;j++){
q+="<input type='radio' name='q"+i+"' value='"+j+"'> ";
q+=questions[i][1][j]+"<br>";
}

q+="</div>";
}

document.getElementById("questions").innerHTML=q;

timer=setInterval(function(){
time--;
document.getElementById("timer").innerHTML=time;

if(time==0){
time=150;
document.getElementById("timer").innerHTML=time;
}
},1000);
}

function submitQuiz(){
clearInterval(timer);

for(let i=0;i<questions.length;i++){
let answer=document.querySelector("input[name='q"+i+"']:checked");

if(answer && answer.value==questions[i][2]){
score++;
}
}

document.getElementById("quiz").style.display="none";

document.getElementById("result").innerHTML=
"<h2>Quiz Completed</h2><h3>Score: "+score+"/5</h3>";
}