const calculateSurfaceArea = function (shapeType, param1, param2 = 0) {
    let S = 0;
    if (shapeType === "cube") {
        S = 6 * Math.pow(param1, 2);
    } else if (shapeType === "cylinder") {
        S = 2 * Math.PI * param1 * (param1 + param2);
    }

    return S;
};

console.log(
    calculateSurfaceArea(
        prompt("Введіть тип фігури"),
        prompt("Введіть перше число"),
        prompt("Введіть друге число"),
    ),
);
