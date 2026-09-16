const studentForm = document.getElementById("studentForm");
const studentBody = document.getElementById("studentBody");
const totalStudents = document.getElementById("totalStudents");
const filterBranch = document.getElementById("filterBranch");
const noRecord = document.getElementById("noRecord");

updateTotal();
addDeleteEvent();

studentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const branch = document.getElementById("studentBranch").value;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${branch}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    studentBody.appendChild(row);

    studentForm.reset();

    addDeleteEvent();
    updateTotal();
    filterStudents();
});

filterBranch.addEventListener("change", filterStudents);

function filterStudents() {

    const selected = filterBranch.value;
    const rows = studentBody.getElementsByTagName("tr");

    let visible = 0;

    for (let row of rows) {

        const branch = row.cells[2].textContent;

        if (selected === "All" || branch === selected) {
            row.style.display = "";
            visible++;
        } else {
            row.style.display = "none";
        }
    }

    if (visible === 0) {
        noRecord.style.display = "block";
    } else {
        noRecord.style.display = "none";
    }
}

function addDeleteEvent() {

    const buttons = document.querySelectorAll(".delete-btn");

    buttons.forEach(function (button) {

        button.onclick = function () {

            this.parentElement.parentElement.remove();

            updateTotal();
            filterStudents();
        };

    });

}

function updateTotal() {
    totalStudents.textContent = studentBody.rows.length;
}