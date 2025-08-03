const error_msg = document.getElementById('error-message');
const btn = document.getElementById('btn');
const email = document.getElementById('email');
const error_img = document.getElementById('error-img');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

    if (!isValidEmail) {
        error_msg.classList.remove("hidden");
        error_img.classList.remove("hidden");
        email.style.borderColor = 'red';
    } else {
        error_msg.classList.add("hidden");
        error_img.classList.add("hidden");
        email.style.borderColor = 'hsl(0, 3%, 71%)';
    }
});