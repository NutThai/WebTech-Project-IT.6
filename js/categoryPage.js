function loadJSON() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {

            let cakeflex = '';
            let cakegrid = '';
            let cookieflex = '';
            let cookiegrid = '';
            let breadflex = '';
            let breadgrid = '';
            let donutflex = '';
            let donutgrid = '';
            let coffeeflex = '';
            let coffeegrid = '';
            let milkflex = '';
            let milkgrid = '';
            let teaflex = '';
            let teagrid = '';
            let sodaflex = '';
            let sodagrid = '';
            data.forEach(product => {
                if (product.subcategory == "cake") {
                    if(product.recommend == "true"){
                        
                        cakeflex += `<div>
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    cakegrid += `<div>
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        cakeflex += `<div class="hov" class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    cakegrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "cookie") {
                    if(product.recommend == "true"){
                        
                        cookieflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    cookiegrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        cookieflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    cookiegrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "bread") {
                    if(product.recommend == "true"){
                        
                        breadflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    breadgrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        breadflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    breadgrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "doughnut") {
                    if(product.recommend == "true"){
                        
                        donutflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    donutgrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        donutflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    donutgrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "coffee") {
                    if(product.recommend == "true"){
                        
                        coffeeflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    coffeegrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        coffeeflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    coffeegrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "milk") {
                    if(product.recommend == "true"){
                        
                        milkflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    milkgrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        milkflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    milkgrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "tea") {
                    if(product.recommend == "true"){
                        
                        teaflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    teagrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        teaflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    teagrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
                if (product.subcategory == "soda") {
                    if(product.recommend == "true"){
                        
                        sodaflex += `<div class="hov">
                                <div class="recommends hov">
                                    <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                                    <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                </div>
                                <div class="text_product">
                                                <h4>${product.name}</h3>
                                                    <h6>${product.price} THB</h5>
                                            </div>
                                </div>`
                    sodagrid += `<div class="hov">
                    <div class="recommends hov">
                        <h5 class="rec"><span class="fas fa-star"></span> Trending</h5>
                        <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                    </div>
                    <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                 </div>`
                    }
                    else{
                        sodaflex += `<div class="hov">
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                    sodagrid += `<div class="hov">
                            <img class="img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                            <div class="text_product">
                                <h4>${product.name}</h3>
                                    <h6>${product.price} THB</h5>
                            </div>
                        </div>`
                    }
                }
            });
            // <img src="img/machapara.jpg" alt="ad1" width="100%">
            // <div class="main_content_1_right">

            //     <div class="h1">Into The Green Zone!</div>
            //     <button type="button" class="btn main_content_1_right_btn">Let's Try!</botton>

            // </div>
            
            if(location.href.split("/").slice(-1) == "category.html"){
                let ca = localStorage.categoryPage 
                let try_this =""
                if(ca == 'cake'||ca == 'cookie'||ca=='bread'||ca=='donut'){
                    try_this += `<img src="img/macadamia.jpg" alt="ad1" width="100%">
                    <div class="main_content_1_right" >
        
                        <div class="h1" >Baking the World New Classics!</div>
                        <button type="button" class="btn main_content_1_right_btn" data-id="6" onclick="productPage(this)">Let's Try!</botton>
        
                    </div>`;
                }
                else{
                    try_this += `<img src="img/espress.jpg" alt="ad1" width="100%">
                            <div class="main_content_1_right">
                
                                <div class="h1" >Taste a life full of celebration!</div>
                                <button type="button" data-id="16" onclick="productPage(this)" class="btn main_content_1_right_btn">Let's Try!</botton>
                
                            </div>`;
                }
                document.getElementsByClassName("main_content_1")[0].innerHTML = try_this;
            }
            
            if (location.href.split("/").slice(-1) == "cafe.html" || location.href.split("/").slice(-1) == "bakery.html") {
                
                if (location.href.split("/").slice(-1) == "bakery.html" ) {
                    
                    document.getElementById("cake").innerHTML = cakeflex
                    document.getElementById("cookie").innerHTML = cookieflex
                    document.getElementById("bread").innerHTML = breadflex
                    document.getElementById("donut").innerHTML = donutflex

                }
                else {
                    
                    document.getElementById("coffee").innerHTML = coffeeflex
                    document.getElementById("milk").innerHTML = milkflex
                    document.getElementById("tea").innerHTML = teaflex
                    document.getElementById("soda").innerHTML = sodaflex
                }
                
                
            }
            else {
                if (localStorage.categoryPage == "cake") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Cake</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = cakegrid
                }
                if (localStorage.categoryPage == "cookie") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Cookie</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = cookiegrid
                }
                if (localStorage.categoryPage == "bread") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Bread</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = breadgrid
                }
                if (localStorage.categoryPage == "donut") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Doughnut</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = donutgrid
                }
                if (localStorage.categoryPage == "coffee") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Coffee</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = coffeegrid
                }
                if (localStorage.categoryPage == "milk") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Milk</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = milkgrid
                }
                if (localStorage.categoryPage == "tea") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Tea</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = teagrid
                }
                if (localStorage.categoryPage == "soda") {
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Soda</h1>"
                    document.getElementsByClassName("main_content_3")[0].innerHTML = sodagrid
                }
            }
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}

loadJSON()