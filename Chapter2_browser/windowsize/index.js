const tag = document.querySelector(".tag");

const resizeHandler = function () {
  tag.innerHTML = `window.screen: ${window.screen.width}, ${window.screen.height} </br>
  window.outer: ${window.outerWidth}, ${window.outerHeight} </br>
  window.inner: ${window.innerWidth}, ${window.innerHeight}</br>
  document.clientwidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
};

window.addEventListener("resize", resizeHandler);
resizeHandler();
