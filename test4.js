const methods = ['Р','И','А','С','П','К']
let activity = [];
let abilities = [];
let careers = [];

function sliceIntoChunks(arr, chunkSize) {
	const res = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(i, i + chunkSize);
		res.push(chunk);
	}
	return res;
}
function answersToArray(answers) {
	let answersArray = answers.replace(/\t/g, ' ').split(' ');
	for (let i = 0; i < answersArray.length; i++) {
		switch (answersArray[i]) {
			case 'Да':
				answersArray[i] = 1;
				break;
			case 'Нет':
				answersArray[i] = 0;
				break;
		}
	}
	return answersArray;
}

document.querySelector('.answers-btn-3').addEventListener('click', () => {
	let input = document.querySelector('.answers-input-3');
	let array = input.value
	array = array.replace(/\t/g,' ').split(' ');
	for (let i = 0; i < array.length; i++) {
		switch (array[i]) {
			case 'Да':
				array[i] = 1;
				break;
			case 'Нет':
				array[i] = 0;
				break;
		}
	}
	array = sliceIntoChunks(array, 11);
	for (let i = 0; i < array.length; i++) {
		let sumBlock = document.createElement('div');
		sumBlock.innerHTML = '<h4>Деятельности</h4> <br>'
		for (let k = 0; k < array[i].length; k++) {
			let sum = array[k].reduce((a, b) => a + b, 0)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})

document.querySelector('.answers-btn-4').addEventListener('click', () => {
	let input = document.querySelector('.answers-input-4');
	let array = input.value
	array = array.replace(/\t/g,' ').split(' ');
	for (let i = 0; i < array.length; i++) {
		switch (array[i]) {
			case 'Да':
				array[i] = 1;
				break;
			case 'Нет':
				array[i] = 0;
				break;
		}
	}
	array = sliceIntoChunks(array, 11);
	for (let i = 0; i < array.length; i++) {
		let sumBlock = document.createElement('div');
		sumBlock.innerHTML = '<h4>Способности</h4> <br>'
		for (let k = 0; k < array[i].length; k++) {
			let sum = array[k].reduce((a, b) => a + b, 0)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})

document.querySelector('.answers-btn-5').addEventListener('click', () => {
	let input = document.querySelector('.answers-input-5');
	let array = input.value
	array = array.replace(/\t/g,' ').split(' ');
	for (let i = 0; i < array.length; i++) {
		switch (array[i]) {
			case 'Да':
				array[i] = 1;
				break;
			case 'Нет':
				array[i] = 0;
				break;
		}
	}
	array = sliceIntoChunks(array, 14);
	for (let i = 0; i < array.length; i++) {
		let sumBlock = document.createElement('div');
		sumBlock.innerHTML = '<h4>Карьеры</h4> <br>'
		for (let k = 0; k < array[i].length; k++) {
			let sum = array[k].reduce((a, b) => a + b, 0)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})