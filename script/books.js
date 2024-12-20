const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");

const products = [
  {
    id: 12,
    name: "Eat And Love Croatia",
    image: "../Resources/images/1book2.jpg",
    price: 5,
  },
  {
    id: 22,
    name: "Dad",
    image: "../Resources/images/1book3.jpg",
    price: 9,
  },
  {
    id: 32,
    name: "Rele Van Tes",
    image: "../Resources/images/1book4.jpg",
    price: 8,
  },
  {
    id: 42,
    name: "Receta Legal",
    image: "../Resources/images/1book5.jpg",
    price: 5,
  },
  {
    id: 52,
    name: "Grand Santi",
    image: "../Resources/images/1book8.jpg",
    price: 7,
  },
  {
    id: 62,
    name: "War",
    image: "../Resources/images/1book9.jpg",
    price: 9,
  },
  {
    id: 72,
    name: "The Blue Hour",
    image: "../Resources/images/1book10.jpg",
    price: 9,
  },
  {
    id: 82,
    name: "Good Energy",
    image: "../Resources/images/1book11.jpg",
    price: 8,
  },
  {
    id: 92,
    name: "The 8th Habit",
    image: "../Resources/images/1book-14.jpg",
    price: 7,
  },
  {
    id: 102,
    name: "Atomic Habit",
    image: "../Resources/images/1book-15.jpg",
    price: 5,
  },
  {
    id: 112,
    name: "Lessons Learned",
    image: "../Resources/images/1book-17.jpg",
    price: 6,
  },
  {
    id: 122,
    name: "Mom",
    image: "../Resources/images/1book-19.jpg",
    price: 10,
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
