function readMore(){
    const ponts = document.getElementById("ponts");
    const moreText = document.getElementById("more");
    const btnReadMore = document.getElementById("buttonExpandRetraiText");
    const alterImageAlign = document.getElementById("imageInfo");

    if (ponts.style.display === "none") {
        ponts.style.display = "inline";
        moreText.style.display = "none";
        btnReadMore.innerHTML = "Read More";
        alterImageAlign.style.alignItems = "center";
    } else {
        ponts.style.display = "none";
        moreText.style.display = "inline";
        btnReadMore.innerHTML = "Read Less";
        alterImageAlign.style.alignItems = "start";
    }
}

// Funções de exibicao do pop up (modal)
function openModal(overlay) {
    console.log(overlay);
    overlay.classList.add("show-modal");
}

function closeModal(overlay) {
    overlay.classList.remove("show-modal");
}