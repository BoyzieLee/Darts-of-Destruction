
  function testimonials (user) {
    return `
    <div class="col-md-4 text-center">
      <img src="${user.picture.medium}" alt="" />
      <h5>FirsName LastName</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
    </div>
    `;
  }

export default testimonials;
