"use strict";

/* ---------------- Стрелочка наверх ---------------- */

window.addEventListener('scroll', function() {
  var headerHeight = document.querySelector('.header').offsetHeight;

  if (window.scrollY > headerHeight / 2) {
    document.querySelector('.arrow_up').classList.add('visible');
  }
  else {
    document.querySelector('.arrow_up').classList.remove('visible');
  }
});

/* ---------------- Проверка видимости (для анимаций) ---------------- */

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation');

for (let elm of elements) {
  observer.observe(elm);
}

/* ---------------- Кнопка Забронировать ---------------- */

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("modal").classList.add("show");
});