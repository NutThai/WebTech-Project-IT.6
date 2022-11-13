
if (localStorage.allcart == null) {
    var incart = []
} else {
    var incart = JSON.parse(localStorage.allcart)
}
function calculateCart(){
    let total = 0
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                if(incart[Number(product.id)] != null && incart[Number(product.id)].qty != 0){

                    total += Number(product.price)*Number(incart[Number(product.id)].qty);
                }
                
            });
            alert(total)
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })

       
}

function productPage(e) {
    id = Number(e.dataset.id)
    localStorage.setItem("productPage", id)
    window.location.href = 'detail.html'
}
function categoryPage(e) {
    cate = e.dataset.category
    localStorage.setItem("categoryPage", cate)
    window.location.href = 'category.html'
}
function addToCart(e) {
    id = Number(e.dataset.id)
    if (id in incart && incart[id] != null) {
        incart[id].qty++
    } else {
        let item = {
            id: id,
            qty: 1
        }
        incart[id] = item
    }

    // update cart ใน localStorage
    localStorage.setItem("allcart", JSON.stringify(incart))
    showMe()
}
function removeFromCart(e) {
    id = Number(e.dataset.id)
    if (id in incart && incart[id] != null) {
        if (incart[id].qty > 0) {
            incart[id].qty--
        }
        else {
            incart[id].qty = 0
        }
    }
    else {
        let item = {
            id: id,
            qty: 0
        }
        incart[id] = item
    }
    localStorage.setItem("allcart", JSON.stringify(incart))
    showMe()
}
function clearFromCart(e) {
    id = Number(e.dataset.id)
    if (id in incart && incart[id] != null) {
        if (incart[id].qty > 0) {
            incart[id].qty = 0
        }
        else {
            incart[id].qty = 0
        }
    }
    else {
        let item = {
            id: id,
            qty: 0
        }
        incart[id] = item
    }
    localStorage.setItem("allcart", JSON.stringify(incart))
    showMe()
}
function showMe() {
    text = ""
    i = 0
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            while (incart.length > i) {
                if (incart[i] != null && incart[i].qty != 0) {
                    text += `
                    <tr>
                        <td class="cartimg"><img src="img/${data[i].img[0]}" class="img_cart"></td>
                        <td class="cartname">${data[i].name}</td>
                        <td>${data[i].price*incart[i].qty} THB</td>
                        <td class="gap"></td>
                        <td><button data-id="${data[i].id}" onclick="addToCart(this)">+</button></td>
                        <td id="counting_cart" class="count">${incart[i].qty}</td>
                        <td><button data-id="${data[i].id}" onclick="removeFromCart(this)">-</button></td>
                        <td><button data-id="${data[i].id}" onclick="clearFromCart(this)">X</button></td>
                    </tr>
                    `;
                }
                i++
            }
            // <button data-id="${product.id}" onclick="addToCart(this)">+</button>
            // <button data-id="${product.id}" onclick="removeFromCart(this)">-</button>
            document.getElementById("cartmenu").innerHTML = text

        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        })
}
