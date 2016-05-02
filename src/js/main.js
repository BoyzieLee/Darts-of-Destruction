
import $ from 'jquery';
import carousel from './templates/carousel';
import testimonials from './templates/testimonials';
import product from './templates/product';
// import companies from './templates/companies';

// 
// // assign user api url to a variable for later use
// var userURL = 'https://randomuser.me/api/?results=1&gender=';
// // assign testimonial api url to a variable for later use
// var testURL = 'https://json-data.herokuapp.com/darts/testimonials';
//
// // assign product api url to a variable for later use
// // var companies = 'https://json-data.herokuapp.com/darts/companies';
//
// // assign HTML area where template will render profile cards on the page
// // will append results here later
// var testimonialsArea = $('.testimonials-row');
// // array to keep track of gender for api requests
// var genderArr = ['female', 'male', 'male'];
//
// // create array to hold image urls in order of correct gender
// var imgArray = [];
//
// // for loop to iterate through API calls for specific gender photos
// for (var i = 0; i < 3; i++){
//   // create variable for api url w/ correct gender query
//   var requrl = userURL + genderArr[i];
//   // variable to store the data request
//   var dataRequestUser = $.getJSON(requrl);
//   // upon success of data request .then( get image url and push it onto imgArray )
//   dataRequestUser.then( function(res) {
//     // create variable to hold the user data we want to work with, each request returns a response object with user data stored in an array, since we're only requesting one user at a time, this position in the array is always [0]
//     var user = res.results[0];
//     var imageurl = String(user.picture.medium);
//
//     // push urls into empty array
//     imgArray.push(imageurl);
//     console.log(imgArray);
//   });
// }
//
// // make variable to hold testimonials HTML code
// var testimonialsHTML = '';
//
// // make a request for data from testimonials url and store in variable
// var dataRequestTestimonial = $.getJSON(testURL);
//
//
//
// // upon successful response .then( do ... )
// dataRequestTestimonial.then( function(res) {
//   // store results array in var results
//   var results = res.results;
//   // make a counter to help iterate through the image array from previous function
//   var counter = 0;
//   // for each testimonial, build a new object with name, review and image url from imgArray
//   results.forEach( function(testimonial){
//     // create userObject and add properties
//     var userObject = new Object();
//         userObject.name = testimonial.name;
//         userObject.review = testimonial.review;
//         userObject.testimonialImageURL = imgArray[counter];
//         // advance the counter
//         counter += 1;
//         var html = testimonials(userObject);
//         testimonialsHTML += html;
//   });
//   // append each result user card to html section class=cardArea
//   testimonialsArea.append(testimonialsHTML);
// });
//
//



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
