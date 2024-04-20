let colecao =[]

function adiciona(){
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let res = document.getElementById('slres')

    if (!isNaN(n) && n.toString().length >0 && colecao.indexOf(n)==-1 &&(n >0 && n<101)){
        colecao.push(n)
        let p = document.createElement('option')
        p.textContent = `Valor adicionado de ${n}`
        res.appendChild(p)
        num.value =''
    }else{
        if (colecao.indexOf(n)==-1){
            window.alert('Valor inválido')

        }else{
            window.alert(`O valor ${n} já foi adicionado na posição ${colecao.indexOf(n)+1}`)

        }
    }
}
function finaliza(){
    let res = document.getElementById('res')
    
    if (colecao.length ==0){
        window.alert('Antes de finalizar, adicione pelo menos um numero')
    }else{
        colecao.sort()
        res.innerHTML = `Sua coleção é de ${colecao}`
        let soma = colecao.reduce((total,elemento)=> total +elemento)
        res.innerHTML += `<br> Com a soma no total de : ${soma}`
        let media  =  (soma/colecao.length)
        res.innerHTML += `<br> A média dos valores é de ${media}`
        res.innerHTML += `<br> O maior valor encontrado é de ${Math.max(colecao)}`
    }
}

