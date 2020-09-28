const showTestButtons = document.querySelectorAll('.test__click');

showTestButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    button.parentNode.parentNode
      .querySelector('.block__test')
      .classList.toggle('active');
    if (button.innerText === 'show tests ▼') {
      button.innerText = 'hide tests ▲';
    } else {
      button.innerText = 'show tests ▼';
    }
  });
});
