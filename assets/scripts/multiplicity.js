const checkMultiplicityBtn = document.querySelector(".check-multiplicity-btn");

function checkMultiplicity(num1, num2) {
    return num1 % num2 === 0;
}

checkMultiplicityBtn.addEventListener("click", () => {
    console.log(
        checkMultiplicity(
            prompt("Введіть перше число"),
            prompt("Введіть друге число"),
        ),
    );
});
