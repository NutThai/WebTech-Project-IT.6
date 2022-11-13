function loadJSON() {
    let page = localStorage.productPage
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let productPage = '';
            productPage += `
            <div class="main_left">
                <img class="main_left_img" src="img/${data[page].img1}" alt="cat-1" />
                <div class=" main_left_secimg">
                    <img class="img" src="img/${data[page].img1}" alt="cat-1" />
                    <img class="img" src="img/${data[page].img2}" alt="cat-1" />
                    <img class="img" src="img/${data[page].img3}" alt="cat-1" />
                    <img class="img" src="img/${data[page].img4}" alt="cat-1" />
                </div>
            </div>
            <div class="main_right">
                <h4 class="category">${data[page].category}</h4>
                <h2 class="main_right_name">${data[page].name}</h2>
                <h3>${data[page].price} THB</h3>
                <div class="main_right_detail ">${data[page].detail}
                <ul>
                    <li>องุ่นกลมเหมือนคุกกี้</li>
                    <li>องุ่นกลมเหมือนคุกกี้</li>
                    <li>องุ่นกลมเหมือนคุกกี้</li>
                    <li>องุ่นกลมเหมือนคุกกี้</li>
                </ul>
                </div>
                <button data-id="${data[page].id}" type="button" onClick="addToCart(this)" class="addtocart btn">Add To Cart</button>
                <button type="button" onClick="calculateCart()" class="addtocart btn">Check</button>
            </div>
        `;

            document.getElementsByClassName("main_detail_1")[0].innerHTML = productPage;

        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}

loadJSON()