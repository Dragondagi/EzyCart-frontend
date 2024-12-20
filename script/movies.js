const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");

const products = [
  {
    id: 19,
    name: "Dune",
    image: "../Resources/images/1movie-10 (2).jpg",
    price: 5,
  },
  {
    id: 29,
    name: "Terrifier 3",
    image: "../Resources/images/1movie-teriffier.jpg",
    price: 6,
  },
  {
    id: 39,
    name: "DeadPool Vs Wolverine",
    image: "../Resources/images/1movie-15.jpg",
    price: 7,
  },
  {
    id: 49,
    name: "Sions",
    image: "../Resources/images/1movie-16.jpg",
    price: 3,
  },
  {
    id: 59,
    name: "Dog Man",
    image: "../Resources/images/1movie-5.jpg",
    price: 4,
  },
  {
    id: 69,
    name: "The Wild Robot",
    image: "../Resources/images/1movie-6.jpg",
    price: 6,
  },
  {
    id: 79,
    name: "Twisters",
    image: "../Resources/images/1movie-8.jpg",
    price: 4,
  },
  {
    id: 89,
    name: "Alien",
    image: "../Resources/images/1movie-17.jpg",
    price: 7,
  },
  {
    id: 99,
    name: "Terminator",
    image: "../Resources/images/1movie-2.jpg",
    price: 6,
  },
  {
    id: 109,
    name: "Godzilla Minus One",
    image: "../Resources/images/1movie-3.jpg",
    price: 5,
  },
  {
    id: 119,
    name: "The Lord Of The Rings",
    image: "../Resources/images/1movie-4.jpg",
    price: 5,
  },
  {
    id: 129,
    name: "The Witches",
    image: "../Resources/images/1movie-9.jpg",
    price: 3,
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
        <br/>
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
