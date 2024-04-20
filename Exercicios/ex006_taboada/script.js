function taboada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.length==0){
        window.alert('Digite um valor para a taboada')
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} =${c*n}`
            tab.appendChild(item)
            c++
        }

    }
}