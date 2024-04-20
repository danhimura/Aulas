document.addEventListener("DOMContentLoaded", function() {
    var mobileBtn = document.getElementById('mobile_btn');
    var mobileMenu = document.getElementById('mobile_menu');

    mobileBtn.addEventListener('click', function() {
        // Toggle class 'active' no menu móvel
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        } else {
            mobileMenu.classList.add('active');
        }

        // Toggle class 'fa-x' no ícone dentro do botão móvel
        var mobileBtnIcon = mobileBtn.querySelector('i');
        if (mobileBtnIcon.classList.contains('fa-x')) {
            mobileBtnIcon.classList.remove('fa-x');
        } else {
            mobileBtnIcon.classList.add('fa-x');
        }
    });
});

// Neste código:

// document.addEventListener("DOMContentLoaded", function() { ... }): 
//Isso garante que o código JavaScript seja executado quando o DOM estiver completamente carregado.
// var mobileBtn = document.getElementById('mobile_btn'); e var mobileMenu = document.getElementById('mobile_menu');: 
//Estes são os elementos do botão móvel e do menu móvel, respectivamente.
// mobileBtn.addEventListener('click', function() { ... }): Adiciona um evento de clique ao botão móvel.
// Dentro do manipulador de eventos de clique, verificamos se a classe 'active' está presente no menu móvel. 
//Se estiver presente, removemos a classe; caso contrário, a adicionamos.
// Também fazemos a mesma verificação para a classe 'fa-x' no ícone dentro do botão móvel e a adicionamos ou 
//removemos conforme necessário.
// Dessa forma, o código produz o mesmo efeito que o código jQuery fornecido originalmente.