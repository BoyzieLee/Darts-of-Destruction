
  function testimonials (user) {
    return `
    <div class="col-md-4 text-center">
      <img src="${user.testimonialImageURL}" alt="" />
      <h5>${user.name}</h5>
      <p>${user.review}</p>
    </div>
    `;
  }

export default testimonials;
