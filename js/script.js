
document.getElementById("form-btn").addEventListener("click",
    function () {

        // Richiesta dati utente
        const userName = document.getElementById('user-name').value;
        console.log(userName);

        const userKm= document.getElementById('user-km').value;
        console.log(userKm);

        const userAge= document.getElementById('user-age').value;
        console.log(userAge);

        // Dati per calcolo
        const price = userKm * 0.21
        console.log(price);

        const carriage = Math.floor(Math.random() * 10) + 1;
        console.log(carriage);
        const codiceCP = Math.floor(Math.random() * 99998) + 1;
        console.log(carriage);
        let sale = 0;
        let saleApplied = 0;
        let offer = 'Biglietto Standard';

        // Calcolo sconto
        if (userAge === 'minor') {
            sale = 20;
            offer = 'Biglietto Silver'
            console.log(sale);
        
            saleApplied = (price * sale) / 100;
            console.log(saleApplied);
        } else if (userAge === 'over-65') {
            sale= 40;
            offer = 'Biglietto Gold'
            console.log(sale);
        
            saleApplied = (price * sale) / 100;
            console.log(saleApplied);
        }

        // Calcolo prezzo finale
        const priceSale = price - saleApplied;
        console.log(priceSale);

        document.getElementById('price').innerHTML = priceSale.toFixed(2);
        document.getElementById('name').innerHTML = userName;

});

document.getElementById("clear-btn").addEventListener("click",
    function () {
        const userName = document.getElementById('user-name');
        console.log(userName);
        userName.value = "";

        const userKm= document.getElementById('user-km');
        console.log(userKm);
        userKm.value = "";

        const userAge= document.getElementById('user-age');
        console.log(userAge);
        userAge.value = "";
});