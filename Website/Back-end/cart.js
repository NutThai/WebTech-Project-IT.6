
if (localStorage.allcart == null) {
    var cart = []
} else {
    var cart = JSON.parse(localStorage.allcart)
}
function calculateCart(){
    let total = 0
    fetch('menu.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                if(cart[Number(product.id)] != null && cart[Number(product.id)].qty != 0){

                    total += Number(product.price)*Number(cart[Number(product.id)].qty);
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
function addToCart(e) {
    id = Number(e.dataset.id)
    if (id in cart && cart[id] != null) {
        cart[id].qty++
    } else {
        let item = {
            id: id,
            qty: 1
        }
        cart[id] = item
    }

    // update cart ใน localStorage
    localStorage.setItem("allcart", JSON.stringify(cart))
    // showMe()
}
function removeFromCart(e) {
    id = Number(e.dataset.id)
    if (id in cart && cart[id] != null) {
        if (cart[id].qty > 0) {
            cart[id].qty--
        }
        else {
            cart[id].qty = 0
        }
    }
    else {
        let item = {
            id: id,
            qty: 0
        }
        cart[id] = item
    }
    localStorage.setItem("allcart", JSON.stringify(cart))
    // showMe()
}
function showMe() {
    i = 0
    if (document.getElementById('con').hasChildNodes()) {
        document.getElementById('con').removeChild(document.getElementById('con').lastChild)

    }
    cartmenu = document.createElement("div")
    document.getElementById('con').appendChild(cartmenu)
    cartmenu.setAttribute("class", "cartmenu")
    cartmenu.setAttribute("id", "cartmenu")
    while (cart.length > i) {
        if (cart[i] != null && cart[i].qty != 0) {
            text = JSON.stringify(cart[i].qty)
            document.getElementById("cartmenu").appendChild(document.createElement('div'))
            document.getElementById("cartmenu").lastChild.innerHTML = text

        }
        i++
    }
}
