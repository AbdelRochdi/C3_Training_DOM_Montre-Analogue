// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector('#hour');
const AIGUILLEMIN = document.querySelector('#minute');
const AIGUILLESEC = document.querySelector('#second');

//Extraire l'heure actuel à l'aide de l'objet Date()

// let actualDate = new Date();
// console.log(actualDate);

// //Ajouter l'heure , minite , seconde  dans des varaiables
// let hours = actualDate.getHours();

// let minutes = actualDate.getMinutes();
// let seconds = actualDate.getSeconds();
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

// // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

// let hoursAngle = hours * 30;
// let minutesAngle = minutes * 6;
// let secondsAngle = seconds * 6;
setInterval(demarrerLaMontre, 1000);
// Déplacer les aiguilles
function demarrerLaMontre() {
	let actualDate = new Date();
	let seconds = actualDate.getSeconds() / 60;
	let minutes = (actualDate.getMinutes() + seconds) / 60;
	let hours = (actualDate.getHours() + minutes) / 12;

	AIGUILLESEC.style.transform = `rotate(${seconds * 360}deg)`;
	AIGUILLEMIN.style.transform = `rotate(${minutes * 360}deg)`;
	AIGUILLEHR.style.transform = `rotate(${hours * 360}deg)`;
}
// Exercuter la fonction chaque second

demarrerLaMontre();
