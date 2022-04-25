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
  const imgPlaceholder = document.getElementById('imgPlaceholder');
  for (let i = 0; i < itemsjson.length; i++) {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = itemsjson[i].img;
    console.log('test');
    imgPlaceholder.append(image);
    const name = document.createElement('div');
    name.textContent = itemsjson[i].name;
    imgPlaceholder.append(name);
    const price = document.createElement('div');
    price.textContent = itemsjson[i].p;
    imgPlaceholder.append(price);
  }
  postItems();
}

fetchShopItems();
