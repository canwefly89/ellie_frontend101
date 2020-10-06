// query select
const targetImage = document.querySelector(".target__image");
const targetPosition = document.querySelector(".target__position");
const lineVertical = document.querySelector(".line__vertical");
const lineHorizontal = document.querySelector(".line__horizontal");
const targetRect = targetImage.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

addEventListener("load", () => {
  // select style
  const targetImageStyle = targetImage.style;
  const targetPositionStyle = targetPosition.style;
  const lineVerticalStyle = lineVertical.style;
  const lineHorizontalStyle = lineHorizontal.style;

  // change position as mousemove
  document.addEventListener("mousemove", (event) => {
    const x = event.pageX;
    const y = event.pageY;
    targetPosition.innerHTML = `${x}px, ${y}px`;
    targetImageStyle.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    targetPositionStyle.transform = `translate(${x + 20}px, ${y}px)`;
    lineVerticalStyle.transform = `translateX(${x}px)`;
    lineHorizontalStyle.transform = `translateY(${y}px)`;
  });
});
