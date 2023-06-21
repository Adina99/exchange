fetch('https://api.frankfurter.app/latest?from=RON')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let currentExchangeRate = data;

        currentExchangeRate.map(function (currencyName) {
            const info = document.getElementById('table-body');
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            rates.innerHTML = `${currencyName.rates}`;
            tr.appendChild(rates);
        });
    });
