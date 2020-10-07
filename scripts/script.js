const showTestButtons = document.querySelectorAll('.test__click');
const elementsToShow = document.querySelectorAll('.block__code');
const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

showTestButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    button.parentNode.parentNode
      .querySelector('.block__test')
      .classList.toggle('active');
    if (
      button.innerHTML ===
      'show tests <i class="fa fa-angle-double-down" aria-hidden="true"></i>'
    ) {
      button.innerHTML =
        'hide tests <i class="fa fa-angle-double-up" aria-hidden="true"></i>';
    } else {
      button.innerHTML =
        'show tests <i class="fa fa-angle-double-down" aria-hidden="true"></i>';
    }
  });
});

function loop() {
  elementsToShow.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}

loop();

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
