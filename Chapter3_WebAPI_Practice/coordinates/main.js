// query select
const targetImage = document.querySelector(".target__image");
const targetPosition = document.querySelector(".target__position");
const lineVertical = document.querySelector(".line__vertical");
const lineHorizontal = document.querySelector(".line__horizontal");

// select style
const targetImageStyle = targetImage.style;
const targetPositionStyle = targetPosition.style;
const lineVerticalStyle = lineVertical.style;
const lineHorizontalStyle = lineHorizontal.style;

// contents position
targetImageStyle.position = "fixed";
targetPositionStyle.position = "fixed";
lineVerticalStyle.position = "fixed";
lineHorizontalStyle.position = "fixed";

// initial position
targetPosition.innerHTML = `0px, 0px`;
targetPositionStyle.left = "70px";
targetPositionStyle.top = `70px`;
lineHorizontalStyle.top = `50px`;
lineVerticalStyle.left = `50px`;

// change position as mousemove
document.addEventListener("mousemove", (event) => {
  const x = event.pageX;
  const y = event.pageY;
  targetPosition.innerHTML = `${x}px, ${y}px`;
  targetImageStyle.left = `${x - 50}px`;
  targetImageStyle.top = `${y - 50}px`;
  targetPositionStyle.left = `${x + 30}px`;
  targetPositionStyle.top = `${y + 20}px`;
  lineHorizontalStyle.top = `${y}px`;
  lineVerticalStyle.left = `${x}px`;
});
