
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
    // let mainImage = document.querySelector("#gallery > img");
// mainImage.src=imageGallery[0].src;
// mainImage.alt=imageGallery[0].alt;

// imageGallery.forEach(function(image, index){

// });

// for(i in imageGallery ){
//     console.log(imageGallery [i]);
// }
let mainImage = document.querySelector("#gallery > img");
let thumnails = document.querySelector("#gallery .thumbnails");
mainImage.src = imageGallery[0].src;
mainImage.alt = imageGallery[0].alt;


imageGallery.forEach(function (image, index){
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    thumb.dataset.selected = index === 0 ? true : false ;
    thumnails.appendChild (thumb);

    // if (index === 1 ){
    //     thumb.dataset.selected = true ;
    // }

    // else{
    //     thumb.dataset.selected = false ;
    // }

});
}

manueHandler();
greetingHandler();
cloclHandler ();
galleryHandler();