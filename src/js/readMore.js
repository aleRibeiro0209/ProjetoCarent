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