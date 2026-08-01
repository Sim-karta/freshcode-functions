function isWorkingAgePerson(age) {
    return age >= 16 && age <= 64;
}

console.log(isWorkingAgePerson(prompt("Введіть вік людини - ")));
