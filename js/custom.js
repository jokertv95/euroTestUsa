// //Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// //CUSTOM YEAR FOR COPYRIGHT

// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// console.log(currentYear);
// yearEl.textContent = currentYear;

// JAVASCRIPT GOOGLE MAP API

let map;

function initMap() {
  // The location of Uluru
  const euroExchangeHead = { lat: 25.773568, lng: -80.189557 };
  const euroExchangeDown = { lat: 25.775073, lng: -80.189435 };
  const euroExchangeDoral = { lat: 25.812039, lng: -80.366467 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: euroExchangeHead,
    mapId: "9fdf44a18ae38824",
  });
  // The marker, positioned at Uluru
  const marker1 = new google.maps.Marker({
    position: euroExchangeHead,
    map: map,
  });

  const marker2 = new google.maps.Marker({
    position: euroExchangeDown,
    map: map,
  });

  const marker3 = new google.maps.Marker({
    position: euroExchangeDoral,
    map: map,
  });
}

window.initMap = initMap;

// Hover Drop Down NavBar
document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {
    document
      .querySelectorAll(".navbar .nav-item")
      .forEach(function (everyitem) {
        everyitem.addEventListener("mouseover", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.add("show");
            nextEl.classList.add("show");
          }
        });
        everyitem.addEventListener("mouseleave", function (e) {
          let el_link = this.querySelector("a[data-bs-toggle]");

          if (el_link != null) {
            let nextEl = el_link.nextElementSibling;
            el_link.classList.remove("show");
            nextEl.classList.remove("show");
          }
        });
      });
  }
  // end if innerWidth
});
