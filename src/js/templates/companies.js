import $ from 'jquery';

function companyPics (company) {
  return `
  <div class="col-sm-3 text-center">
    <img src="${company.image_url}">
  </div>
  `;
}

export default companyPics;
