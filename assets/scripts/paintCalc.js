const calcPaintBtn = document.querySelector(".calc-paint-btn");

function isNumber(num) {
    return typeof num === "number" && !Number.isNaN(num);
}

/**
 * Функція повертає обчислену площу заданої фігури
 *
 * @param {string} shapeType - тип фігури
 * @param {number} param1 - довжина ребра (cube) або радіус основи (cylinder)
 * @param {number} param2 - висота (cylinder)
 * @returns {number} Площа фігури
 */
const calculateSurfaceArea = function (shapeType, param1 = 0, param2 = 0) {
    let S = 0;

    if (!isNumber(param1) || !isNumber(param2) || param1 < 0 || param2 < 0) {
        return S;
    }

    if (shapeType === "cube") {
        S = 6 * Math.pow(param1, 2);
    } else if (shapeType === "cylinder") {
        S = 2 * Math.PI * param1 * (param1 + param2);
    }

    return S;
};

/**
 * Функція обчислює загальний об'єм фарби й повертає кількість цілих банок, яку потрібно купити
 *
 * @param {number} area - Площа фігури
 * @param {number} layersCount - Кількість шарів фарби
 * @returns {number} Кількість банок фарби
 */
const calculatePaintBoxes = function (area, layersCount = 1) {
    if (area <= 0 || layersCount <= 0) {
        return 0;
    }

    return Math.ceil((area / 10) * layersCount);
};

calcPaintBtn.addEventListener("click", () => {
    const shapeType = prompt("Введіть тип фігури");

    if (shapeType === "cube") {
        console.log(
            calculatePaintBoxes(
                calculateSurfaceArea(
                    shapeType,
                    Number(prompt("Введіть довжину ребра")),
                ),
                Number(prompt("Введіть кількість шарів фарби")),
            ),
        );
    } else if (shapeType === "cylinder") {
        console.log(
            calculatePaintBoxes(
                calculateSurfaceArea(
                    shapeType,
                    Number(prompt("Введіть радіус основи")),
                    Number(prompt("Введіть висоту")),
                ),
                Number(prompt("Введіть кількість шарів фарби")),
            ),
        );
    } else {
        console.log(calculatePaintBoxes(calculateSurfaceArea(shapeType)));
    }
});
