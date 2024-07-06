function header() {
  let headerLinks = document.querySelectorAll(".menu-has-children");
  headerLinks.forEach(function (link) {
    let span = document.createElement("span");
    span.className = "menu-item-plus";
    span.textContent = "+";
    link.appendChild(span);
  });
}

export default header;
