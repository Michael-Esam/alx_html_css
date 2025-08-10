let list = document.querySelector(".list")
let menu = document.querySelector(".nav")
list.addEventListener('click', () => {
    menu.classList.toggle('active');
    list.classList.toggle('open');
  });