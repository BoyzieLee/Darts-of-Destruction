import $ from 'jquery';

var shoppingCart = $('.shoppingCart');

function product (product) {
  return `
  <div class="shoppingCart col-sm-5">
    <h4>titel: ${product.title}</h4>
    <p class="productDescription">${product.description}</p>

  </div>
  `;
}


var productURL = $.getJSON('https://json-data.herokuapp.com/darts/info');

productURL.then( function (product) {
  var html = shoppingCart(product);
  product.append(html);
  // console.log(product);
});


export default product;
