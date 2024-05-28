var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    if (state === "ပိတ်ပါ") {
      element.textContent = element.dataset.fruit;
      element.dataset.state = "ဖွင့်ပါ";
    }
    else {
      element.textContent = "";
      element.setAttribute("data-state", "ပိတ်ပါ");
    }
  }
});
