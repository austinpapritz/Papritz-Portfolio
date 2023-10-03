import Item from "./Item.jsx"
import { proxy, useSnapshot } from "valtio"

const tileState = proxy({
	clicked: null,
	urls: ["ph1", "ph3"].map((u) => `/${u}.jpg`)
})

export default function Items({ w = 0.7, gap = 0.15 }) {
	const { urls } = useSnapshot(tileState)
	const xW = w + gap
	return (
		<group
			position={[5, 0, 0]}
			onClick={() => {
				console.log("Direct click:")
			}}>
			{urls.map((url, i) => (
				<Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />
			))}
		</group>
	)
}
