const url = 'https://api.frankfurter.app/latest?from=RON';
async function fetchCurrencyData(url) {
    const response = await fetch(url);
    let body = await response.json();

    let rates = body.rates;
    console.log(rates);
    const arrayRates = Array.from(Object.keys(rates), (key) => rates[key]);
    console.log(arrayRates);
    /*addRatesToPage(rates);*/
    /*function putRatesInTable(array){
        let 
        for (let i=0; i<array.length; i++){

        }
    }*/
    arrayRates.forEach((number, index) => {
        const tableBody = document.getElementById('tablebody');
        const createTr = document.createElement('tr');

        const createTd1 = document.createElement('td');
        const createTd2 = document.createElement('td');

        createTr.appendChild(createTd1);
        createTr.appendChild(createTd2);

        tableBody.appendChild(createTr);
    });
    let currency = document.getElementsByClassName('number')[0];
    currency.textContent = arrayRates[0];
}
fetchCurrencyData(url);

/*function addRatesToPage(rates) {
    const tableBodytContainer = document.getElementById('tablebody');
    const tableData = document.createElement('td');
    tableBodytContainer.appendChild(tableData);
}*/
