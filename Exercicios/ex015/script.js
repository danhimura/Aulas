function verificar(){
    var data =  new Date()
    var ano  = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res  = document.querySelector('div#res')

    if (fano.value.length ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'

            if (idade < 10){
                //criança
                img.setAttribute('src','menino.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem.jpg')

            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src','homem.jpg')
            }else{
                //velho
                img.setAttribute('src','velho.jpg')
            }
        }else{
            genero = 'Mulher'
            
            if (idade < 10){
                //criança
                img.setAttribute('src','menina.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','garota.jpg')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src','mulher.jpg')
            }else{
                //velho 
                img.setAttribute('src','velha.jpg')
            }
        }
        
        res.innerHTML = `Detectado um ${genero} de  ${idade} anos! `
        
        
         img.setAttribute('width','200')
         img.setAttribute('heigth','200')

        res.appendChild(img)

    }
}