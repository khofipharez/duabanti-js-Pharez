function cedisToDollars(cedis){
    const exchangeRate = 15;
    const cediValue = cedis;
    const converter = cediValue / exchangeRate;
    return `${cedis} GHS = $${converter.toFixed(2)}`;
}
console.log(cedisToDollars(135));

function kmToMiles(km){
    const milesConverter = km * 0.621371;
    return `${km} km = ${milesConverter.toFixed(2)} miles`;
}
console.log(kmToMiles(17));

function celsiusToFahrenheit(celsius){
    const fahrenheitConverter = (celsius * 1.8) + 32;
    return `${celsius} °C = ${fahrenheitConverter.toFixed(2)} °F`;
}
console.log(celsiusToFahrenheit(46));