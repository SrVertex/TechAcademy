window.addEventListener('scroll', function() {
    var box = document.getElementById('animated-box');
    var position = box.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2; // Ajuste conforme necessário

    // Verifica se a caixa está visível na tela
    if (position < screenPosition) {
        box.classList.add('animate'); // Adiciona a classe 'animate' para iniciar a animação
    } else {
        box.classList.remove('animate'); // Remove a classe 'animate' para interromper a animação
    }
});
