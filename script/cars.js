const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");

const products = [
  {
    id: 13,
    image: "../Resources/images/toyota.webp",
    name: "Toyota",
    description: "Toyota - Known for reliability and efficiency worldwide",
    price: 1050,
  },
  {
    id: 23,
    image: "../Resources/images/Ford car without background.png",
    name: "Ford",
    description:
      "Ford is known for its trucks, SUVs, and cars, including the F-150, Mustang, and Explorer.",
    price: 1040,
  },
  {
    id: 33,
    image: "../Resources/images/Honda car without background.png",
    name: "Honda",
    description:
      "Honda is known for its high-quality vehicles and motorcycles. Popular models include the Civic, Accord, and CR-V.",
    price: 1100,
  },
  {
    id: 43,
    image: "../Resources/images/BMW car without background.png",
    name: "BMW",
    description:
      "BMW is known for its performance and luxury vehicles, including the 3 Series, 5 Series, and X5.",
    price: 1190,
  },
  {
    id: 53,
    image: "../Resources/images/Mercedes without background.png",
    name: "Mercedes",
    description:
      "Mercedes-Benz is a German global automobile marque known for luxury vehicles, trucks, and buses. Notable models include the C-Class, E-Class, and S-Class.",
    price: 1140,
  },
  {
    id: 63,
    image: "../Resources/images/Audi without background.png",
    name: "Audi",
    description:
      "Audi is a German automotive manufacturer known for its luxury vehicles, including the A4, A6, and Q5.",
    price: 1140,
  },
  {
    id: 73,
    image: "../Resources/images/Chevrolet without background.png",
    name: "Chevrolet",
    description:
      "Chevy is an American automobile division of General Motors. Popular models include the Silverado, Malibu, and Equinox.",
    price: 1170,
  },
  {
    id: 83,
    image: "../Resources/images/Nissan without background.png",
    name: "Nissan",
    description:
      "Nissan is known for its innovative technology and popular models like the Altima, Maxima, and Rogue.",
    price: 1120,
  },
  {
    id: 93,
    image: "../Resources/images/Volkswagen without background.png",
    name: "Volkswagen",
    description:
      "Volkswagen is a German automaker known for its iconic Beetle and other models like the Golf, Passat, and Tiguan.",
    price: 1110,
  },
  {
    id: 103,
    image: "../Resources/images/Hyundai without background.png",
    name: "Hyundai",
    description:
      "Hyundai is known for its affordable and reliable vehicles, including the Elantra, Sonata, and Santa Fe.",
    price: 1210,
  },
  {
    id: 113,
    image: "../Resources/images/Kia without background.png",
    name: "Kia",
    description:
      "Kia is a South Korean automaker known for its quality and value. Popular models include the Sportage, Sorento, and Optima.",
    price: 1190,
  },
  {
    id: 123,
    image: "../Resources/images/Lexus without background.png",
    name: "Lexus",
    description:
      "The luxury vehicle division of Toyota, founded in 1989. Lexus is known for its high-end vehicles, including the ES, RX, and LS.",
    price: 1199,
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
