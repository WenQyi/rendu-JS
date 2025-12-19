const button = document.getElementById('light')
const light = document.body // lier le 'light' au css

button.addEventListener('click', function(){
    light.classList.toggle('light')
})