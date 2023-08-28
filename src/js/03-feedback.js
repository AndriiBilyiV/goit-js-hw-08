import throttle  from "lodash/throttle";

const form = document.querySelector('.feedback-form');
const email = form.querySelector('input[name="email"]');
const message = form.querySelector('textarea[name="message"]');

try {
    const lastValues = JSON.parse(localStorage.getItem('feedback-form-state'))
    email.value = lastValues.email;
    message.value = lastValues.message;
} catch (err) {
    console.log(err)
}

form.addEventListener('input', throttle(() => {
    
    console.log(email);
    const values = {
        email: email.value,
        message: message.value
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(values))
}, 500)
)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(localStorage.getItem('feedback-form-state'));
    localStorage.removeItem('feedback-form-state');
    email.value = '';
    message.value = '';
})