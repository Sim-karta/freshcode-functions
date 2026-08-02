function isNumber(num) {
    return typeof num === "number" && !Number.isNaN(num);
}

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

const calculatePaintBoxes = function (area, layersCount = 1) {
    if (area <= 0 || layersCount <= 0) {
        return 0;
    }

    return Math.ceil((area / 10) * layersCount);
};

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
