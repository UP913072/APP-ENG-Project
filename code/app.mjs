
const items1 = document.querySelector('.items');

// show product
function showItems(){
  Items.forEach( (item) => { 
    items1.innerHTML += `
    <div class="description">
    <h1>Blue Brick</h1>
    <h2><bold>£</bold>0.30</h2>
    <p>Blue Brick (2x4)</p>
    </div>
    <div class="Add to Basket">
        <img src="images/basket.png" alt="Add to basket">
  });

}