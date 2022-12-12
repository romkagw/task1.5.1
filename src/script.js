const plusBtn = document.querySelector('.button-plus');
const minusBtn = document.querySelector('.button-minus');
const startBtn = document.querySelector('.button-start');
const time = document.querySelector('.time');




minusBtn.addEventListener('click', minus);
plusBtn.addEventListener('click', plus);
startBtn.addEventListener('click', start);

function minus() {
	reset();
	if (time.innerHTML != 1) time.innerHTML--;
}

function plus() {
	if (reset()) return;
	time.innerHTML++;
}

function start() {
	if (reset()) return;
	removeOrAddButtons();

	let duration = moment.duration(time.innerHTML * 1000 * 60);
	const timer = setInterval(() => {
		duration = moment.duration(duration.asMilliseconds() - 1000);
		if (time.innerHTML === '00:01') {
			clearInterval(timer);
			removeOrAddButtons();
		}

		time.innerHTML = moment(duration.asMilliseconds()).format('mm:ss');
	}, 100);
}

function removeOrAddButtons() {
	document.querySelector('h2').innerHTML = 'Осталось';
	const buttons = document.querySelectorAll('button');
	for (let i = 0; i < buttons.length; i++) {
		if (buttons[i].style.display != 'none') {
			buttons[i].style.display = 'none';
		} else{
			buttons[i].style.display = 'block';
		}
	}
}

function reset() {
	if (time.innerHTML === '00:00'){
		document.querySelector('h2').innerHTML = 'Укажите время в минутах';
		time.innerHTML = 1;
		return true;
	} 
}
