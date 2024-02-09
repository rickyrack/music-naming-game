export const randomValues = () => {
  anime({
    targets: ".square, .circle, .triangle",
    translateX: function () {
      return anime.random(-1000, 1000);
    },
    translateY: function () {
      return anime.random(-700, 700);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2.5);
    },
    duration: 10000,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
};

randomValues();