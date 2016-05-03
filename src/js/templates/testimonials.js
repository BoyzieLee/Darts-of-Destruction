
  function testimonialTemplate (user) {
    return `
    <div class="col-md-4 text-center">
      <img src="${user.user}" alt="" />
      <h5>${user.name}</h5>
      <p>${user.review}</p>
    </div>
    `;
  }

export default testimonialTemplate;
