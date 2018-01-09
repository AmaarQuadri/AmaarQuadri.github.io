var value = function(object) {
	var x = 0;
	var string = object.firstName + spaceify(object.middleName) + " " + object.lastName + spaceify(bracketify(object.nickname));
	for (i = 0; i < string.length; i++) {
		switch (string[i]) {
			case "A":
			x += 1*Math.pow(10, -2*i)
			break;
			case "a":
			x += 2*Math.pow(10, -2*i)
			break;
			case "B":
			x += 3*Math.pow(10, -2*i)
			break;
			case "b":
			x += 4*Math.pow(10, -2*i)
			break;
			case "C":
			x += 5*Math.pow(10, -2*i)
			break;
			case "c":
			x += 6*Math.pow(10, -2*i)
			break;
			case "D":
			x += 7*Math.pow(10, -2*i)
			break;
			case "d":
			x += 8*Math.pow(10, -2*i)
			break;
			case "E":
			x += 9*Math.pow(10, -2*i)
			break;
			case "e":
			x += 10*Math.pow(10, -2*i)
			break;
			case "F":
			x += 11*Math.pow(10, -2*i)
			break;
			case "f":
			x += 12*Math.pow(10, -2*i)
			break;
			case "G":
			x += 13*Math.pow(10, -2*i)
			break;
			case "g":
			x += 14*Math.pow(10, -2*i)
			break;
			case "H":
			x += 15*Math.pow(10, -2*i)
			break;
			case "h":
			x += 16*Math.pow(10, -2*i)
			break;
			case "I":
			x += 17*Math.pow(10, -2*i)
			break;
			case "i":
			x += 18*Math.pow(10, -2*i)
			break;
			case "J":
			x += 19*Math.pow(10, -2*i)
			break;
			case "j":
			x += 20*Math.pow(10, -2*i)
			break;
			case "K":
			x += 21*Math.pow(10, -2*i)
			break;
			case "k":
			x += 22*Math.pow(10, -2*i)
			break;
			case "L":
			x += 23*Math.pow(10, -2*i)
			break;
			case "l":
			x += 24*Math.pow(10, -2*i)
			break;
			case "M":
			x += 25*Math.pow(10, -2*i)
			break;
			case "m":
			x += 26*Math.pow(10, -2*i)
			break;
			case "N":
			x += 27*Math.pow(10, -2*i)
			break;
			case "n":
			x += 28*Math.pow(10, -2*i)
			break;
			case "O":
			x += 29*Math.pow(10, -2*i)
			break;
			case "o":
			x += 30*Math.pow(10, -2*i)
			break;
			case "P":
			x += 31*Math.pow(10, -2*i)
			break;
			case "p":
			x += 32*Math.pow(10, -2*i)
			break;
			case "Q":
			x += 33*Math.pow(10, -2*i)
			break;
			case "q":
			x += 34*Math.pow(10, -2*i)
			break;
			case "R":
			x += 35*Math.pow(10, -2*i)
			break;
			case "r":
			x += 36*Math.pow(10, -2*i)
			break;
			case "S":
			x += 37*Math.pow(10, -2*i)
			break;
			case "s":
			x += 38*Math.pow(10, -2*i)
			break;
			case "T":
			x += 39*Math.pow(10, -2*i)
			break;
			case "t":
			x += 40*Math.pow(10, -2*i)
			break;
			case "U":
			x += 41*Math.pow(10, -2*i)
			break;
			case "u":
			x += 42*Math.pow(10, -2*i)
			break;
			case "V":
			x += 43*Math.pow(10, -2*i)
			break;
			case "v":
			x += 44*Math.pow(10, -2*i)
			break;
			case "W":
			x += 45*Math.pow(10, -2*i)
			break;
			case "w":
			x += 46*Math.pow(10, -2*i)
			break;
			case "X":
			x += 47*Math.pow(10, -2*i)
			break;
			case "x":
			x += 48*Math.pow(10, -2*i)
			break;
			case "Y":
			x += 49*Math.pow(10, -2*i)
			break;
			case "y":
			x += 50*Math.pow(10, -2*i)
			break;
			case "Z":
			x += 51*Math.pow(10, -2*i)
			break;
			case "z":
			x += 52*Math.pow(10, -2*i)
			//no need for default because i increases either way, non-letters will be given value of 00
		}
	};
	return x 
};
var add = function(firstName, middleName, lastName, gender, nickname, age, email, phoneNumber, month, day, year) {
	var object = {
		firstName: firstName,
		middleName: middleName,
		lastName: lastName,
		gender: gender,
		nickname: nickname,
		age: age,
		email: email,
		phoneNumber: phoneNumber,
		month: month,
		day: day,
		year: year
	};
	var valObj = value(object);
	var count = 0;
	for (i = 0; i <= array.length; i++) {
		if (value(array[i]) <= valObj) {
			count++
		}
	};
	//count is the number of objects in the array that have a smaller value (earlier in alphabetical order) than the new object
	array.splice(count, 0, object)
};
var search = function(category, generalCriterea, genderCriterea, ageCriterea, monthCriterea, dayCriterea, yearCriterea) {
	//alphabetical order, highlight matched area
	var found = false;
	$searchConsole = $(".searchConsole");
	switch(category) {
		case "Everywhere":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].firstName.toLowerCase() || generalCriterea.toLowerCase() === array[i].middleName.toLowerCase() || generalCriterea.toLowerCase() === array[i].lastName.toLowerCase() || generalCriterea.toLowerCase() === array[i].gender.toLowerCase() || generalCriterea.toLowerCase() === array[i].nickname.toLowerCase() || generalCriterea === array[i].age || generalCriterea.toLowerCase() === array[i].email.toLowerCase() || generalCriterea === array[i].phoneNumber || generalizeBirthday(generalCriterea.toLowerCase()) === array[i].month.toLowerCase() || generalCriterea === array[i].day || generalCriterea === array[i].year) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "First Name":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].firstName.toLowerCase()) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Middle Name":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].middleName.toLowerCase()) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Last Name":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].lastName.toLowerCase()) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Gender":
		for (i = 0; i < array.length; i++) {
			if (genderCriterea === array[i].gender) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		}
		break;
		case "Nickname":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].nickname.toLowerCase()) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Age":
		for (i = 0; i < array.length; i++) {
			if (ageCriterea === array[i].age) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Email":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea.toLowerCase() === array[i].email.toLowerCase()) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Phone Number":
		for (i = 0; i < array.length; i++) {
			if (generalCriterea === array[i].phoneNumber) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
		case "Birthday":
		for (i = 0; i < array.length; i++) {
			if ((monthCriterea === array[i].month || monthCriterea === "") && (dayCriterea === array[i].day || dayCriterea === "") && (yearCriterea === array[i].year || yearCriterea === "")) {
				$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
				found = true
			}
		};
		break;
	};
	$(".xsearchButton").click(function() {
		var btnId = $(this).attr("data-btn");
		$("#searchDiv" + btnId).slideUp(300, function() {
			$(this).remove()
		})
	});
	if (!found) {
		var text = "Nothing";
		if (category !== "Everywhere") {
			text = "No one with that " + category.toLowerCase()
		};
		$searchConsole.prepend("<h1 id='nothingFound'>Uh Oh!<br>" + text + " was found.<br>Try again, or add some more entries to your phonebook.</h1>")
	}
};