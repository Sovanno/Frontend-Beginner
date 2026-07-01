function cleanText(text) {
    return String(text).trim();
};

function capitalize(text) {
    text = String(text).toLowerCase();
    return String(text[0]).toUpperCase() + String(text).slice(1);
};

function formatDisplayName(firstName, lastName) {
    firstName = cleanText(firstName);
    firstName = capitalize(firstName);
    lastName = cleanText(lastName);
    lastName = capitalize(lastName);
    return firstName + " " + lastName;
};

console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));