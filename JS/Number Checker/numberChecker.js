function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    };
};

function isNegative(number) {
    if (number < 0) {
        return true;
    } else {
        return false;
    };
};

function isZero(number) {
    if (number === 0) {
        return true;
    } else {
        return false;
    };
};

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    };
};

function describeNumber(number) {
    const describeNum = {
        "positive": isPositive(number),
        "negative": isNegative(number),
        "zero": isZero(number),
        "even": isEven(number),
        "odd": !isEven(number)
    };
    return describeNum;
};

console.log(describeNumber(8));
console.log(describeNumber(-3));
console.log(describeNumber(0));
console.log(describeNumber(7));