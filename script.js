document.addEventListener("DOMContentLoaded", function() {
    let dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("mouseover", function() {
        dropdown.querySelector(".dropdown-menu").style.display = "block";
    });
    dropdown.addEventListener("mouseleave", function() {
        dropdown.querySelector(".dropdown-menu").style.display = "none";
    });
});

/*
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa fa-caret-down'
}
*/