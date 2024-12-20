const list = document.querySelector(".list");
const countSpan = document.querySelector(".count");

const products = [
  {
    id: 199,
    image: "../Resources/images/toy1.jpg",
    name: "NATIONAL GEOGRAPHIC",
    description:
      "NATIONAL GEOGRAPHIC Glowing Marble Run – Construction Set with 15 Glow in The Dark Glass Marbles.",
    price: 10,
  },
  {
    id: 299,
    image: "../Resources/images/toy2.jpg",
    name: "Lego Gear Bots",
    description:
      "Klutz Lego Gear Bots Science/STEM Activity Kit for 8-12 years.",
    price: 10,
  },
  {
    id: 399,
    image: "../Resources/images/dart.jpg",
    name: "Magnetic Dart Board",
    description:
      "Magnetic Dart Board - 12pcs Magnetic Darts - Excellent Indoor Game and Party Games.",
    price: 10,
  },
  {
    id: 499,
    image: "../Resources/images/rocket_launcher.jpg",
    name: "Rocket Launcher",
    description:
      "Toys Rocket Launcher for Kids - Launch up to 100 Ft, 8 Multi-Color Foam Rockets & Adjustable Launch Stand.",
    price: 12,
  },
  {
    id: 599,
    image: "../Resources/images/toyguns.jpg",
    name: "Laser Tag Guns",
    description:
      "Laser Tag Guns Set of 4 Laser Tag Guns with Digital LED Score Display Vests, Gifts for Teens and Adults Boys.",
    price: 13,
  },
  {
    id: 699,
    image: "../Resources/images/toycars.jpg",
    name: "STEM Robot",
    description:
      "STEM Robot for Kids Ages 8-14, 5-in-1 Remote Control and APP Programmable Robot Toys - 720 Pcs DIY Building.",
    price: 14,
  },
  {
    id: 799,
    image: "../Resources/images/rccars.jpg",
    name: "Gesture RC Car",
    description:
      "Gesture RC Car, Drift Hand Controlled Remote Control Twist Cars Toys for 6-12 yr Boys Girls, 2.4GHz 4WD.",
    price: 12,
  },
  {
    id: 899,
    image: "../Resources/images/buildingkit.jpg",
    name: "Building Kit",
    description:
      "Fun Forts Glow Fort Building Kit for Kids - 81 Pack Glow in The Dark STEM Building Toys Indoor Outdoor Play Tent.",
    price: 11,
  },
  {
    id: 999,
    image: "../Resources/images/walkietalkie.jpg",
    name: "Walkie Talkies",
    description:
      "Toys for 3-12 Year Old Girls Boys, Walkie Talkies for Kids 22 Channels 2 Way Radio Toy with Backlit LCD.",
    price: 13,
  },
  {
    id: 1099,
    image: "../Resources/images/leser.jpg",
    name: "Rechargeable Laser",
    description:
      "Rechargeable Laser Tag Set with Vests, 2024 Upgrade Laser Tag Guns Set of 4, Multi Player Laser Tag Set for Kids.",
    price: 14,
  },
  {
    id: 1199,
    image: "../Resources/images/guntoy.jpg",
    name: "Kids Gun",
    description:
      "NERF Elite 2.0 Commander RD-6 Dart Blaster, 12 Darts, 6-Dart Rotating Drum, Outdoor Toys, for Kids, Ages 8+.",
    price: 11,
  },
  {
    id: 1299,
    image: "../Resources/images/aircraft.jpg",
    name: "Gesture Sensing RC",
    description:
      "8WD Gesture Sensing RC Stunt Cars - Toys Gifts for Kids 8 9 10 11 12 Year Old Boys Girls, 2.4GHz Remote Control.",
    price: 9,
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
