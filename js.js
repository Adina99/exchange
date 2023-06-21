fetch('https://api.frankfurter.app/latest?from=RON')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        let currentExchangeRate = data;
    });
const td = document.getElementById('AUD');
