const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");





const products = [
  {
    id: 18,
    image: "../Resources/images/mensblouse.avif",
    name: "Men's Blouse",
    description:
      "Men's Cotton Henley Shirt Long Sleeve Hippie Casual Beach T Shirts.",
    price: "29",
  },
  {
    id: 28,
    image: "../Resources/images/mensJeans.avif",
    name: "Men's Jeans",
    description:
      "Men's Slim Fit Jeans Stretch Destroyed Ripped Skinny Jeans Side Striped Denim Pants.",
    price: "35",
  },
  {
    id: 38,
    image: "../Resources/images/mensSweater.avif",
    name: "Men's Sweater",
    description:
      "EzyCart Essentials Men's Crewneck Sweater (Available in Big & Tall).",
    price: "22",
  },
  {
    id: 48,
    image: "../Resources/images/mensDailyCloth.avif",
    name: "Men's Daily Clothes",
    description:
      "EzyCart Essentials Men's Daily Clothes (Available in Big & Tall).",
    price: "20",
  },
  {
    id: 58,
    image: "../Resources/images/t-shirt.jpg",
    name: "T-Shirts",
    description:
      "3 Pcs Men's Oversized Heavy Cotton Summer T-Shirts Vintage Tee Loose Fit Short Sleeve Casual T-shirts.",
    price: "20",
  },
  {
    id: 68,
    image: "../Resources/images/shirt.jpg",
    name: "Casual Shirt",
    description:
      "Legendary Whitetails Men's Buck Camp Flannel, Long Sleeve Plaid Button Down Casual Shirt, Corduroy Cuffs.",
    price: "25",
  },
  {
    id: 78,
    image: "../Resources/images/sweater2.jpg",
    name: "Sweater",
    description:
      "Fruit of the Loom Men's Eversoft Fleece Sweatshirts, Moisture Wicking & Breathable.",
    price: "35",
  },
  {
    id: 88,
    image: "../Resources/images/hawaiian-shirt.jpg",
    name: "Hawaiian Shirt",
    description:
      "Mens Summer Striped Shirts Button Down Short Sleeve Vintage Beach Hawaiian Shirts with Pocket.",
    price: "35",
  },
  {
    id: 98,
    image: "../Resources/images/hoodie.jpg",
    name: "Full Zip Hoodie",
    description: "Under Armour Men's Rival Fleece Full Zip Hoodie.",
    price: "55",
  },
  {
    id: 108,
    image: "../Resources/images/jacket.jpg",
    name: "Hooded Shirt Jacket",
    description: "Legendary Whitetails Men's Maplewood Hooded Shirt Jacket.",
    price: "55",
  },
  {
    id: 118,
    image: "../Resources/images/boxer.jpg",
    name: "Men's Boxer",
    description:
      "Hanes Men's Boxer Briefs, Soft and Breathable Cotton Underwear with ComfortFlex Waistband, Multipack.",
    price: "25",
  },
  {
    id: 128,
    image: "../Resources/images/sweater3.jpg",
    name: "Graphic T-shirt",
    description:
      "Men's Loose Fit Heavyweight Long-Sleeve Logo Sleeve Graphic T-Shirt.",
    price: "29",
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
