function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res   = document.getElementById('res')
    res.innerHTML =''

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert('[ERRO] faltam dados')
        res.innerHTML = 'Impossivel contar!'
    }else{
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if ( p <= 0){
            p = 1
            res.innerHTML = '<strong> (Passo Inválido, considerando passo 1) </strong>'
        }

        // faz a contagem para progressiva
        if (f > i ){
            res.innerHTML += 'Contagem progressiva: '
            for (let c = i; c <= f; c+= p ){
                res.innerHTML += ` ${c} \u{1F449} `
             }
        
        }else{
            // faz a contagem regressiva
            res.innerHTML += 'Contagem regressiva: '
            for( let c = i; c >=f ; c-= p){

                res.innerHTML+=` ${c} \u{1f449}`
            }
            
        }
        res.innerHTML +=` \u{1F3C1}`
    }

}