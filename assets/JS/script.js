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
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="orange"> Sobre Peso </strong> <i class="fa-regular fa-face-surprise"></i>.`

            }
            else{
                resultado.innerHTML = `Seu IMC é: <strong class="red"> ${resu.toFixed(2)}</strong>.`
                desc.innerHTML = `Sua classificação IMC mostra que você está em <strong class="red"> Obesidade </strong> <i class="fa-regular fa-face-sad-tear"></i>.`

            }
    }


}

function calcularRegraDeTres() {
    const valor1 = parseFloat(document.getElementById("valor1").value);
    const valor2 = parseFloat(document.getElementById("valor2").value);
    const valor3 = parseFloat(document.getElementById("valor3").value);
    const resultado = parseFloat(document.getElementById("resultado").value);

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(resultado)) {
        document.getElementById("resultadoCalculo").innerText = "insira u valor numérico.";
        return;
    }

    const resultadoCalculado = (valor3 * valor2) / valor1;

    if (valor1 === 0 || resultadoCalculado === 0) {
        document.getElementById("resultadoCalculo").innerText = "Não é possível calcular a regra de três com esses valores.";
        return;
    }

    const proporcao = resultado / resultadoCalculado;

    document.getElementById("resultadoCalculo").innerText = `Para obter ${resultado} com base em ${valor1}, ${valor2} e ${valor3}, a proporção é aproximadamente ${proporcao.toFixed(2)}.`;
}

