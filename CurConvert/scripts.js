


let mode = prompt("Enter '1' to look up currency codes or '2' if you are ready to convert");

while (mode == 1){
    let input = prompt("Partial currency string to look up?");

    addToPossibleList(input);

    alert(possibleCurrency);
    wipePossibleList();
    mode = prompt("Enter 1 to lookup another currency. Enter 2 if ready to convert.");
}


let conversionFrom = prompt("From what currency code?");
let conversionTo = prompt("To what currency code?");
let conversionAmount = prompt("How much currency to convert?");

alert('' + conversionFrom + ' ' + conversionAmount +  ' = ' + conversionTo + ' '
    + convert(conversionFrom, conversionTo, conversionAmount).toFixed(2));