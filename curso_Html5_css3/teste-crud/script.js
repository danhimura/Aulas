// document.addEventListener('DOMContentLoaded', function() {
//     document.addEventListener('keypress', function(event) {
//         if (isEnterKeyPressed(event) && isTextInput(event.target)) {
//             event.preventDefault();
//             focusNextTextInput(event.target);
//         }
//     });
// });

// function isEnterKeyPressed(event) {
//     return event.key === 'Enter';
// }

// function isTextInput(element) {
//     return element.tagName === 'INPUT' && element.type === 'text';
// }

// function focusNextTextInput(currentInput) {
//     const textInputs = Array.from(document.querySelectorAll('input[type="text"]'));
//     const currentIndex = textInputs.indexOf(currentInput);
//     const nextIndex = (currentIndex + 1) % textInputs.length;
//     textInputs[nextIndex].focus();
// }
// // Esse script não está funcionando corretamente

function ola(){ //Essa é apenas uma função de teste
    alert('testando')
}
function mudaCorDiv(evento){
    let obj = document.querySelector('div#login')
    if(evento ==='mouseover'){
        obj.style.background ='#fff'
    }else if (evento ==='mouseout'){
        obj.style.background ='rgb(1, 1, 73)'

    }
}
    
function addEventos(){ //essa função adiciona eventos aos elementos
    let obj = document.querySelector("div#login")
    // obj.addEventListener('click',ola)
    // obj.addEventListener('mouseover',function (){
    //                                     mudaCorDiv('mouseover')
    //                                 }
    // )
    // obj.addEventListener('mouseout',function(){
    //                                 mudaCorDiv('mouseout')
    //                             }
    // )
    obj.addEventListener('keydown', function(event) {
        let tecla = event.key;
        if (tecla === 'Enter') {
            let focoAtual = document.activeElement;
            if (focoAtual.id === 'txtnome') {
                document.getElementById('txtsenha').focus();
                window.alert(focoAtual.id)
                return false; // Evita o comportamento padrão da tecla Enter
            } 
            if (focoAtual.id === 'txtsenha') {
                document.getElementById('btnlogar').focus();
                return false; // Evita o comportamento padrão da tecla Enter
            }
        }
    });
    


}

window.addEventListener("load",addEventos)//adiciona um listener a janela onde ficam os documentos
