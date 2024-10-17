const body = document.querySelector('body');
document.body.addEventListener('click', function (e) {
  const co = ['grey', 'white', 'blue', 'yellow'];
  if (co.includes(e.target.id)) {
    body.style.backgroundColor = e.target.id;
  }
});
