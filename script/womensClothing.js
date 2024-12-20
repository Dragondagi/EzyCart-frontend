const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");




const products = [
  {
    id: 1888,
    image: "../Resources/images/womensDailyClothes.avif",
    name: "Women's Daily Cloths",
    description:
      "EzyCart Essentials Women's Daily Clothes (Available in Big & Tall).",
    price: 30,
  },
  {
    id: 2888,
    image: "../Resources/images/Dresses2.avif",
    name: "Dresses",
    description:
      "Womens Square Neck Long Sleeve Fall Dresses Casual Babydoll Sweater Dress.",
    price: 25,
  },
  {
    id: 3888,
    image: "../Resources/images/womenSweater.avif",
    name: "Women's Sweater",
    description:
      "Womens Square Neck Long Sleeve Fall Dresses Casual Babydoll Sweaters.",
    price: 29,
  },
  {
    id: 4888,
    image: "../Resources/images/womensBlouse.avif",
    name: "Women's Blouse",
    description:
      "Womens Square Neck Long Sleeve Fall Dresses Casual Babydoll Blouse T-shirt.",
    price: 27,
  },
  {
    id: 5888,
    image: "../Resources/images/trauser-pant.jpg",
    name: "Trouser Pant",
    description: "Lee Women's Ultra Lux Comfort with Flex Motion Trouser Pant.",
    price: 27,
  },
  {
    id: 6888,
    image: "../Resources/images/pensiil-dress.jpg",
    name: "Pencil Dress",
    description:
      "Women's Gorgeous Pencil Dress Cap Sleeve Tweed Pencil Dress for Work.",
    price: 28,
  },
  {
    id: 7888,
    image: "../Resources/images/women-t-shirt.jpg",
    name: "Cotton T-Shirt",
    description:
      "Women's Originals Long Sleeve Cotton T-Shirt, Lightweight Crewneck Tee, Modern Fit.",
    price: 24,
  },
  {
    id: 8888,
    image: "../Resources/images/wool-socks.jpg",
    name: "Wool Socks",
    description:
      "Wool Socks for Women Winter Warm Hiking Thick Warm Cozy Boot Crew Gift Socks 5 Pairs.",
    price: 4,
  },
  {
    id: 9888,
    image: "../Resources/images/women hoodie.jpg",
    name: "Oversized Hoodies",
    description:
      "Aelfric Eden Y2k Hoodie Women Graphic Oversized Hoodies Star Embroidered Hoodied Sweatshirt.",
    price: 4,
  },
  {
    id: 10888,
    image: "../Resources/images/short-sweater.jpg",
    name: "Short Sweaters",
    description:
      "Women's See Through Hole Ripped Crop Tops Knit Pullover Short Sweaters.",
    price: 34,
  },
  {
    id: 11888,
    image: "../Resources/images/long-hoodie.jpg",
    name: "Long Hoodie",
    description: "Columbia Women's Benton Springs Ii Long Hoodie.",
    price: 29,
  },
  {
    id: 12888,
    image: "../Resources/images/sweat-pant.jpg",
    name: "Sweatpants",
    description:
      "Women's Winter Warm Fleece Joggers Pants Sherpa Lined Athletic Active Sweatpants.",
    price: 25,
  },
];




// Retrieve or initialize the cart data in localStorage
let listCards = JSON.parse(localStorage.getItem("cart")) || [];

const initApp = () => {
  products.forEach((product, index) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <div class="card_container">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <div class="description"><p>${product.description}</p></div>
        <br/>
        <div class="price">Price: <span>$${product.price}</span></div>
        <button class="button" onclick="addToCart(${index})">Add to Cart</button>
      </div>
    `;
    list.appendChild(newDiv);
  });
};

const addToCart = (index) => {
  const existingProduct = listCards.find(
    (item) => item.id === products[index].id
  );
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const newProduct = { ...products[index], quantity: 1 };
    listCards.push(newProduct);
  }
  localStorage.setItem("cart", JSON.stringify(listCards));
  updateCartCount();
};

const updateCartCount = () => {
  const totalCount = listCards.reduce((sum, item) => sum + item.quantity, 0);
  countSpan.textContent = totalCount;
};

// Initialize the product display and update the cart count on page load
initApp();
updateCartCount();
