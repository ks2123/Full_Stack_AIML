const nameInput = document.getElementById("studentName");
const mathsInput = document.getElementById("mathsMarks");
const englishInput = document.getElementById("englishMarks");
const scienceInput = document.getElementById("scienceMarks");
const button = document.getElementById("calculateBtn");
const resultBox = document.getElementById("resultBox");

button.addEventListener("click", function () {
    const name = nameInput.value;
    const maths = Number(mathsInput.value);
    const english = Number(englishInput.value);
    const science = Number(scienceInput.value);

    // Validation check
    if (!name || isNaN(maths) || isNaN(english) || isNaN(science)) {
        alert("Please enter all details properly!");
        return;
    }

    const totalMarks = maths + english + science;
    const percentage = totalMarks / 3;

    let grade = "FAIL";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";

    resultBox.innerHTML = `
        <p><strong>Student:</strong> ${name}</p>
        <p><strong>Total Marks:</strong> ${totalMarks} / 300</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});