// Criação dos cards
const cardsCar = document.querySelector('.cardsCars')
const body = document.querySelector('body')
const cars = [
    {
        name: "Mercedes-AMG GT",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupe",
        valor: 1920,
        descricao: "O Mercedes-AMG GT é um carro esportivo de alto desempenho da Mercedes-Benz, caracterizado por seu motor dianteiro V8 biturbo, tração traseira e uma construção elegante e aerodinâmica. Ele oferece uma combinação de potência impressionante, manuseio ágil e design sofisticado. O GT C Roadster, uma versão conversível, adiciona a emoção de dirigir ao ar livre, mantendo a performance excepcional e o luxo que a linha AMG representa."
    },
    {
        name: "McLaren 720S",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Esportivo",
        valor: 2690,
        descricao: "O McLaren 720S é um carro esportivo de alta performance com capacidade para 2 passageiros. Alimentado por gasolina, é conhecido por seu design aerodinâmico e motor potente. Preço aproximado: 2690 (unidade de valor não especificada)."
    },
    {
        name: "MINI Countryman",
        quantPassa: "5",
        tipoCombus: "Elétrico",
        modelo: "SUV",
        valor: 210,
        descricao: "O MINI Countryman é um SUV elétrico que acomoda até 5 passageiros. Combina o charme clássico do MINI com tecnologia moderna e eficiência elétrica. Preço aproximado: 210 (unidade de valor não especificada)."
    },
    {
        name: "Porsche 918 Spyder",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupe",
        valor: 2350,
        descricao: "O Porsche 918 Spyder é um coupe esportivo de luxo para 2 passageiros, movido a gasolina. Destaca-se pelo desempenho excepcional e design inovador. Preço aproximado: 2350 (unidade de valor não especificada)."
    },
    {
        name: "Porsche 911 Turbo S",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupe",
        valor: 1200,
        descricao: "O Porsche 911 Turbo S é um icônico coupe esportivo a gasolina com espaço para 2 passageiros. Conhecido por sua velocidade e precisão de manuseio. Preço aproximado: 1200 (unidade de valor não especificada)."
    },
    {
        name: "Aston Martin Vantage",
        quantPassa: "2",
        tipoCombus: "Gasolina",
        modelo: "Coupe",
        valor: 1990,
        descricao: "O Aston Martin Vantage é um elegante coupe esportivo a gasolina para 2 passageiros. Combina luxo britânico com desempenho robusto. Preço aproximado: 1990 (unidade de valor não especificada)."
    },
    {
        name: "Porsche Taycan Turbo S",
        quantPassa: "4",
        tipoCombus: "Elétrico",
        modelo: "Sedan",
        valor: 1100,
        descricao: "O Porsche Taycan Turbo S é um sedan elétrico de alta performance que acomoda 4 passageiros. Reconhecido por sua aceleração rápida e tecnologia avançada. Preço aproximado: 1100 (unidade de valor não especificada)."
    },
    {
        name: "Lamborghini Urus",
        quantPassa: "5",
        tipoCombus: "Gasolina",
        modelo: "SUV",
        valor: 1760,
        descricao: "O Lamborghini Urus é um SUV de luxo a gasolina para 5 passageiros. Oferece uma experiência de condução esportiva em um formato utilitário. Preço aproximado: 1760 (unidade de valor não especificada)."
    },
    {
        name: "Bentley Bentayga Speed",
        quantPassa: "5",
        tipoCombus: "Gasolina",
        modelo: "SUV",
        valor: 2090,
        descricao: "O Bentley Bentayga Speed é um SUV a gasolina de alta performance com capacidade para 5 passageiros. Combina conforto, luxo e potência. Preço aproximado: 2090 (unidade de valor não especificada)."
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
            <button id="btnCarModal${i}" class="btnStyle btnPageCar">Book Now</button>
        </div>
    </div>`

    // body.appendChild()
    cardsCar.appendChild(card)

    const btnCar = document.querySelector(`#btnCarModal${i}`)
    btnCar.addEventListener("click", () => {
        const overlayBody = document.createElement("div")
            
        overlayBody.innerHTML = `<div id="overlay${i}" class="overlay">
        <div class="modal" id="modal">
            <span class="icon-Close"><i class="fa-solid fa-xmark"></i></span>
            <div class="modal-title">
                <h2>${car.name}</h2>
                <h3>Descrição resumida:</h3>
            </div>
                <p>${car.descricao}</p>
            </div>
        </div>`
    
        body.appendChild(overlayBody)
        const overlayModal = document.getElementById(`overlay${i}`);
        overlayModal.classList.add("show-modal");
        // overlayBody.addEventListener("click", () => {
        //     overlayModal.classList.remove("show-modal");
        // })        
    })
    i++
})

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