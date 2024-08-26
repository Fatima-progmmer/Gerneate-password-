const passwordbox = document.getElementById("password");
const length = 12;

const uperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+\{}[]<>-=";


const allChars = uperCase + lowercase + number + password;
function createpassword() {
    let password = " ";
    password += uperCase[Math.floor(Math.random() * uperCase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;
}
function copypassword() {
    passwordbox.select();
    document.execCommand("copy");
}