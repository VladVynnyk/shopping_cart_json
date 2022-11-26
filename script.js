//let products = [{name:"Пралка 1", price:4000, img:".\img\18115433.jpg"},{name:"SONY", price:5000, img:".\img\276840966.jpg"}, {name:"Philips", price:7400, img:".\img\УТ000017292-1.jpg"}, {name:"Samsung", price:10200, img:".\img\img_0_139_3518_0_Small.jpg"}]
let cartProducts = []

let shopProducts = (products) => {
    if(document.title == 'Document'){
        products.items.map((product)=>{
            document.write(`<div class="box">
                            <div class="top_block">
                                <p><a href="#">Пральна машинка</a></p>
                            </div>
                            <div class="midll_block">
                                <img src="./img/18115433.jpg">
                                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foxtrot.com.ua%2Fuk%2Fshop%2Fstiralki.html&psig=AOvVaw2WXy93H8XbYUxYVUgiHRpV&ust=1668923971471000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCIiX_7XIufsCFQAAAAAdAAAAABAd">
                                    <p>${product.name}</p>
                                </a>
                            </div>
                            <div class="bottom_block">
                                <span><span>${product.price}грн</span><p><sapan class="bold">${product.price}</sapan>грн</p></span>
                                <button class="product_to_cart">У КОРЗИНУ</button>
                            </div>
                        </div>`
                        )
                    }
                )

        //let url = "https://VladVynnyk.github.io/shopping_cart_json/items.json"



        let cart = document.getElementById("header-button")
        console.log(cart)

        cart.addEventListener("click", ()=>{
            if(cartProducts.length<=0){
                alert("cart is empty")    
            }
            else{

                window.location.href="./cart.html"
            }
        })

        let productButtons = document.getElementsByClassName("product_to_cart")

        for(let i = 0; i<productButtons.length; i++)
        {
            productButtons[i].addEventListener("click", ()=>{
                let amount = prompt("Enter amount of products:", 1)

                let product = {
                    "name":products[i].name, "price":products[i].price, "amount":amount,
                }
                console.log(product)
                cartProducts.push(product)
                window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts))
                alert("Product was added successfully")
                window.location.href="./cart.html"
            })
        }
    }
    else{
        let handleClick = () => {
            window.localStorage.removeItem('cartProducts')
        }


        let cart = JSON.parse(window.localStorage.getItem('cartProducts'))
        console.log("CARt")
        cart.forEach((product)=>{
            console.log("asdfasdf")
            document.write(`<br/><div>Name: ${product.name}</div>
            <br/>
            <div>Price: ${product.price}</div>
            <br/>
            <div>Amount of product: ${product.amount}</div>
            <br/>
            <div><button onclick="handleClick()">Delete</button></div>
            `
                )
            }
        ) 
    }
}


 let url = "https://VladVynnyk.github.io/shopping_cart_json/items.json"
    // fetch(url).then(
    //     data => {return data.json()}
    // )
    // .then(
    //     products => {
    //         console.log(products)
    //         shopProducts(products)
    //     }
    // )

const request = () => {
    const Http = new XMLHttpRequest()
    Http.open("GET", url)
    Http.send()

    Http.onreadystatechange = (e) =>{
        console.log(Http.responseText)
        products = JSON.parse(Http.responseText)
        shopProducts(products)
    }
}

request()