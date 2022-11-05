// Product Download button customize section

let instagramButton = document.getElementById(`instagramButton`);

instagramButton.addEventListener(`click`, function (e) {
    instagramButton.innerHTML=`<a id="criteriaDownload" href="https://instagram.com/username" target="_blank" style="text-decoration: none;">
    <i style="color: indianred; text-decoration: none;" class="fab fa-instagram fa-2x"> Follow</i>
    </a>me on Instagram.`
    
    let criteriaDownlad = document.getElementById(`criteriaDownload`)
    criteriaDownlad.addEventListener(`click`, function (e) {
        document.getElementById(`completeDownload`).style.display = `none`
        document.getElementById(`productDownload`).style.display = `block`
    })
})