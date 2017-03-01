

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
	"EPS": {
		"full": "Earth and Planetary Sciences",
		"gpa": 2.0,
		"reqs": [
			{	"name": "Lower Division",
				"courses": ["EPS 50"],
				"num": 1
			},
			{	"name": "Upper Division",
				"courses": ["EPS 102", "EPS 104", "EPS C180", "EPS C181", "EPS C182", "EPS C183", "EPS 230",
							"GEOG 142", "GEOG 143", "ENERES 102", "CIVENG 107", "CIVENG 108",
							"EPS 100A", "EPS 100B", "EPS C100", "EPS 103", "EPS 105", "EPS 109", "EPS 115", "EPS 117", "EPS 131",
							"EPS C141", "EPS C146", "EPS 170AC", "EPS C178", "EPS 180", "EPS 185",
							"EPS 101", "EPS 102", "EPS 107", "EPS 108", "EPS 116", "EPS 118", "EPS C178",
							"INTEGBI 106", "INTEGBI 106A", "INTEGBI 158LF",
							"EPS C120", "EPS C120L", "EPS 122", "EPS 130",
							"MATH 121A", "EPS C162"],
				"num": 5
			}
		]
	},
	"IEOR": {
		"full": "Industrial Engineering and Operations Research",
		"gpa": 2.0,
		"reqs": [
			{	"name": "IEOR 172 or STAT 134",
				"courses": ["IEOR 172", "STAT 134"],
				"num": 1
			},
			{	"name": "IEOR 165 or STAT 135",
				"courses": ["IEOR 165", "STAT 135"],
				"num": 1
			},
			{	"name": "IEOR 160 or IEOR 162",
				"courses": ["IEOR 160", "IEOR 162"],
				"num": 1
			},
			{	"name": "IEOR 131, 161, or 166",
				"courses": ["IEOR 131", "IEOR 161", "IEOR 166"],
				"num": 1
			},
			{	"name": "2 Upper Division Classes",
				"courses": ["IEOR 115", "IEOR 130", "IEOR 150", "IEOR 151", "IEOR 153",
							"IEOR 170", "IEOR 171"],
				"num": 2
			}
		]
	},
	"MATH": {
		"full": "Mathematics",
		"gpa": 2.0,
		"reqs": [
			{	"name": "Lower Division",
				"courses": ["MATH 1A", "MATH 1B", "MATH 53", "MATH 54"],
				"num": 4
			},
			{	"name": "Upper Division",
				"courses": ["MATH 104", "MATH H104", "MATH 110", "MATH H110", "MATH 113", "MATH 185"],
				"num": 4
			},
			{	"name": "Upper Division Elective",
				"courses": ["MATH C103", "MATH 115", "MATH 121A", "MATH 121B", "MATH 123", "MATH 125A", "MATH 126", "MATH 127", "MATH 128A", "MATH 128B",
							"MATH 130", "MATH 135", "MATH 136", "MATH 140", "MATH 141", "MATH 142", "MATH 143",
							"MATH 151", "MATH 152", "MATH 153", "MATH 160", "MATH 170", "MATH 172"],
				"num": 1
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





