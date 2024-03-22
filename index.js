document.addEventListener("DOMContentLoaded", function() {
    // Captura do botão "init"
    var initButton = document.getElementById("init");
  
    // Adiciona um evento de clique ao botão "init"
    initButton.addEventListener("click", function() {
      // Exibir a mensagem "Carregando o quiz" abaixo da div .imgs
      var loadingMessage = document.createElement("p");
      loadingMessage.textContent = "Carregando o quiz";
      document.querySelector(".container").appendChild(loadingMessage);
      this.appendChild.remove();
  
      // Esconde as imagens após 3.5 segundos
      setTimeout(function() {
        document.querySelector(".imgs").style.display = "none";
  
        // Muda o texto do elemento "explain" para "Boa sorte amor"
        var explainText = document.querySelector(".explain");
        explainText.textContent = "Boa sorte amor";
  
        // Exibe o formulário do quiz
        var quizForm = document.querySelector(".quiz");
        quizForm.style.display = "flex";



        initButton.style.display = "none";
      }, 2500);
    });
  });
  