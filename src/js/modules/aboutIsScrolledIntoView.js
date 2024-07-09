function aboutIsScrolledIntoView() {
  function isScrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();
    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function countUp($element) {
    let countTo = $element.data("count");
    $({ countNum: $element.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "swing",
        step: function () {
          $element.text(Math.floor(this.countNum));
        },
        complete: function () {
          $element.text(this.countNum);
        },
      }
    );
  }

  let counted = false;
  $(window).on("scroll", function () {
    let $numScroll = $(".num-scroll");
    if ($numScroll.length && isScrolledIntoView($numScroll) && !counted) {
      $(".num-js").each(function () {
        countUp($(this));
      });
      counted = true;
    }
  });
}
export default aboutIsScrolledIntoView;
