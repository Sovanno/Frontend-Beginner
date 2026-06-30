const space = " ";
const comma = ", ";

function createGreeting(firstName, lastName, timeOfDay) {
    return getGreeting(timeOfDay) + comma + formatName(firstName, lastName);
};

function formatName(firstName, lastName) {
    return String(firstName) + space + String(lastName);
};

function getGreeting(timeOfDay) {
    const goodWord = "Good";
    return goodWord + space + String(timeOfDay);
};

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));