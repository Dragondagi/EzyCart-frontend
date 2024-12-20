



const listCard = document.querySelector(".listCard");
const totalDiv = document.querySelector(".total");

// Retrieve the cart data from localStorage
let listCards = JSON.parse(localStorage.getItem("cart")) || [];

const loadCart = () => {
  listCard.innerHTML = ""; // Clear the cart display
  let totalPrice = 0;

  if (listCards.length === 0) {
    listCard.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.textContent = "Total Price: $0";
    return;
  }

  // Render each product in the cart
  listCards.forEach((item) => {
    let newLi = document.createElement("div");
    newLi.innerHTML = `
    <div class="card_container">
      <img src="${item.image}" alt="${item.name}" width="50">

    <h3>${item.name}</h3>
    
    <div class="description">
    <p>${item.description}</p></div>
    <div style="color:green">Price: $${item.price}</div>
    <div style="color:blue">Quantity: ${item.quantity}</div>
   </div>

  `;

    listCard.appendChild(newLi);
    console.log(item.price, item.quantity);
    totalPrice += item.price * item.quantity;
  });

  totalDiv.textContent = `Total Price: $${totalPrice}`;
};

// Load the cart data when the page is loaded
loadCart();


//clear the cart.html content when the clear cart button is triggered
document.getElementById("clearCart").addEventListener("click", () => {
  localStorage.removeItem("cart");
  listCard.innerHTML = "<p>Your cart is empty.</p>";
  totalDiv.textContent = "Total Price: $0";
  countSpan.textContent = "0";
});

