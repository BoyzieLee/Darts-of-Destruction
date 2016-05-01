import $ from 'jquery';

// selecting html element on dom to later insert html
var productDetails = $('.productDetails');


function productTemplate (productData) {
  return `
    <h4>${productData.data.product.title}</h4>
    <p>${productData.data.product.description}</p>
  `;
}


var dataRequest = $.getJSON('https://json-data.herokuapp.com/darts/info');

dataRequest.then( function (product) {
  console.log(product);
  var html = productTemplate(product);
  productDetails.append(html);

});


export default productTemplate;
