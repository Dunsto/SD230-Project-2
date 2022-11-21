const exchangeRateMap = new Map();
const base = 1;

exchangeRateMap.set("USD", 1);
exchangeRateMap.set("AUD", 1.531863);
exchangeRateMap.set("CAD", 1.36029);
exchangeRateMap.set("CLP", 950.662057);
exchangeRateMap.set("CNY", 7.128404);
exchangeRateMap.set("EUR", 1.03203);
exchangeRateMap.set("GBP", 0.920938);
exchangeRateMap.set("INR", 81.255504);
exchangeRateMap.set("JPY", 143.376504);
exchangeRateMap.set("RUB", 57.875038);
exchangeRateMap.set("ZAR", 17.92624);


//add wrong input error
function convert(from, to, amount) {
    if (exchangeRateMap.has(from) && exchangeRateMap.has(to)) {
        //(from rate * amount) = in usd
        // in usd * to rate = to
        let fromInUsd = 1 / exchangeRateMap.get(from) * amount;

        return (fromInUsd * exchangeRateMap.get(to));
    } else {
        alert("Invalid code, please use currency code look up feature.");
    }



}

