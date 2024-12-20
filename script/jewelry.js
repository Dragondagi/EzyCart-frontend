const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");



const products = [
  {
    id: 16,
    image: "../Resources/images/luxury-gold-diamond-jewelry.avif",
    name: "Luxury Diamond Jewelry",
    description:
      "Certified NATURAL Diamond Solid Gold Bezel Set Diamond Necklace, Diamond Necklace for Women.",
    price: 290,
  },
  {
    id: 26,
    image: "../Resources/images/beautiful-golden-bracelets.avif",
    name: "Beautiful Golden Bracelets",
    description:
      "Diamond Solid Gold Bezel Set Diamond Necklace, Diamond Ring for Men's.",
    price: 270,
  },
  {
    id: 36,
    image: "../Resources/images/gold-necklaces.avif",
    name: "Gold Necklaces",
    description:
      "NATURAL Diamond Solid Gold Bezel Set Diamond Necklace, Diamond Necklace for Women.",
    price: 310,
  },
  {
    id: 46,
    image: "../Resources/images/diamond-rings-necklaces.avif",
    name: "Diamond Rings And Necklaces",
    description:
      "Certified NATURAL Diamond Solid Gold Bezel Set Diamond Rings Women.",
    price: 340,
  },
  {
    id: 56,
    image: "../Resources/images/women-jewelry-bracelet.avif",
    name: "Women Jewelry Bracelet",
    description:
      "Amazon Essentials Sterling Silver Diamond Double Knot Bangle Bracelet.",
    price: 340,
  },
  {
    id: 66,
    image: "../Resources/images/luxury-ring.avif",
    name: "Luxury Ring",
    description:
      "Iefil Adjustable Ring for Women - 925 Sterling Silver Double Birthstone Rings.",
    price: 340,
  },
  {
    id: 76,
    image: "../Resources/images/necklaces.jpg",
    name: "Necklace",
    description:
      "Personalized Name Necklace – Gold-Plated Disc Pendant with Birthstone Charm.",
    price: 349,
  },
  {
    id: 86,
    image: "../Resources/images/earrings.jpg",
    name: "Crystal Earrings",
    description:
      "Attract Trilogy Crystal Necklace and Earrings Jewelry Collection.",
    price: 339,
  },
  {
    id: 96,
    image: "../Resources/images/rose-earring.jpg",
    name: "Dangle Earring",
    description: "Betsey Johnson Rose Dangle Earring Color.",
    price: 329,
  },
  {
    id: 106,
    image: "../Resources/images/necklace-for-women.jpg",
    name: "Birthstone Necklace",
    description:
      "Custom Birthstone Necklace for Women, Family Jewelry Gift for Moms, Kids, and Grandmas -BSN-MC.",
    price: 329,
  },
  {
    id: 116,
    image: "../Resources/images/link-bracelet.jpg",
    name: "Link Chain Bracelet",
    description:
      "Kendra Scott Ari Heart Link Chain Bracelet for Women, Fashion Jewelry.",
    price: 329,
  },
  {
    id: 126,
    image: "../Resources/images/drop-earring.jpg",
    name: "Star Drop Earrings",
    description:
      "Kendra Scott Ashton Pearl Stud Earrings Celestial Moon & Star Drop Earrings.",
    price: 329,
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
