const firstCard = document.getElementById("first-card");
const submitBtn = document.getElementById("submit");
const secondCard = document.querySelector(".card.hidden");
let ratings = document.querySelectorAll(".btn");
let currentRating = document.querySelector("span");

submitBtn.addEventListener("click", () => {
    firstCard.style.display = "none";
    secondCard.classList.remove("hidden");
})

ratings.forEach(rating => rating.addEventListener('click', e => currentRating.textContent = e.target.textContent))