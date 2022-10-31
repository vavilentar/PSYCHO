const keysYES = ['', '', '', '', '', '', 'СЦ', 'СВТ', '', '', 'СТ', '', '', '', '', '', '', 'СС', 'СЦ', '', 'СП', '', '', 'СЦ', '', '', '', '', 'СС', '', '', '', '', '', '', '', 'СЦ', '', 'СС', '', '', '', '', 'СВ', '', 'СС', '', '', '', 'СП', '', '', '', '', '', '', '', '', '', '', '', 'СП', '', '', '', 'СВ', 'СЦ']
const keysNO = ['СЦ', 'СП', 'СФТ', 'СЦ', 'СФТ', 'СВ', '', '', 'СВ', 'СФТ', '', 'СП', 'СВ', 'СЦ', 'СВ', 'СТ', 'СП', '', '', 'СТ', '', 'СВ', 'СС', '', 'СФТ', 'СВ', 'СТ', 'СП', '', 'СФТ', 'СТ', 'СП', 'СЦ', 'СВ', 'СТ', 'СП', '', 'СФТ', '', 'СВ', 'СЦ', 'СТ', 'СП', '', 'СП', '', 'СЦ', 'СФТ', 'СТ', '', 'СС', 'СЦ', 'СФТ', 'СВ', 'СТ', 'СП', 'СВ', 'СЦ', 'СФТ', 'СВ', 'СТ', '', 'СС', 'СЦ', 'СФТ', '', '']
let finalRes = [];

let resBlock = document.querySelector('.r-block');

function answersToArray(answers) {
	let answersArray = answers.replace(/\t/g, ' ').split(' ');
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
let newResults = [];

function checkResults(answers) {
	for (let i = 0; i < answers.length; i++) {
		switch (answers[i]) {
			case 'Да':
				newResults.push(1)
				break;
			case 'Нет':
				newResults.push(-1)
				break;
		}
	}
	newResults.unshift(' ')
	let tableItems = document.querySelectorAll('.table-item');
	for (let i = 0; i < newResults.length; i++) {
		switch (newResults[i]) {
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
	e.preventDefault()
	let textAnswers = answersToArray(document.querySelector('.answers-input').value);
	checkResults(textAnswers)

	let testResults = document.createElement('div');
	testResults.innerHTML = `
	<h2>Результаты второго метода</h2>
	Результат СПП - ( <span>${СПП(newResults)}</span> )<br>
	Результат СТ - ( <span>${СТ(newResults)}</span> )<br>
	Результат СФТ - ( <span>${СФТ(newResults)}</span> )<br>
	Результат СВ - ( <span>${СВ(newResults)}</span> )<br>
	Результат СП - ( <span>${СП(newResults)}</span> )<br>
	Результат СС - ( <span>${СС(newResults)}</span> )<br>
	Результат СЦ - ( <span>${СЦ(newResults)}</span> )<br>
	`
	document.querySelector('.sec-info-block').appendChild(testResults)
})

function СВ(a) {
	// СВ=B44-B6-B9-B13-B15-B22-B26-B34-B40-B54-B57-B60+B6
	// СВ=B44-B6-B9-B13-B15-B22-B26-B34-B40-B54-B57-B60+B66
	// let answer = a[43]-a[5]-a[8]-a[12]-a[14]-a[21]-a[25]-a[33]-a[39]-a[53]-a[56]-a[59]+a[65]
	let answer = a[44] - a[6] - a[9] - a[13] - a[15] - a[22] - a[26] - a[34] - a[40] - a[54] - a[57] - a[60] + a[66]
	return answer
}

function СЦ(a) {
	// СЦ=B7-B4-B1-B14+B19+B24-B33+B37-B41-B47-B52-B58-B64+B67
	// let answer = a[6]-a[3]-a[0]-a[13]+a[18]+a[23]-a[32]+a[36]-a[40]-a[46]-a[51]-a[57]-a[63]+a[66]
	let answer = a[7] - a[4] - a[1] - a[14] + a[19] + a[24] - a[33] + a[37] - a[41] - a[47] - a[52] - a[58] - a[64] + a[67]

	return answer
}

function СС(a) {
	// СС=B18-B23+B29+B39+B46-B51-B63
	// let answer = a[17]-a[22]+a[28]+a[38]+a[45]-a[50]-a[62]
	let answer = a[18] - a[23] + a[29] + a[39] + a[46] - a[51] - a[63]

	return answer
}

function СП(a) {
	// СП=B21-B2-B17-B12-B28-B32-B36-B43-B45+B50-B56+B62
	// let answer = a[20]-a[1]-a[16]-a[11]-a[27]-a[31]-a[35]-a[42]-a[44]+a[49]-a[55]+a[61]
	let answer = a[21] - a[2] - a[17] - a[12] - a[28] - a[32] - a[36] - a[43] - a[45] + a[50] - a[56] + a[62]

	return answer
}

function СТ(a) {
	// СТ=B8-B3-B5-B10-B25-B30-B38-B48-B53-B59-B65
	// let answer = a[7]-a[2]-a[4]-a[9]-a[24]-a[29]-a[37]-a[47]-a[52]-a[58]-a[64]
	let answer = a[8] - a[3] - a[5] - a[10] - a[25] - a[30] - a[38] - a[48] - a[53] - a[59] - a[65]

	return answer
}

function СФТ(a) {
	// СТ=B11-B16-B20-B27-B31-B35-B42-B49-B55-B61
	// let answer = a[10]-a[15]-a[19]-a[26]-a[30]-a[34]-a[41]-a[48]-a[54]-a[60]
	let answer = a[11] - a[16] - a[20] - a[27] - a[31] - a[35] - a[42] - a[49] - a[55] - a[61]

	return answer
}

function СПП(a) {
	// СПП=B7+B8+B11+B18+B19+B21+B24+B29+B37+B39+B44+B46+B50+B62+B66+B67-B1-B2-B3-B4-B5-B6-B9-B10-B12-B13-B14-B15-B16-B17-B20-B22-B23-B25-B26-B27-B28-B30-B31-B32-B33-B34-B35-B36-B38-B40-B41-B42-B43-B45-B47-B48-B49-B51-B52-B53-B54-B55-B56-B57-B58-B59-B60-B61-B63-B64-B65
	// let answer = a[6]+a[7]+a[10]+a[17]+a[18]+a[20]+a[23]+a[28]+a[38]+a[43]+a[45]+a[49]+a[61]+a[65]+a[66]-a[0]-a[1]-a[2]-a[3]-a[4]-a[5]-a[8]-a[9]-a[11]-a[12]-a[13]-a[14]-a[15]-a[16]-a[19]-a[19]-a[21]-a[22]-a[24]-a[25]-a[26]-a[27]-a[29]-a[1]
	let answer = a[7] + a[8] + a[11] + a[18] + a[19] + a[21] + a[24] + a[29] + a[37] + a[39] + a[44] + a[46] + a[50] + a[62] + a[66] + a[67] - a[1] - a[2] - a[3] - a[4] - a[5] - a[6] - a[9] - a[10] - a[12] - a[13] - a[14] - a[15] - a[16] - a[17] - a[20] - a[22] - a[23] - a[25] - a[26] - a[27] - a[28] - a[30] - a[31] - a[32] - a[33] - a[34] - a[35] - a[36] - a[38] - a[40] - a[41] - a[42] - a[43] - a[45] - a[47] - a[48] - a[49] - a[51] - a[52] - a[53] - a[54] - a[55] - a[56] - a[57] - a[58] - a[59] - a[60] - a[61] - a[63] - a[64] - a[65]
	return answer
}