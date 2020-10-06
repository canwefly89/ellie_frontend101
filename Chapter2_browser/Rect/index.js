const different = document.querySelector(".different");
console.log(different.getClientRects());

const clickHandler = (event) => {
  console.log(`client: ${event.clientX} , ${event.clientY}`);
  console.log(`page: ${event.pageX} , ${event.pageY}`);
};

window.addEventListener("click", clickHandler);

const scrollBy100px = () =>
  window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
const scrollTo100px = () => window.scrollTo(0, 100);
const scrollToSpecial = () => different.scrollIntoView();
