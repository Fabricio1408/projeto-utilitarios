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



let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}





function atualizarPagina() {
    location.reload(true); 
  }


  setInterval(atualizarPagina, 10000);
