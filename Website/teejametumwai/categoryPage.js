function loadJSON() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            let text = '';
            
        //     document.getElementsByClassName("recommend")[0].innerHTML = recommend;
        //     document.getElementsByClassName("main_content_3")[0].innerHTML = main_content_3;
            if(localStorage.categoryPage == "bakery" || localStorage.categoryPage == "cafe"){
                text += `<h2>${localStorage.categoryPage}</h2>`;
                data.forEach(product => {
                    if(product.category == localStorage.categoryPage){
                    text += `
                            <div>
                                <img class="recommend_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>
                    `;
                    }
            
                });
            }
            else{
                text += `<h2>${localStorage.categoryPage}</h2>`;
                data.forEach(product => {
                    if(product.subcategory == localStorage.categoryPage){
                    text += `
                            <div>
                                <img class="recommend_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>
                    `;
                    }
            
                });
            }
            document.getElementsByClassName("main_content_3")[0].innerHTML = text;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}

loadJSON()
