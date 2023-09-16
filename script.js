function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    if (fano.value == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verrifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src','./assets/foto-crianca-m.jpg')
            } else if (idade < 20) {
                img.setAttribute('src' , './assets/foto-jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src' , './assets/foto-adulto-m.jpg')
            } else if (idade >= 50 && idade < 100) {
                img.setAttribute('src' , './assets/foto-idoso-m.jpg')
            } else if (idade >= 100){
                img.setAttribute('src' , './assets/morte.jpg')
                res2.innerHTML += '<br> Fico impressionado disso ainda estar vivo <br>'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src','./assets/foto-crianca-f.jpg')
            } else if (idade < 20) {
                img.setAttribute('src' , './assets/foto-jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src' , './assets/foto-adulto-f.jpg')
            } else if (idade >= 50 && idade < 100) {
                img.setAttribute('src' , './assets/foto-idoso-f.jpg')
            } else if (idade >= 100){
                img.setAttribute('src' , './assets/morte.jpg')
                res2.innerHTML += '<br> Fico impressionado disso ainda estar vivo <br>'
            }
        }
        res.style.textAlign = 'center'
        res2.style.textAlign = 'center'
        res.innerHTML = `<br> Detectamos ${genero} com ${idade} anos de idade <br>`
        res.appendChild(img)
    }
}