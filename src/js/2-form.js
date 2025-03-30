const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
let formData = { email: "", message: "" };

form.addEventListener("input", (event) => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
});

const savedData = localStorage.getItem(localStorageKey);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) { 
        alert("Fill all fields.");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
  form.reset()
  formData = { email: "", message: "" };
});