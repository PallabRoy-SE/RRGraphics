const productTitle = document.getElementById(`productTitle`);
const videoId = document.getElementById(`videoId`);
const productCategory = document.getElementById(`productCategory`);
const productSubcategory = document.getElementById(`productSubcategory`);
const downloadLink = document.getElementById(`downloadLink`);

// Product Title Section
productTitle.addEventListener(`blur`, () => {
    let value = productTitle.value;

    if (value.length == 0) {
        document.getElementById(`productTitleError`).innerText = `Empty Title`
        productTitle.classList.add(`inputError`)
    }
    else if (value.length > 100) {
        document.getElementById(`productTitleError`).innerText = `Title should be maximum 100 characters`
        productTitle.classList.add(`inputError`)
    }
    else {
        document.getElementById(`productTitleError`).innerText = ``
        productTitle.classList.remove(`inputError`)
    }
});

// Video Id Section
videoId.addEventListener(`blur`, () => {
    let regex = /^(.){11,11}$/;
    let value = videoId.value;

    if (value.length == 0) {
        document.getElementById(`videoIdError`).innerText = `Empty Video ID`
        videoId.classList.add(`inputError`)
    }
    else if (regex.test(value)) {
        document.getElementById(`videoIdError`).innerText = ``
        videoId.classList.remove(`inputError`)
    }
    else {
        document.getElementById(`videoIdError`).innerText = `Put your 11 characters video id`
        videoId.classList.add(`inputError`)
    }
});

// Product Category Section
productCategory.addEventListener(`blur`, () => {
    let value = productCategory.value;

    if (value.length == 0) {
        document.getElementById(`productCategoryError`).innerText = `Empty Product Category`
        productCategory.classList.add(`inputError`)
    }
    else if (value.length > 50) {
        document.getElementById(`productCategoryError`).innerText = `Product Category should be maximum 50 characters`
        productCategory.classList.add(`inputError`)
    }
    else {
        document.getElementById(`productCategoryError`).innerText = ``
        productCategory.classList.remove(`inputError`)
    }
});

// Product Subcategory Section
productSubcategory.addEventListener(`blur`, () => {
    let value = productSubcategory.value;

    if (value.length == 0) {
        document.getElementById(`productSubcategoryError`).innerText = `Empty Product Subcategory`
        productSubcategory.classList.add(`inputError`)
    }
    else if (value.length > 50) {
        document.getElementById(`productSubcategoryError`).innerText = `Product Subcategory should be maximum 50 characters`
        productSubcategory.classList.add(`inputError`)
    }
    else {
        document.getElementById(`productSubcategoryError`).innerText = ``
        productSubcategory.classList.remove(`inputError`)
    }
});

// Download Link Section
downloadLink.addEventListener(`blur`, () => {
    let value = downloadLink.value;

    if (value.length == 0) {
        document.getElementById(`downloadLinkError`).innerText = `Empty Download Link`
        downloadLink.classList.add(`inputError`)
    }
    else {
        document.getElementById(`downloadLinkError`).innerText = ``
        downloadLink.classList.remove(`inputError`)
    }
});

// Tiny Text Editor Section
tinymce.init({
    selector: '#productDescription',
    // width: 945,
    height: 300,
    plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'table emoticons template paste help'
    ],
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
        'forecolor backcolor emoticons | help',
    menu: {
        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
    },
    menubar: 'favs file edit view insert format tools table help',
    content_css: 'css/content.css'
    });