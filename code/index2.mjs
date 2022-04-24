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
    image.src = itemsjson[i].img;
    console.log('test');
    imgPlaceholder.append(image);
  }
  postItems();
}

fetchShopItems();
