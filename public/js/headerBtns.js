//   Category functionality
  const categoryBody = document.querySelector(".category-body");
  const nextBtn = document.querySelector("#next-btn");

  nextBtn.addEventListener("click", () => {
    categoryBody.scrollLeft += 75;
  });
  // filter required change
  const priceRadio = document.getElementById("flexRadioDefault5");
  const locationRadio = document.getElementById("flexRadioDefault6");
  function toggleRequired() {
    const minPrice = document.getElementById("minPrice");
    const maxPrice = document.getElementById("maxPrice");
    const location = document.getElementById("location");
    if (priceRadio.checked) {
      minPrice.required = true;
      maxPrice.required = true;
      location.required = false;
    } else if (locationRadio.checked) {
      minPrice.required = false;
      maxPrice.required = false;
      location.required = true;
    }
  }

  priceRadio.addEventListener("change", toggleRequired);
  locationRadio.addEventListener("change", toggleRequired);
