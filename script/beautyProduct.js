





const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");




const products = [
  {
    id: 11,
    image: "../Resources/images/hairstraightener.jpg",
    name: "Hair Straightener Brush",
    description:
      "Hair Straightener Brush, TYMO Ring Hair Straightener Comb Straightening Brush.",
    price: "39",
  },
  {
    id: 21,
    image: "../Resources/images/hairoil.jpg",
    name: "Hair Oil",
    description:
      "Elizavecca CER-100 Hair Essence Oil - Leave-In Treatment for Dry Hair.",
    price: "19",
  },
  {
    id: 31,
    image: "../Resources/images/facemask.jpg",
    name: "Face Mask Paper",
    description:
      "Project E Beauty 100pcs Disposable DIY Non-Woven Face Mask Paper Pre-Cut.",
    price: "29",
  },
  {
    id: 41,
    image: "../Resources/images/shampo.jpg",
    name: "Shampoo",
    description:
      "COLOR WOW Color Security Shampoo – Sulfate Free & Residue-Free Formula.",
    price: "19",
  },
  {
    id: 51,
    image: "../Resources/images/haircut.jpg",
    name: "Steel Hair Extension",
    description:
      "German Stainless Steel Hair Extension Tool Pliers with 2 Holes & Double Leaf Spring.",
    price: "9",
  },
  {
    id: 61,
    image: "../Resources/images/condition.jpg",
    name: "Conditioner",
    description:
      "Paul Mitchell Clean Beauty Everyday Leave-In Treatment, Leave-In Conditioner, Deliver.",
    price: "11",
  },
  {
    id: 71,
    image: "../Resources/images/hairserum.jpg",
    name: "NEXXUS Hair Serum",
    description:
      "NEXXUS Ultralight Smooth Hair Serum for Dry and Frizzy Hair Weightless Smooth Hair.",
    price: "11",
  },
  {
    id: 81,
    image: "../Resources/images/saloncare.jpg",
    name: "Volume Creme",
    description: "Salon Care 10 Volume Creme Developer 32 Oz.",
    price: "17",
  },
  {
    id: 91,
    image: "../Resources/images/hydrateshampo.jpg",
    name: "Hydrate Shampoo",
    description:
      "Paul Mitchell Clean Beauty Hydrate Shampoo, Replenishes Hair.",
    price: "19",
  },
  {
    id: 101,
    image: "../Resources/images/salonnails.jpg",
    name: "Salon Nails Kit",
    description:
      "Finishing Touch Flawless Salon Nails Kit, Electronic Nail File and Full Manicure.",
    price: "17",
  },
  {
    id: 111,
    image: "../Resources/images/weavemolding.jpg",
    name: "Weave Molding",
    description: "Salon Pro 30 Sec Weave Molding Gel.",
    price: "15",
  },
  {
    id: 121,
    image: "../Resources/images/truewave.jpg",
    name: "True wave",
    description:
      'Graham Beauty Salon True wave Regular Perm End 2.25" x 3.25" Paper 1000 Pcs - HC-56174.',
    price: "19",
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