function headerMobile() {
  const headers = document.querySelectorAll("[data-name='accordeon-title']");
  const body = document.body;

  headers.forEach(function (item) {
    item.addEventListener("click", showContent);
  });

  function showContent() {
    this.nextElementSibling.classList.toggle("hidden");
  }

  $(".header-hamburger").on("click", function () {
    $(".header-mobile").addClass("is-active");
    body.classList.add("no-scroll");
  });

  $(".header-mobile-close").on("click", function () {
    $(".header-mobile").removeClass("is-active");
    body.classList.remove("no-scroll");
  });
}
export default headerMobile;
