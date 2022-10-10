const keysYES = ['', '', '', '', '', '', 'СЦ', 'СВТ', '', '', 'СТ', '', '', '', '', '', '', 'СС', 'СЦ', '', 'СП', '', '', 'СЦ', '', '', '', '', 'СС', '', '', '', '', '', '', '', 'СЦ', '', 'СС', '', '', '', '', 'СВ', '', 'СС', '', '', '', 'СП', '', '', '', '', '', '', '', '', '', '', '', 'СП', '', '', '', 'СВ', 'СЦ']
const keysNO = ['СЦ', 'СП', 'СФТ', 'СЦ', 'СФТ', 'СВ', '', '', 'СВ', 'СФТ', '', 'СП', 'СВ', 'СЦ', 'СВ', 'СТ', 'СП', '', '', 'СТ', '', 'СВ', 'СС', '', 'СФТ', 'СВ', 'СТ', 'СП', '', 'СФТ', 'СТ', 'СП', 'СЦ', 'СВ', 'СТ', 'СП', '', 'СФТ', '', 'СВ', 'СЦ', 'СТ', 'СП', '', 'СП', '', 'СЦ', 'СФТ', 'СТ', '', 'СС', 'СЦ', 'СФТ', 'СВ', 'СТ', 'СП', 'СВ', 'СЦ', 'СФТ', 'СВ', 'СТ', '', 'СС', 'СЦ', 'СФТ', '', '']
let finalRes = [];

let resBlock = document.querySelector('.r-block');

function answersToArray(answers) {
	let answersArray = answers.replace(/\t/g,' ').split(' ');
	return answersArray;
}
const table = document.querySelector('.main-table');

for (let i = 0; i < 67; i++) {
	let item = document.createElement('tr');
	item.className = 'table-item'
	item.innerHTML = `
	<td class="yes">${keysYES[i]}</td>
	<td>${i+1}</td>
	<td class="no">${keysNO[i]}</td>
	`
	table.appendChild(item)
}

function checkResults(answers) {
	let tableItems = document.querySelectorAll('.table-item');
	for (let i = 0; i < answers.length; i++) {
		switch (answers[i]) {
			case 'Да':
				if (tableItems.item(i).children[0].innerHTML != '') {
					tableItems.item(i).children[0].style = "background: #51e145"
					finalRes.push(1)
				} else {
					tableItems.item(i).children[0].style = "background: #e14551"
					finalRes.push(-1)
				}
				break;
			case 'Нет':
				if (tableItems.item(i).children[2].innerHTML != '') {
					tableItems.item(i).children[2].style = "background: #51e145"
					finalRes.push(1)
				} else {
					tableItems.item(i).children[2].style = "background: #e14551"
					finalRes.push(-1)
				}
				break;
			default:
				break;
		}
	}
	console.log(finalRes)
	for (let i = 0; i < finalRes.length; i++) {
		let resP = document.createElement('p');
		resP.innerHTML = `Вопрос ${i+1} = ( <span>${finalRes[i]}</span> )`
		resBlock.appendChild(resP)
	}
}

document.querySelector('.answers-btn').addEventListener('click', (e) => {
	let textAnswers = answersToArray(document.querySelector('.answers-input').value);
	checkResults(textAnswers)
})