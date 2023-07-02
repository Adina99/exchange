const url = 'https://api.frankfurter.app/latest?from=RON';
async function fetchCurrencyData(url) {
    const response = await fetch(url);
    let body = await response.json();
    let rates = body.rates;
    console.log(rates);
    const arrayRates = Array.from(Object.keys(rates), (key) => rates[key]);
    console.log(arrayRates);

    arrayRates.forEach((number, index) => {
        const tableBody = document.getElementById('current-exchange-rate-tablebody');
        const createTr = document.createElement('tr');

        const createTd1 = document.createElement('td');
        const createTd2 = document.createElement('td');

        createTr.appendChild(createTd1);
        createTr.appendChild(createTd2);

        tableBody.appendChild(createTr);
    });

    for (i = 0; i < arrayRates.length * 2; i++) {
        if (i % 2 == 0) {
            let td1 = document.querySelectorAll('td')[i];
            const rate = Object.getOwnPropertyNames(rates);
            td1.innerText = rate[i / 2];
        } else {
            let td2 = document.querySelectorAll('td')[i];
            td2.innerText = arrayRates[(i - 1) / 2];
        }
    }
}
fetchCurrencyData(url);
