document.addEventListener("DOMContentLoaded", () => {
  const btnCalculo = document.querySelector('#Calculo');
  const calculoContainer = document.getElementById("calculoContainer");

  btnCalculo.addEventListener('click', () => {
    if (calculoContainer.style.display === "none" || calculoContainer.style.display === "") {
      calculoContainer.style.display = "block";
    } else {
      calculoContainer.style.display = "none";
    }
  });
});