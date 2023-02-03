$(window).on("load", function () {
  $.get("https://dummyjson.com/products", function (data) {
      const arr = data.products
      const newArr = arr.map((array) => [array.category, array]);
      const newMap = new Map(newArr);
      const iterator = newMap.values();
      const unique = [...iterator];
      console.log(unique);
      let text = ""
      for (let i = 0; i < unique.length; i++) {
          text += `
          <a class="list-group-item list-group-item-action" href="#" onclick="getValue(${i})">${unique[i].category}</a>
          `
      }
      $(".list-group").html(text);
      let imagesData = ""
      for (i in arr) {
          if (arr[i].category == "smartphones") {
              imagesData += `
                  <div class="col-sm-4 col-md-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
          }
          $(".imagesData").html(imagesData);
          var rate = arr[i].rating;
          console.log(Math.round(rate));
      }
  })
})

function ratings(index) {
  $.get("https://dummyjson.com/products", function (data) {
      const arr = data.products
      const arrRate = Math.round(arr[i].rating)
      console.log(arrRate);
      console.log(typeof(arrRate));
      console.log(arrRate > 5);
      if (arr[i].rating <5 ) {
          var starData = `<div>
          <div class="stars">
              <svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>

              <div class="cover" style="width: 69%;"></div>
          </div>
      </div>`
      $(".starsData").html(starData);
      }else{
          var starData = `<div>
          <div class="stars">
              <svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg><svg viewBox="0 0 576 512" width="20" title="star">
                  <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
              </svg>

              <div class="cover" style="width: 100%;"></div>
          </div>
      </div>`
      $(".starsData").html(starData);
      }
  })
}



function getValue(index) {
  $.get("https://dummyjson.com/products", function (data) {
      const arr = data.products
      if (index == 0) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "smartphones") {
                  imagesData += `
                  <div class="col-sm-4 col-md-6">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);
          }
      } if (index == 1) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "laptops") {
                  imagesData += `
                  <div class="col-sm-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);
          }
      } if (index == 2) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "fragrances") {
                  imagesData += `
                  <div class="col-sm-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);

          }
      } if (index == 3) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "skincare") {
                  imagesData += `
                  <div class="col-sm-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);
          }
      } if (index == 4) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "groceries") {
                  imagesData += `
                  <div class="col-sm-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem; height:30rem">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);
          }
      } if (index == 5) {
          let imagesData = ""
          for (i in arr) {
              if (arr[i].category == "home-decoration") {
                  imagesData += `
                  <div class="col-sm-4">
                  <div class="card mt-2 ms-1 me-5 mb-2" style="width: 20rem;">
                      <img src="${arr[i].thumbnail}" class="card-img-top" alt="..." height="200px" width="200px">
                      <div class="card-body">
                          <h5 class="card-title">${arr[i].title}</h5>
                          <p>Brand: <b>${arr[i].brand}</b></p>
                          <p class="card-text">${arr[i].description}</p>
                          <p>Price: $${arr[i].price}</p>
                          <p class="starsData">Ratings: ${ratings(i)}</p>
                      </div>
                  </div>
                  </div>`
              }
              $(".imagesData").html(imagesData);
          }
      }

  })
}