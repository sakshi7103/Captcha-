function generateCaptcha() {
    const canvas = document.getElementById('captcha');
    const ctx = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(captchaText, 50, 35);

    window.captchaValue = captchaText;
}

function validateCaptcha() {
    const userInput = document.getElementById('captchaInput').value;
    const errorMessage = document.getElementById('errorMessage');

    if (userInput === window.captchaValue) {
        errorMessage.textContent = 'CAPTCHA Verified Successfully!';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Incorrect CAPTCHA. Please try again.';
        errorMessage.style.color = 'red';
        generateCaptcha(); 
    }
}

window.onload = generateCaptcha;
