const url = 'https://api.frankfurter.app/latest?from=RON';
async function fetchCurrencyData(url) {
    const response = await fetch(url);
    let body = await response.json();

    const rates = body.rates;
    console.log(rates);
    addRatesToPage(rates);
}
fetchCurrencyData(url);

function addRatesToPage(rates) {
    const tableBodytContainer = document.getElementById('tablebody');
    const tableData = document.createElement('td');
    tableBodytContainer.appendChild(tableData);
}
