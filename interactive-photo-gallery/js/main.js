//filter input "search"

let search = document.getElementById("search");
search.addEventListener("keyup", filterImage);

function filterImage() {
  let filter = document.getElementById("search").value.toLowerCase();
  let photoContainer = document.querySelectorAll(".photo-container");

  //loop through all photo-containers
  for (let i = 0; i < photoContainer.length; i++) {
    let a = document.getElementsByTagName("a");
    //loop through anchor tags
    for (let i = 0; i < a.length; i++) {
      //acquiring all anchor tags separately to get data-title attributes
      let anchorFilter = a[i].getAttribute("data-title");
      if (anchorFilter.toLowerCase().indexOf(filter) > -1) {
        photoContainer[i].style.display = "grid";
      } else {
        photoContainer[i].style.display = "none";
      }
    }
  }
}

//lightbox options//

lightbox.option({
  wrapAround: true,
  resizDuration: 500,
  imageFadeDuration: 500,
  alwaysShowNavOnTouchDevices: true,
  disableScrolling: true

})
