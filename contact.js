document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Veuillez remplir tous les champs.";
    formMessage.classList.remove("hidden");
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = `Merci pour votre message, ${name} !`;
  formMessage.classList.remove("hidden");
  formMessage.style.color = "#00ffcc";

  this.reset();
});
