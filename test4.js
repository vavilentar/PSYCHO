const methods = ['Р', 'И', 'А', 'С', 'П', 'К']
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
	array = array.replace(/\t/g, ' ').split(' ');
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
		for (let k = 0; k < array[k].length; k++) {
			let sum = array[k].reduce((a, b) => a + b, 0)
			activity.push(sum)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})

document.querySelector('.answers-btn-4').addEventListener('click', () => {
	let input = document.querySelector('.answers-input-4');
	let array = input.value
	array = array.replace(/\t/g, ' ').split(' ');
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
			abilities.push(sum)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})

document.querySelector('.answers-btn-5').addEventListener('click', () => {
	let input = document.querySelector('.answers-input-5');
	let array = input.value
	array = array.replace(/\t/g, ' ').split(' ');
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
			careers.push(sum)
			sumBlock.innerHTML += (`<p><span>${methods[k]}</span> - ${sum}</p>`)
			document.querySelector('.sec-info-block').appendChild(sumBlock)
		}
	}
})

document.querySelector('.summ').addEventListener('click', () => {

	let sumObj = {
		'Р': activity[0] + abilities[0] + careers[0],
		'И': activity[1] + abilities[1] + careers[1],
		'А': activity[2] + abilities[2] + careers[2],
		'С': activity[3] + abilities[3] + careers[3],
		'П': activity[4] + abilities[4] + careers[4],
		'К': activity[5] + abilities[5] + careers[5],
	}

	let sortable = [];
	for (let item in sumObj) {
		sortable.push([item, sumObj[item]]);
	}

	sortable.sort(function (a, b) {
		return a[1] - b[1];
	});

	let sumArray = [];
	let sumNums = 0;
	for (let i = 0; i < 6; i++) {
		sumNums = activity[i] + abilities[i] + careers[i];
		sumArray.push(sumNums)
		sumNums = 0;
	}
	let sumBlock = document.createElement('div');
	sumBlock.innerHTML = '<h4>Сумма (Сортированная)</h4> <br>'
	for (let i = 0; i < sumArray.length; i++) {
		// sumBlock.innerHTML += (`<p><span>${methods[i]}</span> - ${sumArray[i]}</p>`)
		sumBlock.innerHTML += (`<p><span>${sortable[i][0]}</span> - ${sortable[i][1]}</p>`)
		document.querySelector('.sec-info-block').appendChild(sumBlock)
	}
	return sortable;
})