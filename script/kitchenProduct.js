const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");

const products = [
  {
    id: 17,
    image: "../Resources/images/ninja.jpg",
    name: "Ninja Cook",
    description:
      "Ninja DZ201 Foodi 8 Quart 6-in-1 DualZone 2-Basket Air Fryer with 2 Independent Frying Baskets, Match Cook",
    price: 50,
  },
  {
    id: 27,
    image: "../Resources/images/mixing -bowls.jpg",
    name: "Mixing Bowls",
    description:
      "Mixing Bowls with Airtight Lids Set, 26PCS Stainless Steel Khaki Bowls with Grater Attachments, Non-Slip",
    price: 50,
  },
  {
    id: 37,
    image: "../Resources/images/cookware.jpg",
    name: "Cookware Set",
    description:
      "Cuisinart 11-Piece Cookware Set, Chef's Classic Stainless Steel Collection 77-11G.",
    price: 20,
  },
  {
    id: 47,
    image: "../Resources/images/kitchenaid.jpg",
    name: "KitchenAid",
    description:
      "KitchenAid Large Capacity Full Size Rust Resistant Dish Rack with Angled Drain Board and Removable Flatware Caddy.",
    price: 25,
  },
  {
    id: 57,
    image: "../Resources/images/blender.jpg",
    name: "Full-Size Blender",
    description: "Full-Size Blender Combo 1200W – NBF50500 - Dark Gray.",
    price: 35,
  },
  {
    id: 67,
    image: "../Resources/images/eggcooker.jpg",
    name: "Rapid Egg Cooker",
    description:
      "DASH Rapid Egg Cooker: 6 Egg Capacity Electric Egg Cooker for Hard Boiled Eggs, Poached Eggs, Scrambled Eggs.",
    price: 33,
  },
  {
    id: 77,
    image: "../Resources/images/icecream.jpg",
    name: "Ice Cream Maker",
    description:
      "Ninja Ice Cream Maker, for Gelato, Mix-ins, Milkshakes, Sorbet, Smoothie Bowls & More.",
    price: 23,
  },
  {
    id: 87,
    image: "../Resources/images/handmixer.jpg",
    name: "Electric Hand Mixer",
    description:
      "Hamilton Beach 6-Speed Electric Hand Mixer with Whisk, Traditional Beaters, Snap-On Storage Case.",
    price: 28,
  },
  {
    id: 97,
    image: "../Resources/images/cordorganizer.jpg",
    name: "Cord Organizer",
    description:
      "Cord Organizer for Kitchen Appliances-6 Pack, Appliance Cord Organizer stick on, Small Kitchen Appliances Cord.",
    price: 28,
  },
  {
    id: 107,
    image: "../Resources/images/dinnerware.jpg",
    name: "Dinnerware Set",
    description: "Stone Lain Coupe Dinnerware Set, Service For 4, Black Matte.",
    price: 31,
  },
  {
    id: 117,
    image: "../Resources/images/foodstorage.jpg",
    name: "Food Storage Containers",
    description:
      "JoyJolt JoyFul 24pc(12 Airtight, Freezer Safe Food Storage Containers and 12 Lids), Pantry Kitchen Storage.",
    price: 33,
  },
  {
    id: 127,
    image: "../Resources/images/jaropener.jpg",
    name: "Automatic Jar Opener",
    description:
      "Robot twist Jar Opener, Automatic Jar Opener, Deluxe Model with Improved Torque, Robo Twist Kitchen Gadgets.",
    price: 23,
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
