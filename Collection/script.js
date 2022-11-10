const boxes = document.querySelectorAll(".item");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const target = e.target;
    if (target.matches(".div-img>img")) {
      const mainImage =
        target.parentElement.parentElement.previousElementSibling
          .firstElementChild;
      mainImage.src = target.src;
    }
  });
});
