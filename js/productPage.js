function loadJSON() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let productPage = '';
            let img = '';
            for (i = 0; i < data[localStorage.productPage].img.length; i++) {
                img += `<img class="img" data-img="${i}" onclick="changeImg(this)" src="img/${data[localStorage.productPage].img[i]}" alt="cat-1" />`;
            }
            productPage += `
                    <div class="main_left">
                    <img class="main_left_img" src="img/${data[localStorage.productPage].img[0]}" alt="cat-1" />
                    <div class=" main_left_secimg">
                        ${img}
                    </div>
                </div>
                <div class="main_right">
                    <h4 class="category">${data[localStorage.productPage].subcategory[0].toUpperCase()+data[localStorage.productPage].subcategory.slice(1)}</h4>
                    <h2 class="main_right_name">${data[localStorage.productPage].name}</h2>
                    <h3>${data[localStorage.productPage].price} THB</h3>
                    <div class="main_right_detail ">${data[localStorage.productPage].detail}
                        
                    </div>
                        <br>
                        <br>
                        <br>
                        <br>
                    <button data-id="${data[localStorage.productPage].id}" type="button" onClick="addToCart(this)" class="addtocart btn">Add To Cart</button>
                    
                </div>
            `;
            // <button type="button" onClick="calculateCart()" class="addtocart btn">Check</button>
            document.getElementsByClassName("main_detail_1")[0].innerHTML = productPage;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}
function changeImg(e){
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let img = Number(e.dataset.img);
            document.getElementsByClassName("main_left_img")[0].src = `img/${data[localStorage.productPage].img[img]}`
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}
loadJSON()