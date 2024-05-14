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

// Criando os cards do segundo carrossel
const clientCards = document.querySelector('.clientCards')
const coments = [
    {
        userPic: 'cliCard1',
        userName: 'Kristin Watson',
        userComent: 'I rented a car for a one-week trip from Carnet on the recommendation of my friend. Actually, I am satisfied with them.'
    },
    {
        userPic: 'cliCard2',
        userName: 'Robert Fox',
        userComent: 'During my last trip, I used a Carent sport car . The car was completely clean and had enough gas.'
    },
    {
        userPic: 'cliCard3',
        userName: 'Sarah Thompson',
        userComent: 'Carnet provided me with excellent service during my recent rental. The car was in great condition, and the whole process was smooth and efficient.'
    },
    {
        userPic: 'cliCard4',
        userName: 'Emily Garcia',
        userComent: 'I booked a family vacation car through Carnet and it was a fantastic experience. The car was spacious, clean, and perfect for our trip. Highly recommend!'
    },
    {
        userPic: 'cliCard5',
        userName: 'Michael Patel',
        userComent: 'Carnet made my business trip hassle-free with their reliable car rental service. The car was ready on time, and the return process was quick and easy. Will definitely use them again.'
    }
]

coments.forEach(coment => {
    const cardCli = document.createElement("div")
    cardCli.classList.add("cardCli")

    cardCli.innerHTML = `<img src="./src/img/${coment.userPic}.svg" alt="Imagem de perfil do usuário">
    <div class="nameComent">
        <h2>${coment.userName}</h2>
        <p>${coment.userComent}</p>
    </div>`
    clientCards.appendChild(cardCli)
});

// Carrossel com os comentários dos clientes
const setaRightCli = document.getElementById("set-rightCli");
const setaLeftCli = document.getElementById("set-leftCli");
const carrosselCli = document.querySelectorAll(".cardCli");
const tamCli = carrosselCli.length;
let cardCliCorrente = 0;

setaLeftCli.addEventListener('click', () => {
    cardCliCorrente -= 1;

    if (cardCliCorrente < 0) {
        cardCliCorrente = tamCli-2;
    }

    carrosselCli[cardCliCorrente].scrollIntoView({
        inline: "start",
        block: "center",
    });

})

setaRightCli.addEventListener('click', () => {
    cardCliCorrente += 1;
    
    if (cardCliCorrente >= tamCli-1) {
        cardCliCorrente = 0;
    }
    
    carrosselCli[cardCliCorrente].scrollIntoView({
        inline: "start",
        block: "center"
    });
})