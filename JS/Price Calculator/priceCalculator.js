function calculateDiscount(price, discountPercent) {
    return price * discountPercent / 100;
};

function calculateTax(priceAfterDiscount, taxPercent) {
    return priceAfterDiscount * taxPercent / 100;
};

function calculateFinalPrice(price, discountPercent, taxPercent) {
    let discount = calculateDiscount(price, discountPercent);
    let priceAfterDiscount = price - discount;
    let tax = calculateTax(priceAfterDiscount, taxPercent);
    return [priceAfterDiscount + tax, discount, tax];
};

function createPriceSummary(price, discountPercent, taxPercent) {
    let calcFinalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
    let finalPrice = calcFinalPrice[0], discount = calcFinalPrice[1], tax = calcFinalPrice[2];
    let priceSummary = {
        "price": price,
        "discount": discount,
        "tax": tax,
        "finalPrice": finalPrice
    };
    return priceSummary;
};

console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));