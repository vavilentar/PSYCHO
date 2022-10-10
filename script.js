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

	let testResults = document.createElement('div');
	testResults.innerHTML = `
	Результат СЦ - ( <span>${СЦ(finalRes)}</span> )<br>
	Результат СС - ( <span>${СС(finalRes)}</span> )<br>
	Результат СП - ( <span>${СП(finalRes)}</span> )<br>
	Результат СВ - ( <span>${СВ(finalRes)}</span> )
	`
	document.querySelector('.sec-info-block').appendChild(testResults)
})

function СВ(a) {
	// СВ=B44-B6-B9-B13-B15-B22-B26-B34-B40-B54-B57-B60+B6
let answer = a[43]-a[5]-a[8]-a[12]-a[14]-a[21]-a[25]-a[33]-a[39]-a[53]-a[56]-a[59]+a[5]
return answer
}

function СЦ(a) {
// СЦ=B7-B4-B1-B14+B19+B24-B33+B37-B41-B47-B52-B58-B64+B67
let answer = a[6]-a[3]-a[0]-a[13]+a[18]+a[23]-a[32]+a[36]-a[40]-a[46]-a[51]-a[57]-a[63]+a[66]
return answer
}
function СС(a) {
		// СС=B18-B23+B29+B39+B46-B51-B63
let answer = a[17]-a[22]+a[28]+a[38]+a[45]-a[50]-a[62]
return answer
}
function СП(a) {
		// СП=B21-B2-B17-B12-B28-B32-B36-B43-B45+B50-B56+B62
let answer = a[20]-a[1]-a[16]-a[11]-a[27]-a[31]-a[35]-a[42]-a[44]+a[49]-a[55]+a[61]
return answer
}



