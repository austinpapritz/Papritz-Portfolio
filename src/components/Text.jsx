import { Vector3 } from "three"
import { FontLoader } from "three/addons/loaders/FontLoader.js"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import React, { useCallback, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import lerp from "lerp"
import state from "../store"

function Text({ children, size = 1, left, right, top, bottom, color = "white", opacity = 1, height = 0.01, layers = 0, font = "/MOONGET_Heavy.blob", ...props }) {
	const data = useLoader(FontLoader, font)
	const geom = new TextGeometry(children, { font: data, size: 1, height, curveSegments: 32 })

	const onUpdate = useCallback(
		(self) => {
			const box = new Vector3()
			self.geometry.computeBoundingBox()
			self.geometry.boundingBox.getSize(box)
			self.position.x = left ? 0 : right ? -box.x : -box.x / 2
			self.position.y = top ? 0 : bottom ? -box.y : -box.y / 2
		},
		[left, right, top, bottom]
	)

	const ref = useRef()
	let last = state.top.current
	useFrame(() => {
		ref.current.shift = lerp(ref.current.shift, (state.top.current - last) / 100, 0.1)
		last = state.top.current
	})

	return (
		<group {...props} scale={[size, size, 0.1]}>
			<mesh geometry={geom} onUpdate={onUpdate} frustumCulled={false}>
				<customMaterial ref={ref} color={color} transparent opacity={opacity} />
			</mesh>
		</group>
	)
}

const MultilineText = ({ text, size = 1, lineHeight = 1, position = [0, 0, 0], ...props }) =>
	text.split("\n").map((text, index) => <Text key={index} size={size} {...props} position={[position[0], position[1] - index * lineHeight, position[2]]} children={text} />)

export { Text, MultilineText }
