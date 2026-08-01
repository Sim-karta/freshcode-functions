const checkAgeBtn = document.querySelector(".check-age-btn");

function isWorkingAgePerson(age) {
    return age >= 16 && age <= 64;
}

checkAgeBtn.addEventListener("click", () => {
    console.log(isWorkingAgePerson(prompt("Введіть вік людини - ")));
});
