import $ from 'jquery';
// import mapscroll from './templates/mapscroll';

// var bootstrap = require('bootstrap');
// console.log(bootstrap);

// carousel
// next button on carousel
 $('#carousel .next a').on("click", function(e){
   e.preventDefault ();
   var currentSlide = $('#carousel li.active');
   var nextSlide = $('#carousel li.active').next();

   // hide the current slide by removing class active and hiding it.
   currentSlide.removeClass('active').hide();
   // make carousel repeate from fist image when last has shown

   if (nextSlide.length === 0) {
     nextSlide = $('#carousel li').first();
   }
   nextSlide.addClass('active').show();
 });

// previous button on carousel
 $('#carousel .prev a').on("click", function(e){
   e.preventDefault ();
   var currentSlide = $('#carousel li.active');
   var prevSlide = $('#carousel li.active').prev();

   currentSlide.removeClass('active').hide();
   if (prevSlide.length === 0) {
     prevSlide = $('#carousel li').last();
   }
   prevSlide.addClass('active').show();
 });
