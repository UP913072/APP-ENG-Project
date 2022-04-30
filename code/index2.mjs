// cart setup: https://www.youtube.com/watch?v=UcrypywtAm0&t=415s&ab_channel=CodeExplained
import { items } from './data.mjs';

async function fetchShopItems() {
  const response = await fetch('items');
  let itemsjson;
  if (response.ok) {
    itemsjson = await response.json();
    postItems(itemsjson);
  } else {
    console.log('fail');
  }
}
function postItems(itemsjson) {
  const productfolder = document.getElementById('productfolder');
  // const productPriceAndName = document.getElementById('product-price');
  for (let i = 0; i < itemsjson.length; i++) {
    const singleproductholder = document.createElement('div');
    singleproductholder.classList.add('singleproductholder');
    // singleproductholder.id = itemsjson[i].id;
    productfolder.append(singleproductholder);
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = itemsjson[i].img;
    const imgPlaceholder = document.createElement('div');
    imgPlaceholder.classList.add('imgPlaceholder');
    console.log('test');
    imgPlaceholder.append(image);
    singleproductholder.append(imgPlaceholder);
    const namepriceholder = document.createElement('div');
    namepriceholder.classList.add('namepriceholder');
    const name = document.createElement('div');
    name.classList.add('name');
    const productname = itemsjson[i].name;
    name.textContent = (productname);
    namepriceholder.append(name);
    const price = document.createElement('div');
    price.textContent = '£' + itemsjson[i].p;
    namepriceholder.append(price);
    singleproductholder.append(namepriceholder);
    // creates a button to add to cart option
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('add-to-cart');
    const button = document.createElement('button');
    // set id to the button same as the provide in data for event listener
    button.id = itemsjson[i].id;
    button.innerHTML = 'Add to Cart';
    buttonDiv.append(button);
    singleproductholder.append(buttonDiv);
  }
  // get all the elemnents with of button
  const btns = document.querySelectorAll('button');
  // get element of the cart items
  const cartItemsEl = document.querySelector('.cart-items');
  // sub total of the cart
  const subtotalEl = document.querySelector('.subtotal');
  // proceed to checkout to remove all the element that exist in the cart
  const checkOut = document.querySelector('.checkout');

  // initialise cart
  let cart = [];
  // looping out all button and add listener
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (id) {
      // check if the add to cart is already exist in the cart
      if (cart.some((item) => item.id === id.currentTarget.id)) {
        alert('already exist in the cart'); // popup confirming item is in cart
      } else {
        // add item to the cart
        const itemm = itemsjson.find((items) => items.id === id.currentTarget.id);
        cart.push({
          ...itemm,
          numberOfUnits: 1,
        });
      }
      // update the cart
      updateCart();
    });
  }
  function updateCart() {
    renderCartItems();
    renderSubtotal();

    // save cart to local storage
    // get all the element of minus operator to add listener and subtract the total number of items
    const minus = document.querySelectorAll('.minus');
    // get all the element of plus operator to add listener and add the total number of items
    const plus = document.querySelectorAll('.plus');
    // get all the element to remove the element formt he cart
    const itemInfo = document.querySelectorAll('.item-info');
    for (let i = 0; i < minus.length; i++) {
      minus[i].addEventListener('click', function (event) {
        cart = cart.map((item) => {
          let numberOfUnits = item.numberOfUnits;
          // subtract the element above the zero
          if (item.id === event.currentTarget.id) {
            if (numberOfUnits > 1) {
              numberOfUnits--;
            }
          }
          return {
            ...item,
            numberOfUnits,
          };
        });
        // update the cart
        updateCart();
      });
    }
    for (let i = 0; i < plus.length; i++) {
      plus[i].addEventListener('click', function (event) {
        cart = cart.map((item) => {
          let numberOfUnits = item.numberOfUnits;
          // add the number of items not greater the the quantity exist
          if (item.id === event.currentTarget.id) {
            if (numberOfUnits < item.quantity) {
              numberOfUnits++;
            }
          }
          return {
            ...item,
            numberOfUnits,
          };
        });

        updateCart();
      });
    }
    // remove the item when user clicks on the item inside basket
    for (let i = 0; i < itemInfo.length; i++) {
      itemInfo[i].addEventListener('click', function (event) {
      // remove the element by matching their id
        cart = cart.filter((item) => item.id !== event.currentTarget.id);

        updateCart();
      });
    }
  }
  // total amount and items render
  function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;
    // add the sub total by getting their price
    cart.forEach((item) => {
      totalPrice += item.p * item.numberOfUnits;
      totalItems += item.numberOfUnits;
    });
    // render the total amount and items
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): £${totalPrice.toFixed(2)}`;
  }
  // render cart items when user press the button this function will render the element of cart
  function renderCartItems() {
    cartItemsEl.innerHTML = '';
    cart.forEach((item) => {
      cartItemsEl.innerHTML += `
          <div class="cart-item">
              <div class="item-info" id="${item.id}">
                  <img src="${item.img}" alt="${item.name}">
                  <h4>${item.name}</h4>
              </div>
              <div class="unit-price">
                  <small>£</small>${item.p}
              </div>
              <div class="units">
                  <div class="btn minus" id="${item.id}">-</div>
                  <div class="number">${item.numberOfUnits}</div>
                  <div class="btn plus" id="${item.id}">+</div>           
              </div>
          </div>
        `;
    });
  }
  // proceed to check out to empty the cart
  checkOut.addEventListener('click', function () {
    cart = [];
    updateCart();
    alert('THANK YOU FOR PURCHASING'); // popup confirming purchase
  });
  postItems();
}

fetchShopItems();
