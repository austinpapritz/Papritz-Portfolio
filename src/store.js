import { createRef } from "react"
import { Vector3 } from "three"

const state = {
	sections: 9,
	pages: 8,
	zoom: 75,
	paragraphs: [
		{
			offset: 1,
			factor: 1.5,
			header: "Bio",
			image: "/climbing.jpg",
			aspect: 1.2,
			text: "Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."
		},
		{
			offset: 2,
			factor: 1.5,
			header: "Pokédex Search",
			image: "/pokedex_search_ss.png",
			aspect: 1.75,
			text: "The Pokédex Web App. Search and add Pokémon to your lineup."
		},
		{
			offset: 3,
			factor: 1.5,
			header: "\\/aporWave Tic-Tac-Toe ",
			image: "/tic-tac-toe-ss.jpg",
			aspect: 2,
			text: "Come take a trip thru the liminal hyperspace and enjoy a game of tic-tac-toe."
		},
		{
			offset: 4,
			factor: 1.5,
			header: "Agathos 3D Design",
			image: "/agathos-ss.jpg",
			aspect: 1.8,
			text: "Designed with Figma, Photoshop, and Spline."
		},
		{
			offset: 5,
			factor: 1.5,
			header: "Tech Stack",
			image: "/tech-stack.jpg",
			aspect: 1.5,
			text: "{Tech stack icons}"
		},
		{
			offset: 7,
			factor: 1.05,
			header: "Contact Me",
			image: "/headshot2.jpg",
			aspect: 0.7,
			text: "{LinkedIn, GitHub, Email}"
		}
	],
	stripes: [
		{ offset: 0, color: "#123", height: 13 },
		{ offset: 6.3, color: "#123", height: 20 }
	],
	diamonds: [{ x: 0, offset: 0.04, pos: new Vector3(), scale: 12, factor: 6 }],
	top: createRef()
}

export default state
