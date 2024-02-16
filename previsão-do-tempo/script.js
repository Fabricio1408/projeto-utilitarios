const apiKey = 'NOP'; //key api removida
const cidadeInput = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const content = document.querySelector('.content');
const place = document.getElementById('place');
const degress = document.getElementById('degress');
const wind = document.getElementById('wind');
const img = document.querySelector('img');

button.addEventListener('click', () => {
    const cidade = cidadeInput.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            if (data.main && data.main.temp && data.wind) {
                place.textContent = data.name;
                degress.textContent = `${Math.round(data.main.temp)}°C`;
                wind.textContent = `Wind: ${data.wind.speed} m/s`;
                img.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
                alert('Cidade inválida😞')
            }
        })
       
});