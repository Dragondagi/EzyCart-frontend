const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");




const products = [
  {
    id: 14,
    image: "../Resources/images/WomenWatches.jpg",
    name: "Women's watch",
    description:
      "Watches Women with Date Silver Stainless Steel Luxury Ladies Watches with Small Writs Diamond",
    price: 20,
  },
  {
    id: 24,
    image: "../Resources/images/Watches.jpg",
    name: "Men's Watch",
    description: "Amazon Essentials Men's Faux Leather Strap Watch",
    price: 60,
  },
  {
    id: 34,
    image: "../Resources/images/Desktops.jpg",
    name: "Desktop",
    description:
      'All-in-One Desktop, 24" FHD Display, Intel Core i5-8500T up to 3.5GHz, 16G DDR4 Memory, 512G SSD.',
    price: 60,
  },
  {
    id: 44,
    image: "../Resources/images/PlayStation.jpg",
    name: "PlayStation",
    description:
      "BGGUANG PS5 Slim Cooling Station，Charging Controller，Featuring Three Adjustable Cooling Fan.",
    price: 29,
  },
  {
    id: 54,
    image: "../Resources/images/samsung.jpg",
    name: "Samsung Galaxy A9+",
    description:
      "Samsung Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset.",
    price: 129,
  },
  {
    id: 64,
    image: "../Resources/images/smart-tv.jpg",
    name: "Smart HD TV",
    description:
      "All-New EzyCart Echo Show 15 | A stunning HD 15.6“ smart family hub with built-in Fire TV and Alexa.",
    price: 329,
  },
  {
    id: 74,
    image: "../Resources/images/headphones-1.jpg",
    name: "HeadPhone",
    description:
      "Bose QuietComfort Wireless Noise Cancelling Headphones, Bluetooth Over Ear Headphones.",
    price: 199,
  },
  {
    id: 84,
    image: "../Resources/images/earPod.jpg",
    name: "EarPod",
    description:
      "JBL Tune Flex - True Wireless Noise Cancelling Earbuds (Black), Small.",
    price: 99,
  },
  {
    id: 94,
    image: "../Resources/images/laptop-2.jpg",
    name: "Laptop Computer",
    description:
      "HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11.",
    price: 149,
  },
  {
    id: 104,
    image: "../Resources/images/alexa-speaker.jpg",
    name: "Alexa Speaker",
    description:
      "Amazon Echo Dot (newest model), Vibrant sounding Alexa speaker, Great for bedrooms, dining rooms and offices.",
    price: 49,
  },
  {
    id: 114,
    image: "../Resources/images/wireless-charger.jpg",
    name: "Wireless Charger",
    description:
      "Wireless Charger, 15W Fast Qi-Certified Wireless Charging Station with Sleep-Friendly Adaptive Light.",
    price: 11,
  },
  {
    id: 124,
    image: "../Resources/images/camera.jpg",
    name: "HD Camera",
    description:
      "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image.",
    price: 11,
  },
];
4








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
