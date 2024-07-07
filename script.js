document.addEventListener("DOMContentLoaded", () => {
    const numberElement = document.getElementById("number");
    const incrementButton = document.getElementById("incrementButton");

    incrementButton.addEventListener("click", () => {
        let currentNumber = parseInt(numberElement.textContent);
        numberElement.textContent = currentNumber + 1;
    });
});