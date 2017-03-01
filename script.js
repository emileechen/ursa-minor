

// Returns array of intersecting objects.
function intersection(arr1, arr2) {
	return arr1.filter(function(n) {
		return arr2.includes(n);
	});
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


function potentialMinors(list) {
	return "hi";
}

function minorStatus(classesTaken, minor) {
	m = minors[minor];
	console.log("Checking your status for the " + m.full + " minor.");

	// Loop through and check every category of courses
	for (i = 0; i < m.reqs.length; i++) {
		usefulClasses = intersection(m.reqs[i].courses, classesTaken);
		if (usefulClasses.length >= m.reqs[i].num) {
			console.log("You've taken all the classes for the " + m.reqs[i].name + " requirement!");
		} else {
			console.log("You've taken " + usefulClasses.length + "/" + m.reqs[i].num + " classes for the " + m.reqs[i].name + " requirement.");
		}
	}
	return "classes left to take";
}

