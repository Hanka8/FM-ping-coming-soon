const errorText = document.getElementById("errorText");
const input = document.querySelector(".email");
const btn = document.querySelector(".btn");
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

btn.addEventListener("click", function() {
  const email = document.querySelector(".emailInput").value;
  if (email.match(regex)) {
    input.classList.remove("inputError");
    errorText.classList.add("hide");
  } else {
    input.classList.add("inputError");
    errorText.classList.remove("hide");
  }
});
