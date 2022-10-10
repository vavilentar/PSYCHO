const fullList = ['Азарт','Активность','Безволие','Безделушки','Безработица','Внимательность','Дилетантство','Дисциплина','Зануда','Запросы','Знания','Карьера','Квалификация','Компетентность','Кризис','Лень','Ловкость','Мастерство','Медлительность','Навык','Надежность','Наивность','Начинающий','Независимость','Неопытность','Неразборчивость','Нереализованность','Неспособность','Образованность','Обучающийся','Общение','Определившийся','Опыт','Ответственность','Ошибки','Переоценка своих возможностей','Пессимизм','Подготовка','Поддержка','Похвала','Преданность делу','Претензии','Признание','Проба','Промахи','Профессионализм','Работяга','Радость','Разноплановость','Растерянность','Самолюбие','Самостоятельность','Скука','Собранность','Совершенствование','Сравнение','Старание','Творчество','Тревога','Труд','Уважение','Уверенность','Удача','Удовлетворенность','Ум','Умение','Упорство','Усердие','Успешность','Ученичество','Хобби','Цель','Четкость','Экзамен','Энтузиазм','Эффективность'];

const profList = ['Азарт','Активность','Внимательность','Дисциплина','Знания','Карьера','Квалификация','Компетентность','Ловкость','Мастерство','Навык','Надежность','Независимость','Образованность','Определившийся','Опыт','Ответственность','Преданность делу','Признание','Профессионализм','Радость','Самостоятельность','Собранность','Совершенствование','Творчество','Труд','Уважение','Уверенность','Удача','Удовлетворенность','Ум','Умение','Упорство','Успешность','Цель','Четкость','Энтузиазм','Эффективность'];

const nonProfList = ['Безволие','Безделушки','Безработица','Дилетантство','Зануда','Запросы','Кризис','Лень','Медлительность','Наивность','Начинающий','Неопытность','Неразборчивость','Нереализованность','Неспособность','Обучающийся','Общение','Ошибки','Переоценка своих возможностей','Пессимизм','Подготовка','Поддержка','Похвала','Претензии','Проба','Промахи','Работяга','Разноплановость','Растерянность','Самолюбие','Скука','Сравнение','Старание','Тревога','Усердие','Ученичество','Хобби','Экзамен'];

let pro = 0
let notPro = 0

function compare(p, np, a) {
	for (let i = 0; i < p.length; i++) {
		for (let j = 0; j < a.length; j++) {
			if (p[i] == a[j]) {
				pro++
			} 
		}
	}
	for (let i = 0; i < np.length; i++) {
		for (let j = 0; j < a.length; j++) {
			if (np[i] == a[j]) {
				notPro++
			} 
		}
	}
}

document.querySelector('.answers-btn-2').addEventListener('click', () => {
	const answerInput = document.querySelector('.answers-input-2');
	let arrAns = answerInput.value.split(', ')
	compare(profList, nonProfList, arrAns)
	let item = document.createElement('p');
	let result = pro/notPro;
	item.innerHTML = `
	Совпадения с Проф - ( <span>${pro}</span> )<br>
	Совпадения с НеПроф - ( <span>${notPro}</span> )<br>
	Коэффициент - ( <span>${result.toFixed(2)}</span> )`;
	document.querySelector('.sec-info-block').appendChild(item)
})