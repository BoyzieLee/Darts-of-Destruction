
import $ from 'jquery';
import carousel from './templates/carousel';
import testimonials from './templates/testimonials';

// assign user api url to a variable for later use
var userURL = 'https://randomuser.me/api/?results=1&gender=';
// assign testimonial api url to a variable for later use
var testURL = 'https://json-data.herokuapp.com/darts/testimonials';

// assign HTML area where template will render profile cards on the page
// will append results here later
var testimonialsArea = $('.testimonials-row');
// array to keep track of gender for api requests
var genderArr = ['female', 'male', 'male'];
// for loop to get image URLs that match gender of testimonials

var imgArray = [];

for (var i = 0; i < 3; i++){
  var requrl = userURL + genderArr[i];
  var dataRequest = $.getJSON(requrl);
  dataRequest.then( function(res) {
    var user = res.results[0];
    console.log(user.picture.large);
    // creates space to store urls
    imgArray.push();
    // console.log(res.results.user.picture.medium);
  });
}












  // // Make My Request
  // var dataRequest = $.getJSON(userURL);
  //
  // var testimonialsHTML = '';
  //
  // // When it succedes, call my template Card Function
  // dataRequest.then( function (res) {
  //   var formArr = res.results;
  //   formArr.forEach( function (user) {
  //     console.log(user);
  //     // console.log(user);
  //     // console.log(user.picture.medium);
  //     // passing each user into testimonial function for processing
  //     var html = testimonials(user);
  //     testimonialsHTML += html;
  //
  //   });
  //
  //   // append each result user card to html section class=cardArea
  //   testimonialsArea.append(testimonialsHTML);
  // });
