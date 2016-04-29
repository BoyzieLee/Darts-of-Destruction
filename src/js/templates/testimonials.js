import $ from 'jquery';

// assign api url to a variable for later use
var url = 'https://randomuser.me/api/?inc=picture';


$.ajax({
  url: 'https://randomuser.me/api/?inc=picture',
  dataType: 'json',
  success: function(data){
    console.log(data);
  }
});

  // assign HTML area where template will render profile cards on the page
  // will append results here later
  var cardArea = $('.profiles');

  // Make My Request
  var dataRequest = $.getJSON(url);

  console.log(dataRequest);
  var cardsHTML = '';

  // When it succedes, call my template Card Function
  dataRequest.then( function (res) {
    var formArr = res.results;
    formArr.forEach( function (user) {
      console.log(user);
      console.log(user.picture.medium);

      // passing each user into picture function for processing
      var html = testimonials(user);
      cardsHTML += html;
    });

    // append each result user card to html section class=cardArea
    cardArea.append(cardsHTML);
  });

  function testimonials (user) {
    return `
    <div class="col-md-4 text-center">
      <img src="https://randomuser.me/api/portraits/med/men/66.jpg" alt="" />
      <h5>FirsName LastName</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
    </div>
    `;
  }


export default testimonials
