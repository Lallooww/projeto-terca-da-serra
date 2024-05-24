
//função para exibir a data e a hora em tempo real
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('date-time').innerText = `${date} - ${time}`;
}

// Atualiza a data e hora assim que a página é carregada
window.onload = function() {
    updateDateTime();
    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);
};

//direciona para outra página após o login
document.getElementById("login-button").addEventListener("click", function() {
    // Redireciona para a página desejada após o login
    window.location.href = "home-page.html";
});
