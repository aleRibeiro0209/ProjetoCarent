// Criação dos cards
const cardsCar = document.querySelector('.cardsCars')
const cars = [
    {
        name: "Jepp Renegate",
        quantPassa: "5",
        tipoCombus: "Gasolina",
        modelo: "SUV",
        valor: 350
    },
    {
        name: "McLaren P1",
        quantPassa: "2",
        tipoCombus: "Hibrido",
        modelo: "Esportivo",
        valor: 780
    },
    {
        name: "MINI Countryman",
        quantPassa: "5",
        tipoCombus: "Elétrico",
        modelo: "SUV",
        valor: 210
    },
    {
        name: "Porsche 918 Spyder",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupé",
        valor: 2350
    },
    {
        name: "Porsche 911 Turbo S",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupé",
        valor: 1200
    },
    {
        name: "Aston Martin Vantage",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupé",
        valor: 1990
    },
    {
        name: "Porsche Taycan Turbo S",
        quantPassa: "4",
        tipoCombus: "Elétrico",
        modelo: "Sedan",
        valor: 1100
    },
    {
        name: "Lamborghini Urus",
        quantPassa: "5",
        tipoCombus: "Gasolina",
        modelo: "SUV",
        valor: 1760
    },
    {
        name: "Bentley Bentayga Speed",
        quantPassa: "5",
        tipoCombus: "Gasolina",
        modelo: "SUV",
        valor: 2090
    }
];

let i = 1
cars.forEach(car => {
    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `<img class="carImg" src="./src/img/carCard${i}.svg" alt="">
    <div class="dataOfCar">
        <div class="nameConfig">
            <h2>${car.name}</h2>
            <div class="infoCar">
                <div class="infoCarBasic">
                    <img src="./src/img/user.svg" alt="">
                    <p>${car.quantPassa}</p>
                </div>
                <div class="infoCarBasic">
                    <img src="./src/img/gas-station.svg" alt="">
                    <p>${car.tipoCombus}</p>
                </div>
                <div class="infoCarBasic">
                    <img src="./src/img/carP.svg" alt="">
                    <p>${car.modelo}</p>
                </div>
            </div>
        </div>
        <div class="valorButton">
            <div>
                <p>Daily rate from</p>
                <p class="valor">$${car.valor}</p>
            </div>
            <button class="btnStyle btnPageCar">Book Now</button>
        </div>
    </div>`
    cardsCar.appendChild(card)
    i++
});

// Carrossel
const setaRight = document.getElementById("set-right");
const setaLeft = document.getElementById("set-left");
const circleSelec = document.querySelectorAll(".circle");
const items = document.querySelectorAll(".card");
const tam = items.length; 
let cardCorrente = 1;
let bulletCir = 0;

setaLeft.addEventListener('click', () => {

    cardCorrente -= 3;

    if (cardCorrente < 0) {
        cardCorrente = tam-2;
    }

    circleSelec[bulletCir].classList.remove('select')
    bulletCir--
    if (bulletCir < 0) {
        bulletCir = 2
    }
    circleSelec[bulletCir].classList.add('select')

    items[cardCorrente].scrollIntoView({
        inline: "center",
        block: "center",
    });

})

setaRight.addEventListener('click', () => {
    cardCorrente += 3;
    
    if (cardCorrente >= tam-1) {
        cardCorrente = 1;
    }

    circleSelec[bulletCir].classList.remove('select')
    bulletCir++;
    if (bulletCir > 2) {
        bulletCir = 0;
    }
    circleSelec[bulletCir].classList.add('select')
    
    items[cardCorrente].scrollIntoView({
        inline: "center",
        block: "center"
    });
})