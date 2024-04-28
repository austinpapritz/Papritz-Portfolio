import { createRef } from "react"
import { Vector3 } from "three"

const state = {
	sections: 9,
	pages: 8,
	zoom: 75,
	paragraphs: [
		{
			offset: 1,
			factor: 1.75,
			header: "Bio",
			image: "/climbing.jpg",
			aspect: 0.8,
			text: "Dynamic and driven developer, motivated to solve big problems and work in communication-centered teams. Avid climber and runner."
		},
		{
			offset: 2,
			factor: 2.0,
			header: "Pokédex Search",
			image: "/pokedex_search_ss.png",
			aspect: 1.5,
			text: "The Pokédex Web Application presents users with an intuitive UI to search for Pokémon cards. The user can search Pokémon by name or type, then adding or removing a Pokémon from their personalized lineup with one click."
		},
		{
			offset: 3,
			factor: 2.25,
			header: "\\/aporWave Tic-Tac-Toe ",
			image: "/tic-tac-toe-ss.jpg",
			aspect: 1.5,
			text: "Come take a trip thru liminal hyperspace and enjoy a game of tic-tac-toe. Context provider tracks the turn order, calculates the win conditions, and processes the display messages."
		},
		{
			offset: 4,
			factor: 2.0,
			header: "Pierre's Tasty Treats",
			image: "/Habanero-Potato-Empanada.jpg",
			aspect: 1.5,
			text: "Pierre's Tasty Treats is a web app that allows users to see what new treats and flavor combos are in the works at Pierre's Bakery. Admins can easily add, edit, and delete new treats and flavors."
		},
		{
			offset: 5,
			factor: 1.75,
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
			aspect: 0.75,
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
