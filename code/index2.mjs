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
    price.textContent = itemsjson[i].p;
    namepriceholder.append(price);
    singleproductholder.append(namepriceholder);
  }
  postItems();
}

fetchShopItems();


