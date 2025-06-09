const form = document.getElementById('form');
form.addEventListener('submit', function (parametr) {
    parametr.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = document.getElementById('div');
    result.innerHTML = `
        <h3>Kiritilgan ma'lumotlar:</h3>
        <p>Email: ${email}</p>
        <p>Parol: ${password}</p>
    `;
});