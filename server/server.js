/* server render: https://www.youtube.com/watch?v=U55XCQNCdcE&list=PLeh2GWv22bmSkMEpSv5Wme56XVpKG1Tr5&index=6&ab_channel=CodingwithBasir */
import data from '../app.js';
const browseScreen = {
  render: () =>{
    const {product} = data;
    return `
    <ul class="products">
    ${products.map( 
      product) =>`
    <li>
    <div class="product">
                        <a href="/#/product/${product._id}">
                            <img src="${product.image}" alt="${product.name}" />
                        </a>
                        <div class="product-name">
                            <a href="/#/product/1">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-price">
                            £${product.price}
                    </div>
    </li>

    `
    }
  }

