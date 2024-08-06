function magnificPopup() {
  $(".magnific-iframe").magnificPopup({
    type: "iframe",
  });

  // gallery-item magnific-image
  $(".magnific-image").magnificPopup({
    type: "image",
    mainClass: "mfp-with-zoom",

    zoom: {
      enabled: true,
      duration: 700,
      easing: "ease-in-out",
      opener: function (openerElement) {
        return openerElement.is("img")
          ? openerElement
          : openerElement.find("img");
      },
    },
  });
}
export default magnificPopup;
