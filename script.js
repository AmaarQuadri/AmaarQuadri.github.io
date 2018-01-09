$(function() {//to do list: fix add/value functions, edit/delete entries, security features for inputs, add error messages for inputting number for name/nickname etc
	//button effects
	$("#button6").click(function() {
		$console = $(".console");
		$listConsole = $(".listConsole");
		$searchConsole = $(".searchConsole");
		if ($console.css("display") !== "none") {
			$console.slideUp(300)
		}
		else if ($listConsole.css("display") !== "none") {
			$listConsole.slideUp(200, function() {
				$console.slideDown(300, function() {
					$("input[name=firstName]").focus()
				});
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else if ($searchConsole.css("display") !== "none") {
			$searchConsole.slideUp(200, function() {
				$console.slideDown(300, function() {
					$("input[name=firstName]").focus()
				});
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else {
			$console.slideDown(300, function() {
					$("input[name=firstName]").focus()
				});
				$("body, html").animate({scrollTop: 300}, 300)
		}
	});
	$("#button7").click(function() {
		$console = $(".console");
		$listConsole = $(".listConsole");
		$searchConsole = $(".searchConsole");
		if ($console.css("display") !== "none") {
			$console.slideUp(200, function() {
				$listConsole.empty();
				list();
				$listConsole.slideDown(300);
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else if ($listConsole.css("display") !== "none") {
			$(listConsole).slideUp(300)
		}
		else if ($searchConsole.css("display") !== "none") {
			$searchConsole.slideUp(200, function() {
				$listConsole.empty();
				list();
				$listConsole.slideDown(300);
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else {
			$listConsole.empty();
			list();
			$listConsole.slideDown(300);
			$("body, html").animate({scrollTop: 300}, 300)
		}
	});
	$("#button8").click(function() {
		$console = $(".console");
		$listConsole = $(".listConsole");
		$searchConsole = $(".searchConsole");
		if ($console.css("display") !== "none") {
			$console.slideUp(200, function() {
				$searchConsole.slideDown(300, function() {
					$("input[name=search]").focus();
					$("input[name=searchAge]").focus()
				});
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else if ($listConsole.css("display") !== "none") {
			$listConsole.slideUp(200, function() {
				$searchConsole.slideDown(300, function() {
					$("input[name=search]").focus();
					$("input[name=searchAge]").focus()
				});
				$("body, html").animate({scrollTop: 300}, 300)
			})
		}
		else if ($searchConsole.css("display") !== "none") {
			$searchConsole.slideUp(300)
		}
		else {
			$searchConsole.slideDown(300, function() {
				$("input[name=search]").focus();
				$("input[name=searchAge]").focus()
			});
			$("body, html").animate({scrollTop: 300}, 300)
		}
	});
	//live search bar changes
	$("#attributes").change(function() {
		switch($(this).val()) {
			case "Everywhere":
			case "First Name":
			case "Middle Name":
			case "Last Name":
			case "Nickname":
			case "Email":
			case "Phone Number":
				$("#searchMessage").html("Enter something to search for here:");
				$("#searchGender").fadeOut(0);
				$("input[name=searchAge]").fadeOut(0);
				$(".searchDate").fadeOut(0);
				$("input[name=search]").fadeIn(0).focus()
			break;
			case "Gender":
				$("#searchMessage").html("Select a gender to search for here:");
				$("input[name=search]").fadeOut(0);
				$("input[name=searchAge]").fadeOut(0);
				$(".searchDate").fadeOut(0);
				$("#searchGender").fadeIn(0).focus()
			break;
			case "Age":
				$("#searchMessage").html("Select an age to search for here:");
				$("input[name=search]").fadeOut(0);
				$("#searchGender").fadeOut(0);
				$(".searchDate").fadeOut(0);
				$("input[name=searchAge]").fadeIn(0).focus()
			break;
			case "Birthday":
				$("#searchMessage").html("Select a birthday to search for here:");
				$("input[name=search]").fadeOut(0);
				$("#searchGender").fadeOut(0);
				$("input[name=searchAge]").fadeOut(0);
				$(".searchDate").fadeIn(0);
				var $searchYear = $("#searchYear");
				var $searchDay = $("#searchDay");
				var $searchMonth = $("#searchMonth");
				if ($searchYear.val() === "Year") {
					$searchYear.focus()
				};
				if ($searchDay.val() === "Day") {
					$searchDay.focus()
				};
				if ($searchMonth.val() === "Month") {
					$searchMonth.focus()
				}
		};
		//get rid of multiple error messages
		$(".searchError").remove();
		runError6 = true;
		runError7 = true;
		runError8 = true;
		runError9 = true;
		runError10 = true;
	});
	//radio button functions
	$("input[name=genderMale], #maleWord").click(function() {//double check acting up
		$("input[name=genderMale]").attr("checked", true);
		$("input[name=genderFemale]").attr("checked", false)
	});
	$("input[name=genderFemale], #femaleWord").click(function() {
		$("input[name=genderFemale]").attr("checked", true);
		$("input[name=genderMale]").attr("checked", false)
	});
	//button functions
	$("#button9").click(function() {
		//getting values
		var firstName = capitalize($("input[name=firstName]").val());//make these presentable
		var middleName = capitalize($("input[name=middleName]").val());
		var lastName = capitalize($("input[name=lastName]").val());
		var gender = "Gender";
		if ($("input[name=genderMale]").attr("checked")) {gender = "Male"};
		if ($("input[name=genderFemale]").attr("checked")) {gender = "Female"};
		var nickname = capitalize($("input[name=nickname]").val());
		var age = $("input[name=age]").val();
		var email = $("input[name=email]").val();
		var phoneNumber = $("input[name=phoneNumber]").val();
		var month = birthdayify($("#month").val());
		var day = birthdayify($("#day").val());
		var year = birthdayify($("#year").val());
		//error messages
		if (firstName === "" && runError1) {
			var error1 = $("<tr class='error' id='error1'><td colspan='2'>Please input a first name.</td></tr>");
			$("#firstNameRow").after(error1);
			runError1 = false;
		};
		if (firstName !== "") {
			$("#error1").remove();
			runError1 = true;
		};
		if (lastName === "" && runError2) {
			var error2 = $("<tr class='error' id='error2'><td colspan='2'>Please input a last name.</td></tr>");
			$("#lastNameRow").after(error2);
			runError2 = false;
		};
		if (lastName !== "") {
			$("#error2").remove();
			runError2 = true;
		};
		if (gender === "Gender" && runError3) {
			var error3 = $("<tr class='error' id='error3'><td colspan='2'>Please specify a gender.</td></tr>");
			$("#genderRow").after(error3);
			runError3 = false;
		};
		if (gender !== "Gender") {
			$("#error3").remove();
			runError3 = true;
		};
		if (age !== "" && isNaN(age) && runError4) {
			var error4 = $("<tr class='error' id='error4'><td colspan='2'>Please enter a number as the age.</td></tr>");
			$("#ageRow").after(error4);
			runError4 = false
		};
		if (age === "" || !isNaN(age)) {
			$("#error4").remove();
			runError4 = true
		};
		var correctPhoneNumber = true;
		for (i = 0; i < phoneNumber.length; i++) {
			if (isNaN(phoneNumber[i]) && phoneNumber[i] !== "(" && phoneNumber[i] !== ")" && phoneNumber[i] !== "-" && phoneNumber[i] !== " ") {
				correctPhoneNumber = false;
			}
		};
		if (!correctPhoneNumber && runError5) {
			var error5 = $("<tr class='error' id='error5'><td colspan='2'>Phone numbers can only contain numbers, brackets, spaces and dashes.</td></tr>");
			$("#phoneNumberRow").after(error5);
			runError5 = false;
		};
		if (correctPhoneNumber) {
			$("#error5").remove();
			runError5 = true
		};
		//adjusting focus
		if (!correctPhoneNumber) {
			$("input[name=phoneNumber]").focus()
		};
		if (age !== "" && isNaN(age)) {
			$("input[name=age]").focus()
		};
		if (lastName === "") {
			$("input[name=lastName]").focus()
		};
		if (firstName === "") {
			$("input[name=firstName]").focus()
		};
		//if the addition is sucessful
		if (firstName !== "" && lastName !== "" && gender !== "Gender" && (age === "" || !isNaN(age)) && (phoneNumber === "" || correctPhoneNumber)) {
			//reset error messages
			runError1 = true;
			runError2 = true;
			runError3 = true;
			runError4 = true;
			runError5 = true;
			add(firstName, middleName, lastName, gender, nickname, age, email, phoneNumber, month, day, year);
			//notifying and resetting
			$("table").slideUp(300);			
			$("#button9").slideUp(300);			
			$("#notice").fadeIn(300);			
			$(".error").remove();			
			$(".console input[type=text]").val("");
			$("#month").val("Month");
			$("#day").val("Day");
			$("#year").val("Year");
			$(".console input[type=radio]").attr("checked", false);
			$(".console").delay(1500).slideUp(300, function() {
				$("#notice").fadeOut(0);
				$("table").fadeIn(0);
				$("#button9").fadeIn(0);
			});
		};
		$("body, html").animate({scrollTop: 300}, 300)
	});
	$("input[name=search], input[name=searchAge]").keypress(function(key) {
		if (key.which === 13) {
			$("#button10").click()
		}
	});
	$("#button10").click(function() {
		//implement contains function, highlight, split up general criterea
		//getting values
		var category = $("#attributes").val();
		var generalCriterea = $("input[name=search]").val();
		var genderCriterea = $("#searchGender").val();
		var ageCriterea = $("input[name=searchAge]").val();
		var monthCriterea = birthdayify($("#searchMonth").val());
		var dayCriterea = birthdayify($("#searchDay").val());
		var yearCriterea = birthdayify($("#searchYear").val());
		//error messages
		if (category !== "Gender" && category !== "Age" && category !== "Birthday" && generalCriterea === "" && runError6) {
			var error6 = $("<p class='searchError'>Please enter something to search for.</p>");
			$("input[name=search]").after(error6).focus();
			runError6 = false
		};
		if (category === "Gender" && genderCriterea === "Gender" && runError7) {
			var error7 = $("<p class='searchError'>Please select a gender to search for.</p>");
			$("#searchGender").after(error7).focus();
			runError7 = false
		};
		if (category === "Age" && ageCriterea === "" && runError8) {
			var error8 = $("<p class='searchError'>Please enter an age to search for.</p>");
			$("input[name=searchAge]").after(error8).focus();
			runError8 = false
		};
		if (category === "Age" && isNaN(ageCriterea) && runError9) {
			var error9 = $("<p class='searchError'>Please enter a number as the age.</p>");
			$("input[name=searchAge]").after(error9).focus();
			runError9 = false
		};
		if (category === "Birthday" && monthCriterea === "" && dayCriterea === "" && yearCriterea === "" && runError10) {
			var error10 = $("<p class='searchError'>Please select a birthday to search for.</p>");
			$(".searchDate").after(error10);
			$("#searchMonth").focus();
			runError10 = false
		};
		//actual function
		if ((generalCriterea !== "" && category !== "Gender" && category !== "Age" && category !== "Birthday") || (genderCriterea !== "Gender" && category === "Gender") || (ageCriterea !== "" && !isNaN(ageCriterea) && category === "Age") || (category === "Birthday" && !(monthCriterea === "" && dayCriterea === "" && yearCriterea === ""))) {
			$(".container").fadeOut(0);
			var found = false;
			$searchConsole = $(".searchConsole");
			switch(category) {
				case "Everywhere":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].firstName.toLowerCase() || generalCriterea.toLowerCase() === array[i].middleName.toLowerCase() || generalCriterea.toLowerCase() === array[i].lastName.toLowerCase() || generalCriterea.toLowerCase() === array[i].gender.toLowerCase() || generalCriterea.toLowerCase() === array[i].nickname.toLowerCase() || generalCriterea === array[i].age || generalCriterea.toLowerCase() === array[i].email.toLowerCase() || generalCriterea === array[i].phoneNumber || generalizeBirthday(generalCriterea.toLowerCase()) === array[i].month.toLowerCase() || generalCriterea === array[i].day || generalCriterea === array[i].year) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "First Name":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].firstName.toLowerCase()) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Middle Name":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].middleName.toLowerCase()) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Last Name":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].lastName.toLowerCase()) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Gender":
					for (i = array.length - 1; i >= 0; i--) {
						if (genderCriterea === array[i].gender) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Nickname":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].nickname.toLowerCase()) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Age":
					for (i = array.length - 1; i >= 0; i--) {
						if (ageCriterea === array[i].age) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Email":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea.toLowerCase() === array[i].email.toLowerCase()) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Phone Number":
					for (i = array.length - 1; i >= 0; i--) {
						if (generalCriterea === array[i].phoneNumber) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
				break;
				case "Birthday":
					for (i = array.length - 1; i >= 0; i--) {
						if ((monthCriterea === array[i].month || monthCriterea === "") && (dayCriterea === array[i].day || dayCriterea === "") && (yearCriterea === array[i].year || yearCriterea === "")) {
							$searchConsole.prepend("<div class='result' id='searchDiv" + i + "'><div class='xsearchButton' data-btn='" + i + "'>x</div>" + printName(array[i]) + "</div>");
							found = true
						}
					}
			};
			if (!found) {
				var text = "Nothing";
				if (category !== "Everywhere") {
					text = "No one with that " + category.toLowerCase()
				};
				$searchConsole.prepend("<h2 id='nothingFound'>Uh Oh!<br>" + text + " was found.<br>Try again, or add some more entries to your phonebook.</h2>");
				var $button11 = $("#button11");
				$button11.fadeIn(0)
			}
			else {
				$("#button11").fadeIn(0);
				$(".xsearchButton").click(function() {
					var btnId = $(this).attr("data-btn");
					$("#searchDiv" + btnId).slideUp(300, function() {
						$(this).remove()
					})
				})
			}
		};
		$("body, html").animate({scrollTop: 300}, 300)
	});
	$("#button11").click(function() {
		//remove stuff
		$("#nothingFound").remove();
		$(".result").remove();
		$(this).fadeOut(0);
		//resetting inputs
		$("#searchMessage").html("Enter something to search for here:");
		$("#searchGender").fadeOut(0);
		$("input[name=searchAge]").fadeOut(0);
		$(".searchDate").fadeOut(0);
		$("input[name=search]").fadeIn(0);
		//reset error messages
		$(".searchError").remove();
		runError5 = true;
		runError6 = true;
		runError7 = true;
		runError8 = true;
		runError9 = true;
		runError10 = true;
		//reseting values
		$("#attributes").val("Everywhere");
		$("input[name=search], input[name=searchAge]").val("");
		$("#searchGender").val("Gender");
		$("#searchMonth").val("Month");
		$("#searchDay").val("Day");
		$("#searchYear").val("Year");
		//showing regular stuff
		$("button10").fadeIn(0);
		$(".container").fadeIn(300, function() {
			$("input[name=search]").focus();
			$("input[name=searchAge]").focus();	
		});
		$("body, html").animate({scrollTop: 300}, 300)
	});
	//error message validation
	var runError1 = true;
	var runError2 = true;
	var runError3 = true;
	var runError4 = true;
	var runError5 = true;
	var runError6 = true;
	var runError7 = true;
	var runError8 = true;
	var runError9 = true;
	var runError10 = true;
	//defining array for later use
	var array = [];
	//sub functions for use in later functions
	var capitalize = function(string) {
		if (string[0] !== undefined) {
			var firstLetters = string[0].toUpperCase();
			for (i = 1; i < string.length; i++) {
				var firstLetters = firstLetters + string[i]//no .toLowerCase() because McGivney: G should be capital
			};
			return firstLetters
		}
		else {
		    return ""
		}
	};
	var birthdayify = function(string) {
		if (string !== "Month" && string !== "Day" && string !== "Year") {
	        return string
	    }
	    else {
	        return ""
	    }
	};
	var spaceify = function(string) {
		if (string[0] !== undefined) {
        	return " " + string
    	}
    	else {
        	return ""
    	}
	};
	var bracketify = function(string) {
		if (string[0] !== undefined) {
			return "(" + string + ")"
		}
		else {
			return ""
		}
	};
	//add and value not working perfectly
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
		for (i = 0; i < array.length; i++) {
			if (value(array[i]) <= valObj) {
				count++
			}
		};
		//count is the number of objects in the array that have a smaller value (earlier in alphabetical order) than the new object
		array.splice(count, 0, object)
	};
	var ageify = function(string) {
		if (string[0] !== undefined) {
	        return string + " year old "
	    }
	    else {
	        return ""
	    }
	};
	var printName = function(object) {
		var nameRow = "<p>" + object.firstName + spaceify(object.middleName) + " " + object.lastName + spaceify(bracketify(object.nickname)) + "</p>";
		var ageGenderRow = "<p>" + ageify(object.age) + object.gender +"</p>";
		var emailRow = "<p>" + object.email + "</p>";
		var phoneNumberRow = "<p>" + object.phoneNumber + "</p>";
		var birthdayRow = "<p>" + object.day + spaceify(object.month) + spaceify(object.year) + "</p>";
		if (birthdayRow !== "<p></p>") {
			birthdayRow = "<p>Born: " + object.day + spaceify(object.month) + spaceify(object.year) + "</p>"
		};
		return nameRow + ageGenderRow + emailRow + phoneNumberRow + birthdayRow//dont put div to edit later
	};
	var list = function() {
		if (array[0] !== undefined) {
			$(".listConsole").append("<h2>Click on a name to see more details.</h2>");
			for (i = 0; i < array.length; i++) {
				//added span to make width equal to listItem			
				$(".listConsole").append("<p><span class='listItem' id='" + i + "'>" + array[i].firstName + spaceify(array[i].middleName) + " " + array[i].lastName + spaceify(bracketify(array[i].nickname)) + "</span></p>")
			}
		}
		else {
			$(".listConsole").append("<h2 class='error'>Uh oh!<br>It looks like your phonebook is empty!<br>Click Add to add some entries to it.</h2>")
		};		
		//list item expansion, editting, and deleting
		//has to be inside list function because otherwise it would be listening to a class with no elements.
		//this way, it starts listening after the class is filled up.
		$(".listItem").click(function() {
			var id = $(this).attr("id");
			var div = "<div class='result' id='div" + id + "' style='display:none'><div class='xbutton' data-btn='" + id + "'>x</div>" + printName(array[id]) + "</div>";
			$(this).after(div);
			var $div = $("#div" + id);
			$div.show();//better way?
			var $divHeight = $div.height();
			$div.hide();
			$(this).fadeOut(0);
			$div.slideDown(300);
			var currentHeight = $(document).scrollTop();
			var upperPosition = $div.offset().top - 20;
			var lowerPosition = upperPosition + $divHeight - $(window).height() + 40;
			if (lowerPosition < 300 && currentHeight < 300) {
				$("body, html").animate({scrollTop: 300}, 300)
			}
			else if (lowerPosition > currentHeight && lowerPosition > 300) {
				$("body, html").animate({scrollTop: lowerPosition}, 300)
			}
			else if (currentHeight > upperPosition) {
				$("body, html").animate({scrollTop: upperPosition}, 300)
			};
			$(".xbutton").click(function() {
				var btnId = $(this).attr("data-btn");
				$("#div" + btnId).slideUp(300, function() {
					$("#" + btnId).fadeIn(200);
					$(this).remove()
				})			
			})
		})
	};
	var contains = function(string, content) {
		return string.indexOf(content) > - 1;
	};
	var generalizeBirthday = function(string) {
		var result = "";
		switch(string) {
			case "jan":
			case "jan.":
			case "january":
				result = "jan."
			break;
			case "feb":
			case "feb.":
			case "february":
				result = "feb."
			break;
			case "mar":
			case "mar.":
			case "march":
				result = "mar."
			break;
			case "apr":
			case "apr.":
			case "april":
				result = "apr."
			break;
			case "jun":
			case "jun.":
			case "june":
				result = "jun."
			break;
			case "jul":
			case "jul.":
			case "july":
				result = "jul."
			break;
			case "aug":
			case "aug.":
			case "august":
				result = "aug."
			break;
			case "sep":
			case "sep.":
			case "september":
				result = "sep."
			break;
			case "oct":
			case "oct.":
			case "october":
				result = "oct."
			break;
			case "nov":
			case "nov.":
			case "november":
				result = "nov."
			break;
			case "dec":
			case "dec.":
			case "december":
				result = "dec."
		};
		return result
	};
	//tabbing is for twats
	$(document).keydown(function(key) {
		if (key.which === 9) {
		//	$("body").fadeOut(0).after("<img src='http://img1.wikia.nocookie.net/__cb20140113031726/impossible-quiz/images/thumb/c/cc/TabCheatBastud1.png/500px-TabCheatBastud1.png'/>")

		}
	});
})