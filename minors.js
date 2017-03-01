

var minors = {
	"ART": {
		"full": "Art Practice",
		"reqs": [
			{	"name": "Art History (20th Century)",
				"courses": ["HISTART 192G"],
				"num": 1
			},
			{	"name": "Upper Division",
				"courses": ["ART 102", "ART 117", "ART 118", "ART 119",
							"ART 120", "ART 122", "ART 123", "ART 124",
							"ART 132", "ART 137", "ART 138", 
							"ART 141", "ART 142",
							"ART 160", "ART 162", "ART 164", "ART 165",
							"ART 171", "ART 173", "ART 174", "ART 175", "ART 178", "ART C179", "ART 179",
							"ART 180",
							"FILM 180", "FILM 181", "FILM 185", "FILM 186",
							"TDPS 173", "TDPS 174", "TDPS 175",
							"VISSTD 180A", "VISSTD 180B", "VISSTD 181", "VISSTD 185", "VISSTD C185A", "VISSTD 187A", "VISST 187B",
							"NWMEDIA 190"],
				"num": 4
			},
			{	"name": "Lower Division",
				"courses": ["ART 8", "ART 12", "ART 13", "ART 14", "ART 16", "ART 21", "ART W23AC", "ART 26"],
				"num": 4
			}
		]
	},
	"COMPSCI": {
		"full": "Computer Science",
		"gpa": 2.0,
		"reqs": [
			{	"name": "Lower Division",
				"courses": ["COMPSCI 61A", "COMPSCI 61B", "COMPSCI 61BL", "COMPSCI 61C",
							"COMPSCI 70"],
				"num": 5
			},
			{	"name": "Upper Division",
				"courses": ["COMPSCI 160", "COMPSCI 161", "COMPSCI 162", "COMPSCI 164",
							"COMPSCI 170", "COMPSCI 174",
							"COMPSCI 184", "COMPSCI 186", "COMPSCI 188", "COMPSCI 189"],
				"num": 3

			}
		]
	},
	"PHYSICS": {
		"full": "Physics",
		"gpa": 2.0,
		"reqs": [
			{	"name": "Physics 5 or 7 Series",
				"courses": ["PHYSICS 5A", "PHYSICS 5B", "PHYSICS 5C",
							"PHYSICS 7A", "PHYSICS 7B", "PHYSICS 7C"],
				"num": 3
			},
			{	"name": "Lower Division Math",
				"courses": ["MATH 1A", "MATH 1B", "MATH 53", "PHYSICS 89"],
				"num": 4
			},
			{	"name": "Physics 137A",
				"courses": ["PHYSICS 137A"],
				"num": 1
			},
			{	"name": "Physics 110A or Physics 105",
				"courses": ["PHYSICS 110A", "PHYSICS 105"],
				"num": 1
			},
			{	"name": "Upper Division",
				"courses": ["PHYSICS 110B", "PHYSICS 111A", "PHYSICS 111B", "PHYSICS 112", "PHYSICS 129",
							"PHYSICS 130", "PHYSICS 137A", "PHYSICS 137B", "PHYSICS 138", "PHYSICS 139",
							"PHYSICS 141A", "PHYSICS 141B", "PHYSICS 142",
							"PHYSICS C161"],
				"num": 3
			},
		]
	}
};


var myTranscript = [
				{	"name": 	"MATH 1A",
					"grade": 	4.0
				},
				{	"name": 	"MATH 1B",
					"grade": 	4.0
				},
				{	"name": 	"ART 8",
					"grade": 	3.0
				},
				{	"name": 	"ART 12",
					"grade": 	3.3
				},
				{	"name": 	"ART 14",
					"grade": 	4.0
				},
				{	"name": 	"COMPSCI 188",
					"grade": 	4.0
				},
				{	"name": 	"COMPSCI 189",
					"grade": 	3.7
				},
				{	"name": 	"PHYSICS 7A",
					"grade": 	3.3
				}
			];



var meh = `Spring 2017
Class	Title	Un.	Gr.
ART 180	Advanced Digital Photography	4.0	—
COMPSCI 284B	Advanced Computer Graphics Algorithms and Techniques	4.0	—
HISTART 192G	Undergraduate Seminar: Problems in Research and Interpretation: Undergraduate Seminar: American Art, Architecture, and Design	4.0	—
NWMEDIA 190	Special Topics in New Media	4.0	—
Spring 2016
Class	Title	Un.	Gr.
ART 8	Introduction to Visual Thinking	4.0	A
ART W23AC	Data Arts	4.0	A
ART 123	The Language of Printmaking-Screenprinting	4.0	A
COMPSCI 189	Introduction to Machine Learning	4.0	B+`;





