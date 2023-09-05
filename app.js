let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
// let imag = 'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/90/0974642/1.jpg?9446.png' ;
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        // id: 1,
        name: 'Sunlight',
        image: 'sun1.webp',
        price: 120000,
          grams: "850g",
    },
    {
        name: "Viva Plus",
        grams: "350g",
        image: "",
        price: 200,
    
      },
  
      {
        name: "Fresh glow",
        price: 400,
        grams: "",
    
        image: "",
      },
      {
        name: "Dove beauty cream bar",
        price: 1300,
        grams: "",
    
        image: "",
      },
    
      {
        name: "Caro White",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Sunlight",
        grams: "850g",
        image: "",
        price: 200,
    
      },
      
      {
        name: "De wave",
        price: 200,
        grams: "80g",
        image: "",
      },
    
      {
        name: "Good mama",
        grams: "80g",
        price: 200,
        image: "good.jpg",
      },
      {
        name: "Good mama",
        grams: "22g",
        price: 200,
        image: "good.jpg",
      },
      {
        name: "Good mama",
        grams: "170g",
        image: "good.jpg",
        price: 200,
    
      },
      {
        name: "Good mama",
        grams: "850g",
        image: "good.jpg",
        price: 200,
    
      },
      {
        name: "Viva plus Gold",
        grams: "350g",
        image: "viva.jpg",
        price: 200,
    
      },
      {
        name: "Viva plus Gold",
        grams: "180g",
        image: "viva.jpg",
        price: 200,
        
      },
    
    
      {
        name: "Magik",
        grams: "170g",
        image: "magic.jpg",
        price: 200,
      },
      {
        name: "Magik",
        grams: "80g",
    
        image: "magic.jpg",
        price: 100,
      },
      {
        name: "Sunlight",
        grams: "170g",
        image: "",
        price: 250,
      },
      {
        name: "So Klin",
        grams: "60g",
    
        image: "sokli1.jpg",
        price: 100,
      },
      {
        name: "So Klin",
        grams: "170g",
        image: "sokli1.jpg",
        price: 200,
      },
      {
        name: "Ariel",
        grams: "65g",
    
        image: "",
        price: 100,
      },
      {
        name: "Ariel Ankara",
        grams: "120g",
        image: "Ariel.jpg",
        price: 200,
      },
      {
        name: "Canoe bar soap",
        grams: "",
        image: "Canoe.jpg",
        price: 250,
      },
      {
        name: "Viva bar",
        grams: "",
    
        image: "vivabar.jpg",
        price: 400,
      },
      {
        name: "Hypo sachet",
        grams: "Hypo toilet sachet.jpg",
    
        image: "",
        price: 50,
      },
      {
        name: "Hypo 500ml",
        grams: "",
    
        image: "Hypo 500ml.jpg",
        price: 800,
      },
      {
        name: "Hypo toilet cleaner sachet",
        grams: "",
    
        image: "",
        price: 50,
      },
      {
        name: "Hypo toilet cleaner 450ml",
        grams: "",
    
        image: "",
        price: 1700,
      },
      {
        name: "Vaseline Healthy Body Glow",
        price: 1500,
        grams: "",
    
        image: "vaseline 1.jpg",
      },
      {
        name: "Vaseline Aloe Soothe",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Vaseline Cocoa Glow",
        price: 1500,
        grams: "",
    
        image: "vasline 3.jpg",
      },
      {
        name: "Vaseline Total Moisture",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Viva plus Laundry Sanitizer",
        grams: "180g",
        image: "viva.jpg",
        price: 250,
      },
      {
        name: "Vaseline Men lotion",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Vaseline Healthy White",
        price: 1500,
        grams: "",
    
        image: "vasline 2.jpg",
      },
      {
        name: "Dove Fair",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Dove Beauty Body Moisturizer",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Elixir Light",
        price: 2200,
        grams: "",
    
        image: "Elixir Light.jpg",
      },
      {
        name: "Jergens",
        price: 1500,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Milk",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Nourishing Cocoa",
        price: 3200,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Rich Nourishing",
        price: 3200,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Perfect and Radiant",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Aloe and Hydration",
        price: 2800,
        grams: "",
    
        image: "aloe.jpg",
      },
      {
        name: "Nivea Vanilla",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Express Hydration",
        price: 2500,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Radiant and Beauty Advanced Care",
        price: 3200,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Radiant and Beauty Even Glow",
        price: 3500,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Cherry Blossom",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Rose",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Men Deep Impact",
        price: 3000,
        grams: "",
    
        image: "",
      },
      {
        name: "Nivea Men Revitalizing",
        price: 2800,
        grams: "",
    
        image: "",
      },
      {
        name: "Caro White lotion Big",
        price: 1800,
        grams: "",
    
        image: "",
      },
      {
        name: "Caro White lotion Small",
        price: 1200,
        grams: "",
    
        image: "",
      },
      {
        name: "Paw paw lotion small",
        price: 1200,
        grams: "",
    
        image: "",
      },
      {
        name: "CT+",
        price: 2500,
        grams: "",
    
        image: "",
      },
      {
        name: "White Secret",
        price: 1500,
        grams: "",
    
        image: "",
      },
    
      {
        name: "Idole papaya",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "White secret",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Idole with Avocado powder",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Hawaii Carrot",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Hawaii Papaya",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Eva",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Nano Extra White",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Dove Men",
        price: 1300,
        grams: "",
    
        image: "",
      },
      {
        name: "K-Brothers Original",
        price: 600,
        grams: "",
    
        image: "",
      },
      {
        name: "K-Brothers Carrot",
        price: 700,
        grams: "",
    
        image: "",
      },
      {
        name: "K-Brothers Papaya",
        price: 700,
        grams: "",
    
        image: "",
      },
      {
        name: "Irish Spring",
        price: 700,
        grams: "",
    
        image: "",
      },
      {
        name: "Perfect White",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Asantee",
        price: 850,
        grams: "",
    
        image: "",
      },
    
      {
        name: "Asantee",
        price: 850,
        grams: "",
    
        image: "",
      },
      {
        name: "Kojic White",
        price: 1000,
        grams: "",
    
        image: "",
      },
      {
        name: "Premier Cool Black soap",
        price: 300,
        grams: "",
    
        image: "",
      },
      {
        name: "Premier Cool",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Joy",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Delta",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Lux",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Tetmosol",
        price: 300,
        grams: "",
    
        image: "",
      },
      {
        name: "Dettol (cool, original, even tone, even tone pink glow)",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Sanitol",
        price: 250,
        grams: "",
    
        image: "",
      },
      {
        name: "Dudu Osun",
        price: 600,
        grams: "",
    
        image: "",
      },
      {
        name: "Tura",
        price: 400,
        grams: "",
    
        image: "",
      },
      {
        name: "Extract",
        price: 1300,
        grams: "",
    
        image: "",
      },
      {
        name: "Ivory",
        price: 400,
        grams: "",
    
        image: "",
      },
      
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="title">${value.grams}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}