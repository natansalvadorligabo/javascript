// Obtém os 'id' para o campo de exibição e os botões da calculadora
const display = document.querySelector('#display');
const keys = document.querySelector('#calculator');

// Adiciona um evento ao clique aos botões da calculadora
keys.addEventListener('click', (event) => {
  // Obtém o valor do botão que foi clicado
  const amount = event.target.value;

  if (amount === 'c') { // Limpa o campo de exibição
    display.value = '';
    console.log('Clear.');
  } else if (amount === '=') { // "=" foi clicado, avalia a expressão no campo de exibição
    try {
      display.value = eval(display.value);
      console.log('Calculating...');
    } catch (error) { // Em caso de erro durante o cálculo, exibe "Erro" no campo de exibição
      display.value = 'Error';
      console.log('Error.');  
    }
  } else {
    // Adiciona o valor do botão ao campo de exibição
    display.value += amount;
    console.log('Value Add: ' + amount);
  }
});

// A função eval() avalie uma string como código JavaScript em tempo de execução. 
// Ela toma a string passada como argumento, a interpreta como código JavaScript e a executa.
