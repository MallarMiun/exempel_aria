"use strict";

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const panel = button
      .closest(".accordion-item")
      .querySelector(".accordion-content");

    const icon = button.querySelector(".accordion-icon");
    const isOpening = panel.hidden;

    // Innehållet visas och döljs visuellt, men inget tillstånd
    // förmedlas till skärmläsaren med aria-expanded
    panel.hidden = !isOpening;

    if (icon) {
      icon.textContent = isOpening ? "−" : "+";
    }
  });
});

const contactForm = document.querySelector("#contactForm");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  // Rensa tidigare fel innan formuläret valideras igen
  emailError.textContent = "";
  messageError.textContent = "";

  if (!email.value.trim()) {
    // Felet visas visuellt men kopplas inte till inputfältet
    emailError.textContent = "Fyll i din e-postadress.";
  }

  if (!message.value.trim()) {
    // Felet visas visuellt men kopplas inte till textarea-elementet
    messageError.textContent = "Skriv ett meddelande.";
  }
});