
function intersection(transcript, reqs) {
	return transcript.filter(function(n) {
		return reqs.includes(n.class);
	});
}

function showDecimalPlaces(num, places) {
	return num.toFixed(Math.max(places, (num.toString().split('.')[1] || []).length));
}

function letterGradeToGPA(letter) {
	gpa = {	"A+":	4.0,
			"A":	4.0,
			"A-": 	3.7,
			"B+": 	3.3,
			"B": 	3.0,
			"B-": 	2.7,
			"C+": 	2.3,
			"C": 	2.0,
			"C-": 	1.7,
			"D+": 	1.3,
			"D": 	1.0,
			"D-": 	0.7,
			"F": 	0.0
		}
	return gpa[letter];
}

function calcualateGPA(classes) {
	sum = 0;
	for (i = 0; i < classes.length; i++) {
		sum += classes[i].grade;
	}
	return sum / classes.length;
}


function potentialMinors(list) {
	for (var minor in minors) {
		// Checks if property is specific to this class, and not one inherited from the base class
		if (minors.hasOwnProperty(minor)) {
			minorStatus(list, minor);
		}
	}
	return "u go glen coco";
}

function minorStatus(classesTaken, minor) {
	m = minors[minor];
	console.log("Checking your status for the " + m.full + " minor.");

	usefulClasses = [];

	// Loop through and check every category of courses
	for (i = 0; i < m.reqs.length; i++) {
		potentialClasses = intersection(classesTaken, m.reqs[i].courses);
		if (potentialClasses.length >= m.reqs[i].num) {
			console.log("You've taken all the classes for the " + m.reqs[i].name + " requirement!");
		} else {
			console.log("You've taken " + potentialClasses.length + "/" + m.reqs[i].num + " classes for the " + m.reqs[i].name + " requirement.");
		}

		// Check to make sure you're not using a class twice somewhere???

		usefulClasses = usefulClasses.concat(potentialClasses);
	}

	// Check if there is a gpa requirement
	if (m.gpa) {
		console.log("There is a GPA requirement of " + showDecimalPlaces(m.gpa, 1) + ".");
		console.log("You have a GPA of " + showDecimalPlaces(calcualateGPA(usefulClasses), 1) + ".");
	}

	return "classes left to take";
}

