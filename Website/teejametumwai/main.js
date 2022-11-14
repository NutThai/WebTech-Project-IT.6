function loadJSON() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let recommend = '';
            let main_content_3 = '';
            data.forEach(product => {
                if(product.recommend == "true"){
                recommend += `
                <div>
                <div class="recommends">
                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                </div>
                <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>

             </div>
                `;
                main_content_3 += `
                <div>
                <div class="recommends">
                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                </div>
                <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>

             </div>
        `;
                }
               else{
                main_content_3 += `
                <div>
                    <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    
                    <div class="text_product">
                        <h4>${product.name}</h3>
                            <h6>${product.price} THB</h5>
                    </div>
                </div>
        `;
               }
                
            });
            document.getElementsByClassName("main_content_2")[0].innerHTML = recommend;
            document.getElementsByClassName("main_content_3")[0].innerHTML = main_content_3;

        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}

loadJSON()
