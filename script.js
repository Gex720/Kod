alert('No cześć');

function wyswAlert() {
    alert('Dzień dobry <3');
}

var but10 = document.getElementById('but1');
but10.addEventListener('click', wyswAlert);
but10.addEventListener('mouseover', function() {
    but10.textContent = 'Inny przycisk';
});

var but11 = document.querySelector('#but2');
but11.addEventListener('click', function() {
    document.getElementById('div1').innerHTML = 'Jakiś tekst'
});

var but12 = document.querySelector('#but3')
but12.addEventListener('click', function() {
    console.log('Jestem w konsoli')
});