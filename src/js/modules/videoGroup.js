const videoGroup = () => {
  $(".video-group").on("click", function () {
    let video = $(this).find("video")[0];
    let playBtn = $(this).find(".video-play-btn");
    if (video.paused) {
      video.play();
      playBtn.hide();
    } else {
      video.pause();
      playBtn.show();
    }
  });
};

export default videoGroup;
