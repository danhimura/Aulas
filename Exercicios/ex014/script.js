function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =1// data.getHours()
    msg.innerHTML = ` Agora são ${hora} horas`
    document.getElementById('imagem').width = 100
    document.getElementById('imagem').heigth = 100

    if (hora >= 0 && hora<12){
        //Bom dia
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora<18){
        //boa tarde
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#e32d9f'
        
    }else{
        //boa noite
        img.src = 'img/noite.jpg'
        document.body.style.background = '#e37d9f'
        
    }

}