//begin index
// Função para exibir a data e a hora em tempo real
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const dateTimeElement = document.getElementById('date-time');
    if (dateTimeElement) {
        dateTimeElement.innerText = `${date} - ${time}`;
    }
}

// Atualiza a data e hora assim que a página é carregada
window.onload = function() {
    updateDateTime();
    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);

    // Verifica se o botão de login existe antes de adicionar o ouvinte de eventos
    const loginButton = document.getElementById("login-button");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            // Redireciona para a página desejada após o login
            window.location.href = "home-page.html";
        });
    }
}
//end index


