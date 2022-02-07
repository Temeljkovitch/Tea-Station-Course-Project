// Setting date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

const navButton = document.querySelector("#nav-button");
const navbar = document.querySelector("#navbar");
const navClose = document.querySelector("#nav-close");

navButton.addEventListener("click", function()
{
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", function()
{
  navbar.classList.remove("showNav");
})