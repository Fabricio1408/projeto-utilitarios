function calcular(){
    var peso, altura, resu, resultado, desc;
    peso = Number(document.getElementById('peso').value)
    altura = Number(document.getElementById('altura').value)
    resultado = document.getElementById('result')
    desc = document.getElementById('desc')

    altura = altura**2;
    resu = peso/altura;
    if (peso == 0 || altura == 0){
        window.alert('Digite a entrada corretamente')
    }else{
            if (resu <= 18.5){
                resultado.innerHTML = `Seu IMC é: <strong class="red"> ${resu.toFixed(2)}</strong>.`
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="red"> Baixo Peso </strong>.`
            }
            else if(resu > 18.5 && resu <= 24.99){
                resultado.innerHTML = `Seu IMC é: <strong class="green"> ${resu.toFixed(2)}</strong>.`
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="green"> Peso Ideal </strong><i class="fa-regular fa-face-smile"></i>.`

            }
            else if(resu >= 25 && resu <= 29.99){
                resultado.innerHTML = `Seu IMC é: <strong class="red"> ${resu.toFixed(2)}</strong>.`
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="red"> Sobre Peso </strong>.`

            }
            else{
                resultado.innerHTML = `Seu IMC é: <strong class="red"> ${resu.toFixed(2)}</strong>.`
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="red"> Obesidade </strong>.`

            }
    }


}
