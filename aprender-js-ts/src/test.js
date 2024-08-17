let variable = 2;

document.addEventListener("DOMContentLoaded", function () {
  let navItems = document.querySelectorAll(".nav_item");
  console.log(navItems.length);
  navItems.forEach((item) => {
    item.addEventListener("click", clicNavegacion);
  });

  function clicNavegacion(event) {
    navItems.forEach((element) => {
      element.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  }
});
