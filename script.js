const aiguilleHeures = document.querySelector('#hour');
const aiguilleMinutes = document.querySelector('#minute');
const aiguilleSeconds = document.querySelector('#second');

function moveClock() {
	let now = new Date();
	console.log(now);

	let seconds = now.getSeconds();
	let minutes = now.getMinutes();
	let hours = now.getHours();

	let angleSeconds = seconds * 6;
	let angleMinutes = minutes * 6;
	let angleHours = hours * 30;

	console.log(angleSeconds);

	aiguilleSeconds.style.transform = `rotate(${angleSeconds}deg)`;
	aiguilleMinutes.style.transform = `rotate(${angleMinutes + angleSeconds/60}deg)`;
	aiguilleHeures.style.transform = `rotate(${angleHours + angleMinutes/60}deg)`;
	
}

moveClock();
setInterval(moveClock, 1000);

