import Item from "./Item.jsx"
import { proxy, useSnapshot } from "valtio"

const state = proxy({
	clicked: null,
	urls: ["ph1", "ph3"].map((u) => `/${u}.jpg`)
})

export default function Items({ w = 0.7, gap = 0.15 }) {
	const { urls } = useSnapshot(state)
	const xW = w + gap
	return (
		<group position={[5, 0, 0]}>
			{urls.map((url, i) => (
				<Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />
			))}
		</group>
	)
}
