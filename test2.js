function answersToArray(answers) {
	let answersArray = answers.split(' ');
	for (i = 0; i < answersArray.length; i++) {
		if (answersArray[i] == 'Да') {
			answersArray[i] = -1
			console.log(`Вопрос ${i+1} - ${answersArray[i]} - Да`)
		} else {
			answersArray[i] = 1
			console.log(`Вопрос ${i+1} - ${answersArray[i]} - Нет`)
		}
	}
	console.log(`Количество ответов: ${answersArray.length}`)
	return answersArray
}

const textAnswers = 'Нет Нет Да Нет Да Нет Да Да Нет Нет Да Да Нет Нет Нет Нет Нет Да Да Нет Да Да Нет Да Нет Нет Нет Нет Нет Да Да Нет Нет Нет Да Нет Да Да Да Нет Да Нет Нет Да Нет Да Нет Нет Нет Нет Нет Нет Нет Нет Нет Нет Да Нет Нет Нет Нет Да Да Нет Нет Да Да'

// console.log(answersToArray(textAnswers))

let arr = answersToArray(textAnswers)
console.log(arr)


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



console.log(`Результат СЦ - ${СЦ(arr)}`)
console.log(`Результат СС - ${СС(arr)}`)
console.log(`Результат СП - ${СП(arr)}`)
console.log(`Результат СВ - ${СВ(arr)}`)
