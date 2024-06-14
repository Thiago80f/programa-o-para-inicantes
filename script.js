document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');
    const loginMessage = document.getElementById('login-message');
    const signupMessage = document.getElementById('signup-message');

    // Mostrar formulário de cadastro
    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    // Mostrar formulário de login
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Processar cadastro
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // Limpar mensagens anteriores
        signupMessage.textContent = '';

        // Verificar se o usuário já existe
        if (localStorage.getItem(username)) {
            signupMessage.textContent = 'Nome de usuário já existe.';
            return;
        }

        // Armazenar dados do usuário
        localStorage.setItem(username, password);
        signupMessage.textContent = 'Cadastro bem-sucedido! Faça login.';
        signupMessage.style.color = 'green';

        // Limpar campos de entrada
        document.getElementById('signupForm').reset();
    });

    // Processar login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        // Limpar mensagens anteriores
        loginMessage.textContent = '';

        // Verificar se o usuário existe e a senha está correta
        if (localStorage.getItem(username) === password) {
            loginMessage.textContent = 'Login bem-sucedido!';
            loginMessage.style.color = 'green';
            // Redirecionar para uma URL específica após 1 segundo
            setTimeout(function() {
                window.location.href = 'https://thiago80f.github.io/Thigasnoobsenhas/';
            }, 1000);
        } else {
            loginMessage.textContent = 'Nome de usuário ou senha incorretos.';
        }
    });
});
