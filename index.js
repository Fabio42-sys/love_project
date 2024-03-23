document.addEventListener("DOMContentLoaded", function () {
  // Captura do botão "init"
  var initButton = document.getElementById("init");

  // Adiciona um evento de clique ao botão "init"
  initButton.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do botão

    // Exibir a mensagem "Carregando o quiz" abaixo da div .imgs
    var loadingMessage = document.createElement("p");
    loadingMessage.textContent = "Carregando o quiz";
    document.querySelector(".container").appendChild(loadingMessage);

    // Esconde as imagens após 3.5 segundos
    setTimeout(function () {
      var imgs = document.querySelector(".imgs");
      imgs.style.display = "none";

      // Muda o texto do elemento "explain" para "Boa sorte amor"
      var explainText = document.querySelector(".explain");
      explainText.textContent = "Boa sorte amor";

      // Exibe o formulário do quiz
      var quizForm = document.querySelector(".quiz");
      quizForm.style.display = "flex";

      initButton.style.display = "none";
      loadingMessage.remove();

      var inputs = document.querySelectorAll('.quiz input[type="text"]');
      inputs.forEach(function(input) {
        input.value = ""; // Define o valor do campo como vazio
      });

      // Evento de finalização do quiz
      var endButton = document.getElementById('end');
      endButton.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do botão

        var calcMessage = document.createElement('p');
        calcMessage.textContent = 'Calculando seus resultados, aguarde';
        document.querySelector(".container").appendChild(calcMessage);

        // Cálculo do quiz e exibição do resultado
        var total_quest = 10;
        var acertos = 0;
        var erros = 0;
        var resultado;

        let quest1 = document.getElementById('qst1').value;
        let quest2 = document.getElementById('qst2').value;
        let quest3 = document.getElementById('qst3').value;
        let quest4 = document.getElementById('qst4').value;
        let quest5 = document.getElementById('qst5').value;
        let quest6 = document.getElementById('qst6').value;
        let quest7 = document.getElementById('qst7').value;
        let quest8 = document.getElementById('qst8').value;
        let quest9 = document.getElementById('qst9').value;
        let quest10 = document.getElementById('qst10').value;

        if (quest1 === '1 ano e 2 meses') {
          acertos++;
          console.log('acertou quest1');
        } else {
          erros++;
          console.log('errou, quest1');
        }
        if (quest2 === 'Traumas') {
          acertos++;
          console.log('acertou quest2');
        } else {
          erros++;
          console.log('errou quest2');
        }
        if (quest3 === '21/01') {
          acertos++;
          console.log('acertou quest3');
        } else {
          erros++;
          console.log('errou quest3');
        }
        if (quest4 === 'Aparecida do Norte') {
          acertos++;
          console.log('acertou quest4');
        } else {
          erros++;
          console.log('errou quest4');
        }
        if (quest5 === 'Luana') {
          acertos++;
          console.log('acertou quest5');
        } else {
          erros++;
          console.log('errou quest5');
        }
        if (quest6 === 'Crepusculo') {
          acertos++;
          console.log('acertou quest6');
        } else {
          erros++;
          console.log('errou quest6');
        }
        if (quest7 === 'crashes into us') {
          acertos++;
          console.log('acertou quest7');
        } else {
          erros++;
          console.log('errou quest7');
        }
        if (quest8 === 'Nenem') {
          acertos++;
          console.log('acertou quest8');
        } else {
          erros++;
          console.log('errou quest8');
        }
        if (quest9 === 'sair junto') {
          acertos++;
          console.log('acertou quest9');
        } else {
          erros++;
          console.log('errou quest9');
        }
        if (quest10 === 'tayna e eduardo') {
          acertos++;
          console.log('acertou quest10');
        } else {
          erros++;
          console.log('errou quest10');
        }

        if (acertos === erros) {
          resultado = "você me conhece bme mas não o suficiente";
        } else if (acertos > erros) {
          resultado = "Já podemos nos casar? você me conhece melhor que eu mesmo";
        } else if (acertos < erros) {
          resultado = "Certeza que você nos ama?";
        } else {
          resultado = "Algo deu errado :c, tente novamente";
        }

        let media = (acertos + erros) / total_quest;

        // Esconde a mensagem de cálculo após 2.5 segundos
        setTimeout(function () {
          calcMessage.remove();
          quizForm.style.display = "none";

          initButton.style.display = "block";

          imgs.style.display = "flex";
          var result = document.getElementById('result');

          result.innerHTML = "";

          result.innerHTML += "Suas respostas certas: " + acertos + "<br>";
          result.innerHTML += "Suas respostas erradas: " + erros + "<br>";
          result.innerHTML += "Sua média: " + media.toFixed(2) + "<br>";
          result.innerHTML += "Seu resultado foi: " + resultado;

        }, 2500);
      });

    }, 2500);
  });
});
