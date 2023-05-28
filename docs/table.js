var TicketsStatic = [
    {
        id: 0,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 7),
        author: 'Шатерник Артём',
        route: {
            start: 'Минск',
            finish: 'Гомель'
        },
        date: '2023-06-05',
        time: '11:22'
    },
    {
        id: 1,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 23),
        author: 'Алексеев Роман',
        route: {
            start: 'Гродно',
            finish: 'Брест'
        },
        date: '2023-06-11',
        time: '09:56'
    },
    {
        id: 2,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 15),
        author: 'Шатерник Артём',
        route: {
            start: 'Витебск',
            finish: 'Могилев'
        },
        date: '2023-06-18',
        time: '14:30'
    },
    {
        id: 3,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 12),
        author: 'Алексеев Роман',
        route: {
            start: 'Брест',
            finish: 'Витебск'
        },
		date: '2023-05-13',
        time: '10:15'
    },
    {
        id: 4,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 19),
        author: 'Шатерник Артём',
        route: {
            start: 'Минск',
            finish: 'Слоним'
        },
        date: '2023-06-13',
        time: '13:22'
    },
    {
        id: 5,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 9),
        author: 'Алексеев Роман',
        route: {
            start: 'Слоним',
            finish: 'Брест'
        },
        date: '2023-06-01',
        time: '08:54'
    },
    {
        id: 6,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 2),
        author: 'Шатерник Артём',
        route: {
            start: 'Полоцк',
            finish: 'Могилев'
        },
        date: '2023-06-14',
        time: '13:29'
    },
    {
        id: 7,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 23),
        author: 'Алексеев Роман',
        route: {
            start: 'Туров',
            finish: 'Держинск'
        },
		date: '2023-05-14',
		time: '14:21'
    },
	    {
        id: 8,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 17),
        author: 'Шатерник Артём',
        route: {
            start: 'Несвиж',
            finish: 'Минск'
        },
        date: '2023-06-16',
        time: '03:11'
    },
    {
        id: 9,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 19),
        author: 'Алексеев Роман',
        route: {
            start: 'Мир',
            finish: 'Гомель'
        },
        date: '2023-06-19',
        time: '18:17'
    },
    {
        id: 10,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 24),
        author: 'Шатерник Артём',
        route: {
            start: 'Солигорск',
            finish: 'Полоцк'
        },
        date: '2023-06-10',
        time: '20:42'
    },
    {
        id: 11,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 7),
        author: 'Алексеев Роман',
        route: {
            start: 'Брест',
            finish: 'Слуцк'
        },
        date: '2023-06-07',
        time: '06:13'
    },
	   {
        id: 12,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 13),
        author: 'Шатерник Артём',
        route: {
            start: 'Любань',
            finish: 'Микашевичи'
        },
		date: '2023-05-12',
        time: '05:02'
    },
    {
        id: 13,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 28),
        author: 'Алексеев Роман',
        route: {
            start: 'Барановичи',
            finish: 'Житковичи'
        },
		date: '2023-05-28',
        time: '15:47'
    },
    {
        id: 14,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 2),
        author: 'Шатерник Артём',
        route: {
            start: 'Липецк',
            finish: 'Туров'
        },
		date: '2023-05-14',
        time: '05:31'
    },
    {
        id: 15,
        description: 'Описание возможного билета',
        createdAt: new Date(2023, 5, 6),
        author: 'Алексеев Роман',
        route: {
            start: 'Мядель',
            finish: 'Орша'
        },
		date: '2023-05-12',
        time: '11:05'
    }
]

class TicketsClass {
	constructor(Objs) {
		this.Objs = Objs
	}
	_formObject() {
		
	}
	_isEqual(object1, object2) {
		const props1 = Object.getOwnPropertyNames(object1)
		const props2 = Object.getOwnPropertyNames(object2)
		if (props1.length != props2.length) {
			return false
		}
		 for (let i = 0; i < props1.length; i += 1) {
			const prop = props1[i]
			const bothAreObjects = typeof(object1[prop]) === 'object' && typeof(object2[prop]) === 'object'
			if ((!bothAreObjects && (object1[prop] !== object2[prop]))
			|| (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
				return false
			}
		}
			return true
	}
	_filterObjects(keys, object, filterVal) {
			var result
			for (var i = 0; i < keys.length; i++) {
				var key = keys[i]
				if (typeof(object[key]) === 'object') {
					result = (this._filterObjects(Object.keys(filterVal[key]), object[key], filterVal[key]))
					if (!result) {
						return false
					}
				} else if (!(object[key].toLowerCase() === filterVal[key].toLowerCase())) {
					return false
				}
			}
		return true
	}
	showObjs(id = -1) {
		if (id != -1 && id >= 0 && id < this.Objs.length) {
			console.log(this.Objs[id])
		} else {
			console.log(this.Objs)
		}
	}
	getObjs(skip = 0, top = this.Objs.length, filterVal = {} ) {
		if (top > this.Objs.length) {
			top = this.Objs.length
		}
		var temp = []
		var temp2 = []
		for (var i = 0; i < top; i++) { 
			temp.push(this.Objs[skip + i])
		}
		var keys = Object.keys(filterVal)
		temp.forEach(object => {
			if (this._filterObjects(keys, object, filterVal)) {
				temp2.push(object)
			}
		})
		return temp2
	}
	getObj(id) {
		return this.Objs[id]
	}
	validateObj(obj) {
		var keyProperties = ['id', 'description', 'createdAt', 'author']
		return keyProperties.every(property => property in obj)
	}
	addObj(obj) {
		if (this.validateObj(obj)) {
			this.Objs.push(obj)
			return true
		} else {
			return false
		}
	}
	editObj(id, newValues) {
		var restrictions = ['id', 'author', 'createdAt']
		if (!(restrictions.includes(Object.keys(newValues)[0]))) {
			var findObject = this.Objs.find(obj => obj.id === id)
			if (findObject) {
				Object.assign(findObject, newValues);
			}
			return true
		} else {
			return false
		}
	}
	removeObj(id) {
		if (this.Objs = this.Objs.filter(obj => obj.id !== id)) {
			return true
		} else {
			return false
		}
	}
	makeMap() {
		var collection = new Map()
		for(var obj of this.Objs) {
			collection.set(obj.id, obj)
		}
		return collection
	}
}
function formFilterObject(startVal, finishVal, dateVal, timeVal) {
	var obj = {}
	if (startVal != "") {
		obj['route'] = {}
		obj['route']['start'] = startVal
	}
	if (finishVal != "") {
		if ('route' in obj) {
			obj['route']['finish'] = finishVal
		} else {
			obj['route'] = {}
			obj['route']['finish'] = finishVal
		}
	}
	if (dateVal != "") {
		obj['date'] = dateVal
	}
	if (timeVal != "") {
		obj['time'] = timeVal
	}
	return obj
}
function changeTableOnClick(event) {
	event.preventDefault()
	const inputElements = document.querySelectorAll('.search_block_input_place input');
	const inputValues = Array.from(inputElements).map(input => input.value);
	mainArray = new TicketsClass(TicketsStatic)
	var filter = formFilterObject(inputValues[0], inputValues[1], inputValues[2], inputValues[3])
	filtredArray = mainArray.getObjs(0, mainArray.Objs.length, filter)
	localStorage.setItem('savedTicketArray', JSON.stringify(filtredArray))
	formAndPlaceTable(filtredArray)
}
var tableExistsFlag = 0
function formAndPlaceTable(arrayName) {
	var container = document.querySelector(".table_block");
	var table = document.createElement("table");
	var thead = document.createElement("thead");
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.textContent = "Пункт отправления";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Пункт прибытия";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Дата";
	tr.appendChild(th);
	th = document.createElement("th");
	th.textContent = "Время";
	tr.appendChild(th);
	thead.appendChild(tr);
	table.appendChild(thead);

	var tbody = document.createElement("tbody");
	for (var i = 0; i < arrayName.length; i++) {
	  var trip = arrayName[i];
	  tr = document.createElement("tr");
	  var td = document.createElement("td");
	  td.textContent = trip.route.start;
	  tr.appendChild(td);
	  td = document.createElement("td");
	  td.textContent = trip.route.finish;
	  tr.appendChild(td);
	  td = document.createElement("td");
	  var dateString = trip.date
	  td.textContent = dateString;
	  tr.appendChild(td);
	  td = document.createElement("td");
	  var timeString = trip.time
	  td.textContent = timeString
	  tr.appendChild(td);
	  tbody.appendChild(tr);
	}
	table.appendChild(tbody);
	if (tableExistsFlag === 0) {
		container.appendChild(table);
		tableExistsFlag = 1
	} else {
		var tableBlock = document.querySelector('.table_block');
		var oldTable = tableBlock.querySelector('table');
		tableBlock.replaceChild(table, oldTable);
	}
}
if (localStorage.getItem('savedTicketArray') === null) {
	formAndPlaceTable(TicketsStatic)
} else {
	formAndPlaceTable(JSON.parse(localStorage.getItem('savedTicketArray')))
}
// Кнопка Найти
const buttonElement = document.querySelector('.button-wrapper button');
buttonElement.addEventListener('click', changeTableOnClick);