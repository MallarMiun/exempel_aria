"use strict";

const accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const icon = button.querySelector(".accordion-icon");

    // Kontrollera om accordionen är öppen
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Håll aria-expanded synkroniserat med om innehållet är öppet eller stängt
    button.setAttribute(
      "aria-expanded",
      isExpanded ? "false" : "true"
    );

    panel.hidden = isExpanded;

    if (icon) {
      icon.textContent = isExpanded ? "+" : "−";
    }
  });
});


const contactForm = document.querySelector("#contactForm");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const emailError = document.querySelector("#emailError");
const messageError = document.querySelector("#messageError");
const formErrorsLive = document.querySelector("#formErrorsLive");

contactForm.addEventListener("submit", event => {
  event.preventDefault();

  // Rensa tidigare fel innan formuläret valideras igen
  emailError.textContent = "";
  messageError.textContent = "";
  formErrorsLive.textContent = "";

  email.removeAttribute("aria-invalid");
  email.removeAttribute("aria-describedby");

  message.removeAttribute("aria-invalid");
  message.removeAttribute("aria-describedby");

  const errors = [];

  if (!email.value.trim()) {
    const errorMessage = "Fyll i din e-postadress.";

    emailError.textContent = errorMessage;

    // Markera fältet som ogiltigt och koppla det till felmeddelandet
    email.setAttribute("aria-invalid", "true");
    email.setAttribute("aria-describedby", "emailError");

    errors.push(errorMessage);
  }

  if (!message.value.trim()) {
    const errorMessage = "Skriv ett meddelande.";

    messageError.textContent = errorMessage;

    // Markera fältet som ogiltigt och koppla det till felmeddelandet
    message.setAttribute("aria-invalid", "true");
    message.setAttribute("aria-describedby", "messageError");

    errors.push(errorMessage);
  }

if (errors.length > 0) {
  // Live-regionen är visuellt dold men annonseras av skärmläsaren
  formErrorsLive.textContent =
    `Formuläret innehåller ${errors.length} fel. ${errors.join(" ")}`;

  return;
}

  formErrorsLive.textContent = "Formuläret är korrekt ifyllt.";
});