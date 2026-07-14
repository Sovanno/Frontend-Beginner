'use strict';

function hasMinimumLength(password) {
    return password.length >= 8;
};

function hasNumber(password) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (const number of numbers){
        if (password.includes(number)){
            return true;
        }
    };
    return false;
};

function hasUppercaseLetter(password) {
    const password_lower = password.toLowerCase();
    return !(password === password_lower);
};

function getFailedRules(password) {
    let failedRules = [];
    if (!hasMinimumLength(password)){
        failedRules.push("minimum length");
    };
    if (!hasNumber(password)){
        failedRules.push("number");
    };
    if (!hasUppercaseLetter(password)){
        failedRules.push("uppercase letter");
    };
    return failedRules;
};

function validatePassword(password) {
    const failedRules = getFailedRules(password);
    return {'valid': failedRules.length === 0, 'failedRules': failedRules};
};

console.log(validatePassword('hello'));
console.log(validatePassword('Hello123'));
console.log(validatePassword('hello123'));
console.log(validatePassword('HELLOABC'));