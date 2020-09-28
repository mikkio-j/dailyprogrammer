const showTestButtons = document.querySelectorAll('.test__click');

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
