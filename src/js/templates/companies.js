import $ from 'jquery';

var companies = $('.companies');
// console.log(companies);

function companyPics (companies) {
  return `
    <img src="${results.image_url}">
    <img src="${results.image_url}">
    <img src="${results.image_url}">
    <img src="${results.image_url}">
  `;
}
var resultsRequest = $.getJSON('https://json-data.herokuapp.com/darts/companies');

resultsRequest.then( function (res) {
  res.results.forEach(function(companies) {
    // console.log(companies);
    var html = companyPics(res);
    companies.append(html);
  });
});

export default companies;
