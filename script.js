const menuBtn = document.querySelector(".menubtn");
const exitBtn = document.querySelector(".exitbtn");
const ul = document.querySelector("ul");
const li = ul.querySelectorAll("li");

menuBtn.addEventListener("click", openMenu);
exitBtn.addEventListener("click", closeMenu);
li.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

function openMenu() {
  if (window.innerWidth < 768) {
    ul.style.transform = "translateY(0%)";
  }
}

function closeMenu() {
  if (window.innerWidth < 768) {
    ul.style.transform = "translateY(-100%)";
  }
}
