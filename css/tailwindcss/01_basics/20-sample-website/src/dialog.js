export default function () {
  const dialog = document.getElementById("mail");
  const contactButton = document.getElementById("send-message");
  const sendButton = document.getElementById("send-button");

  contactButton.addEventListener("click", () => dialog.showModal());

  document
    .getElementById("cancel-button")
    .addEventListener("click", () => dialog.close());

  document
    .getElementById("close-icon")
    .addEventListener("click", () => dialog.close());

  const form = document.getElementById("mail-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formElements = document.querySelectorAll(
      "#mail-form input, #mail-form textarea"
    );
    for (let input of formElements) {
      input.value = "";
    }
    document.getElementById("message").innerText = "Sent...";
  });

  form.addEventListener("change", () => {
    let valid = true;
    for (let item of form) {
      if (item.validity && item.validity.valid === false) {
        valid = false;
        break;
      }
    }
    sendButton.disabled = !valid;
  });
}
