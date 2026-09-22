let questions = [
    ["Capital of India?", ["Delhi", "Mumbai", "Kolkata", "Chennai"], 0],
    ["How many days are in a week?", ["5", "6", "7", "8"], 2],
    ["Red Planet?", ["Earth", "Mars", "Jupiter", "Venus"], 1],
    ["How many months are in a year?", ["10", "11", "12", "13"], 2],
    ["Largest ocean?", ["Indian", "Atlantic", "Pacific", "Arctic"], 2]
];

let current = 0;
let answers = new Array(questions.length).fill(null);
let time = 30;
let timer;
let studentName = "";

function startQuiz() {

    let name = document.getElementById("name").value;
    let branch = document.getElementById("branch").value;
    let section = document.getElementById("section").value;
    let roll = document.getElementById("roll").value;

    if (
        name === "" ||
        branch === "" ||
        section === "" ||
        roll === ""
    ) {
        alert("Please fill all details");
        return;
    }

    studentName = name;

    document.getElementById("studentForm")
        .classList.add("hidden");

    document.getElementById("quiz")
        .classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {

    clearInterval(timer);

    time = 30;

    updateTimer();

    timer = setInterval(() => {

        time--;

        updateTimer();

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }

    }, 1000);

    let q = questions[current];

    document.getElementById("question").innerText =
        q[0];

    document.getElementById("progressBar").style.width =
        ((current + 1) / questions.length) * 100 + "%";

    let options = document.getElementById("options");

    options.innerHTML = "";

    q[1].forEach((option, index) => {

        let label = document.createElement("label");

        label.className = "option";

        if (answers[current] === index) {
            label.classList.add("selected");
        }

        label.innerHTML = `
            <input type="radio"
                   name="answer"
                   ${answers[current] === index ? "checked" : ""}>
            <span>${option}</span>
        `;

        label.onclick = function() {
            selectAnswer(index);
        };

        options.appendChild(label);
    });

    if (current === questions.length - 1) {
        document.getElementById("nextBtn").innerText =
            "Submit Quiz";
    } else {
        document.getElementById("nextBtn").innerText =
            "Next";
    }
}

function selectAnswer(index) {

    answers[current] = index;

    let options =
        document.querySelectorAll(".option");

    options.forEach((option, i) => {

        option.classList.remove("selected");

        if (i === index) {
            option.classList.add("selected");
        }
    });
}

function nextQuestion() {

    if (current === questions.length - 1) {
        submitQuiz();
        return;
    }

    current++;

    loadQuestion();
}

function updateTimer() {

    let timerElement =
        document.getElementById("timer");

    timerElement.innerText = time;

    timerElement.classList.remove(
        "warning",
        "danger"
    );

    if (time <= 10) {
        timerElement.classList.add("danger");
    } else if (time <= 20) {
        timerElement.classList.add("warning");
    }
}

function submitQuiz() {

    clearInterval(timer);

    let correct = 0;
    let attempted = 0;

    for (let i = 0; i < questions.length; i++) {

        if (answers[i] !== null) {

            attempted++;

            if (answers[i] === questions[i][2]) {
                correct++;
            }
        }
    }

    let wrong = attempted - correct;

    let unattempted =
        questions.length - attempted;

    document.getElementById("quiz")
        .classList.add("hidden");

    document.getElementById("result")
        .classList.remove("hidden");

    document.getElementById("resultName")
        .innerText = studentName;

    document.getElementById("score")
        .innerText = correct;

    document.getElementById("attempted")
        .innerText = attempted;

    document.getElementById("correct")
        .innerText = correct;

    document.getElementById("wrong")
        .innerText = wrong;

    document.getElementById("unattempted")
        .innerText = unattempted;
}

document.addEventListener("keydown", function(event) {

    if (
        document.getElementById("quiz")
            .classList.contains("hidden")
    ) {
        return;
    }

    if (
        event.key >= "1" &&
        event.key <= "4"
    ) {

        let index = Number(event.key) - 1;

        if (index < questions[current][1].length) {
            selectAnswer(index);
        }
    }

    if (event.key === "Enter") {
        nextQuestion();
    }
});
