
import $ from 'jquery';
import carousel from './templates/carousel';
import testimonials from './templates/testimonials';

// assign api url to a variable for later use
var url = 'https://randomuser.me/api/?results=3';

  // assign HTML area where template will render profile cards on the page
  // will append results here later
  var testimonialsArea = $('.testimonials-row');

  // Make My Request
  var dataRequest = $.getJSON(url);

  var testimonialsHTML = '';

  // When it succedes, call my template Card Function
  dataRequest.then( function (res) {
    var formArr = res.results;
    formArr.forEach( function (user) {
      console.log(user);
      // console.log(user);
      // console.log(user.picture.medium);
      // passing each user into testimonial function for processing
      var html = testimonials(user);
      testimonialsHTML += html;

    });

    // append each result user card to html section class=cardArea
    testimonialsArea.append(testimonialsHTML);
  });
