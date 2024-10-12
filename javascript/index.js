
// gallery const

const imageGallery = [
    {
        src :"/assets/gallery/image1.jpg",
        alt :"Thumbnail Image 1"
    },
    {
        src : "/assets/gallery/image2.jpg",
        alt :"Thumbnail Image 2"
    },
    {
        src :"/assets/gallery/image3.jpg",
        alt :"Thumbnail Image 3"
    }
];
// const product
const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
  ]
// manu function 
function manueHandler(){
    document.querySelector("#open-nav-menu").addEventListener("click", function()
    {
        document.querySelector("header nav .wrapper").classList.add("nav-open");
    })
    
    document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
    })
}
// Fucntion for celcus to fohrnhiet
function celcusToFohr (temperatur){
    let fahr = (temperatur * 9/5)  + 32;
    return fahr;
}

// Greeting Handler
function greetingHandler(){
    let currentHours = new Date().getHours();
    let greetingText ;
    if(currentHours < 12){
    greetingText = "Good Morning";
    } else if(currentHours < 19){
        greetingText = "Good Afternoon";
    } else if(currentHours < 24){
        greetingText = "Good Evening";
    } else {
        greetingText = "Welcome";
    }
    
    const userLocation = "New York";
    const weatherCondition = "sunny";
    let temperatur  = 25;
    let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperatur}°C outside.`;
    let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celcusToFohr (temperatur).toString()}°F outside.`;
    
    // document.querySelector("#weather").innerHTML= greetingText;
    document.querySelector("p#weather").innerHTML = celsiusText;
    document.querySelector("#greeting").innerHTML = greetingText;
    document.querySelector(".weather-group").addEventListener("click", function(e)
{
    if (e.target.id == "celsius"){
        document.querySelector("p#weather").innerHTML = celsiusText;           
    } else if (e.target.id = "fahr"){
        document.querySelector("p#weather").innerHTML = fahrText;
    }

});
}

// colock handler

function cloclHandler (){
    setInterval(() => {
        let localTime = new Date ();
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, 0);
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2,0);
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, 0);
    
    }, 1000);
}

// gallery handler
function galleryHandler(){

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");
mainImage.src = imageGallery[0].src;
mainImage.alt = imageGallery[0].alt;


imageGallery.forEach(function (image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false ;
    
    thumb.addEventListener("click", function (e) {
        let selectedIndex = e.target.dataset.arrayIndex;
        let selectedImage = imageGallery[selectedIndex];
        mainImage.src = selectedImage.src;
        mainImage.alt = selectedImage.alt;

        // Properly iterating through all thumbnails to deselect
        thumbnails.querySelectorAll("img").forEach(function (img) {
            img.dataset.selected = false;
        });

        // Set the clicked thumbnail as selected
        e.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);  // Append each thumbnail
});
}

//Product section

function productsHandler(){

    //create html elements 
    let productSection = document.querySelector(".products-area");
    // array filter
    let freeProduct = products.filter(function(item){
        return !item.price || item.price <= 0 ;
    });
    let paidProduct = products.filter(function(item){
        return item.price > 0 ;
    });
    //create element for each product
    products.forEach(function(product, index){
    // create html element div
        let productElm = document.createElement("div");
    //add class product item
        productElm.classList.add("product-item");
    //creating image html product
        let productImage =document.createElement("img");
        productImage.src = product.image;
        product.alt = product.title;

        // Product details div class 
        let productDetails = document.createElement("div");
        // add class in div
        productDetails.classList.add("product-details");

        // add product details to html using js title, author, price title and price 
        let prodcutTitle = document.createElement("h3");
        prodcutTitle.classList.add("product-title");
        // adding text content 
        prodcutTitle.textContent = product.title;
        // adding product author 
        let prodcutAuthor = document.createElement("p");
        prodcutAuthor.classList.add("product-author");
        // adding authro content 
        prodcutAuthor.textContent = product.author;

        // adding price title
        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        // adding price content 
        priceTitle.textContent = "Price";

                // adding product price
                let productPrice = document.createElement("p");
                productPrice.classList.add("product-price");
                // adding price content 
                productPrice.textContent =  product.price > 0 ? "$" + product.price.toFixed(2) : "Free" ;




        // apend to product details product title
        productDetails.append(prodcutTitle);
        // apend to parrent product authro
        productDetails.append(prodcutAuthor);
                // apend to parrent product authro
                productDetails.append(priceTitle);
                                        // apend to parrent product authro
        productDetails.append(productPrice);
    //   add all child html of product parrent element
        productElm.append(productImage);
        productElm.append(productDetails);
        // add individual products to product section
        productSection.append(productElm);

    });

    // show product length and filter
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProduct.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProduct.length;

}

manueHandler();
greetingHandler();
cloclHandler ();
galleryHandler();
productsHandler()