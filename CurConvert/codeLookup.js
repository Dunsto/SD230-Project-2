const currencySymbols = [
    "AUD: Australian Dollar",
    "CAD: Canadian Dollar",
    "CLP: Chilean Peso",
    "CNY: Chinese Yuan",
    "EUR: Euro",
    "GBP: British Pound Sterling",
    "INR: Indian Rupee",
    "JPY: Japanese Yen",
    "RUB: Russian Ruble",
    "USD: United States Dollar",
    "ZAR: South African Rand"
];
let possibleCurrency = new Array();

//put lower case conditon in
function addToPossibleList(input){

    for (let i = 0; i < currencySymbols.length; i++){
        if (currencySymbols[i].toLowerCase().includes(input.toLowerCase())){
            possibleCurrency.push(currencySymbols[i]);
        }
    }
}

function wipePossibleList(){
    possibleCurrency = new Array();
}

function alertPossibleCurrency(){
    alert(possibleCurrency);
}