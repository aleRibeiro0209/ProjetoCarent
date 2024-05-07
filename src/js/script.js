function readMore(){
    const ponts = document.getElementById("ponts")
    const moreText = document.getElementById("more")
    const btnReadMore = document.getElementById("buttonExpandRetraiText")
    const alterImageAlign = document.getElementById("imageInfo")

    if (ponts.style.display === "none") {
        ponts.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Read More"
        alterImageAlign.style.alignItems = "center"
        alterImageAlign.style.textAlign = "left"
    } else {
        ponts.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "Read Less"
        alterImageAlign.style.alignItems = "start"
        alterImageAlign.style.textAlign = "justify"
    }
}

function criarCardCar() {
    const cars = {
        car1: {
            name: "Jepp Renegate",
            quantPassa: "5",
            tipoCombus: "Gasolina",
            modelo: "SUV",
        },
        car2: {
            name: "McLaren P1",
            quantPassa: "2",
            tipoCombus: "Hibrido",
            modelo: "Esportivo",
        },
        car3: {
            name: "MINI Countryman",
            quantPassa: "5",
            tipoCombus: "Elétrico",
            modelo: "SUV",
        },
        car4: {
            name: "Porsche 918 Spyder",
            quantPassa: "2",
            tipoCombus: "Gasolina",
            modelo: "Coupé",
        },
        car5: {
            name: "Porsche 911 Turbo S",
            quantPassa: "2",
            tipoCombus: "Gasolina",
            modelo: "Coupé",
        },
        car6: {
            name: "Aston Martin Vantage",
            quantPassa: "2",
            tipoCombus: "Gasolina",
            modelo: "Coupé",
        },
        car7: {
            name: "Porsche Taycan Turbo S",
            quantPassa: "4",
            tipoCombus: "Elétrico",
            modelo: "Sedan",
        },
        car8: {
            name: "Lamborghini Urus",
            quantPassa: "5",
            tipoCombus: "Gasolina",
            modelo: "SUV",
        },
        car9: {
            name: "Bentley Bentayga Speed",
            quantPassa: "5",
            tipoCombus: "Gasolina",
            modelo: "SUV",
        }
    };

    
    
}