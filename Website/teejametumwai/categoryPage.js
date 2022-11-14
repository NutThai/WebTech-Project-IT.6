function loadJSON() {
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            
            let cake = '';
            let cookie = '';
            let bread= '';
            let donut = '';
            let coffee = '';
            let milk = '';
            let tea= '';
            let soda = '';
            data.forEach(product => {
                if (product.subcategory == "cake") {
                    cake += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "cookie") {
                    cookie += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "bread") {
                    bread += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "donut") {
                    donut += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "coffee") {
                    coffee += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "milk") {
                    milk += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "tea") {
                    tea += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
                if (product.subcategory == "soda") {
                    soda += `<div>
                                <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                                <div class="text_product">
                                    <h4>${product.name}</h3>
                                        <h6>${product.price} THB</h5>
                                </div>
    
                            </div>`
                }
            });
            if(localStorage.categoryPage == "cafe" || localStorage.categoryPage == "bakery"){
                if(localStorage.categoryPage == "bakery"){
                    document.getElementById("cake").innerHTML = cake
                    document.getElementById("cookie").innerHTML = cookie
                    document.getElementById("bread").innerHTML = bread
                    document.getElementById("donut").innerHTML = donut
                }
                else{
                    document.getElementById("coffee").innerHTML = coffee
                    document.getElementById("milk").innerHTML = milk
                    document.getElementById("tea").innerHTML = tea
                    document.getElementById("soda").innerHTML = soda
                }
            }
            // text += `
                //         <div>
                //             <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
                //             <div class="text_product">
                //                 <h4>${product.name}</h3>
                //                     <h6>${product.price} THB</h5>
                //             </div>

                //         </div>
                // `;
            //     document.getElementsByClassName("recommend")[0].innerHTML = recommend;
            //     document.getElementsByClassName("main_content_3")[0].innerHTML = main_content_3;
            // if (localStorage.categoryPage == "bakery" || localStorage.categoryPage == "cafe") {
            //     data.forEach(product => {
            //         if (product.category == localStorage.categoryPage) {
            //             text += `
            //                 <div>
            //                     <img class="main_content_2_flex_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
            //                     <div class="text_product">
            //                         <h4>${product.name}</h3>
            //                             <h6>${product.price} THB</h5>
            //                     </div>
    
            //                 </div>
            //         `;
            //         }
            //     });
            // }
            // else {
            //     text += `<h2>${localStorage.categoryPage}</h2>`;
            //     data.forEach(product => {
            //         if (product.subcategory == localStorage.categoryPage) {
            //             text += `
            //                 <div>
            //                     <img class="recommend_img" data-id="${product.id}" onClick="productPage(this)" src="img/${product.img[0]}" alt="cat-1" />
            //                     <div class="text_product">
            //                         <h4>${product.name}</h3>
            //                             <h6>${product.price} THB</h5>
            //                     </div>
    
            //                 </div>
            //         `;
            //         }

            //     });
            // }
            else{
                if(localStorage.categoryPage == "cake"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Cake</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = cake
                }
                if(localStorage.categoryPage == "cookie"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Cookie</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = cookie
                }
                if(localStorage.categoryPage == "bread"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Bread</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = bread
                }
                if(localStorage.categoryPage == "donut"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Donut</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = donut
                }
                if(localStorage.categoryPage == "coffee"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Coffee</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = coffee
                }
                if(localStorage.categoryPage == "milk"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Milk</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = milk
                }
                if(localStorage.categoryPage == "tea"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Tea</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = tea
                }
                if(localStorage.categoryPage == "soda"){
                    document.getElementsByClassName("nameofcate")[0].innerHTML = "<h1>Soda</h1>"
                    document.getElementsByClassName("main_content_2")[0].innerHTML = soda
                }
            }
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}

loadJSON()
