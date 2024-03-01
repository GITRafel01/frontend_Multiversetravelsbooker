const btnHamburguer = document.getElementById('icon-hamburguer');
const navigation = document.querySelector('.menu');

btnHamburguer.addEventListener('click', openHamburguer);

function openHamburguer() {
  navigation.classList.toggle('active');
  console.log('jean')
}
