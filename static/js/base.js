window.onload = function () {
    // user dropdown sesction
    // document.getElementById(`signin_a`).addEventListener(`click`, function (e) {
    //     document.getElementById(`userDropdown`).classList.toggle(`userDropdownOpen`)
    // })

    // Message Close Section
    const messages = document.getElementsByClassName(`messageContainer`);
    for (let mess = 0; mess < messages.length; mess++) {
        messages[mess].querySelector(`.messageCloseSvg`).addEventListener(`click`, () => {
            messages[mess].setAttribute('style', 'display: none;')
        })
    }

    // autoplay video section
    const vids = document.getElementsByClassName(`video`)
    for (let i = 0; i < vids.length; i++) {
        let videoSrc = vids[i].src
        vids[i].addEventListener(`mouseenter`, function (e) {
            vids[i].src += '?controls=0&autoplay=1&mute=1'
        })
        
        vids[i].addEventListener(`mouseleave`, function (e) {
            vids[i].src=videoSrc
        })
    }
    // download dropup section
    $('.prDownloadButton').mouseover(function () {
        let showId = this.id.slice(6, );
        $(`#dropup`+showId).show();
    })

    $('.prDownloadButton').mouseout(function () {
        let showId = this.id.slice(6, );
        $(`#dropup`+showId).hide();
    })
}