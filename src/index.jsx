import { createRoot } from "react-dom/client"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"

import { Text, MultilineText } from "./components/Text"
import Diamonds from "./diamonds/Diamonds"
import Plane from "./components/Plane"
import Items from "./components/Items.jsx"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.css"

// A Plane geometry that fades out in front of camera to give the illusion of a cinematic transition
function Startup() {
	const ref = useRef()
	useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
	return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
	const { contentMaxWidth: w, canvasWidth, canvasHeight, margin, mobile } = useBlock()
	const size = aspect < 1 && !mobile ? 0.65 : 1
	const alignRight = (canvasWidth - w * size - margin) / 2
	const pixelWidth = w * state.zoom * size
	const left = !(index % 2)
	const color = index % 2 ? "#d40733" : "#2fe85d"
	const defaultDepth = 1
	return (
		<Block factor={factor} offset={offset} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
			<group position={[left ? -alignRight : alignRight, 0, 0]}>
				<Plane map={image} args={[1, 1, 32, 32]} shift={200} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
				<Html
					style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
					position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
					<div tabIndex={index}>{text}</div>
				</Html>
				<Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
					{header}
				</Text>
				<Block factor={0.2} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Text opacity={0.5} size={w * 0.5} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
						{"0" + (index + 1)}
					</Text>
				</Block>
			</group>
		</Block>
	)
}

function Content() {
	const images = useLoader(
		TextureLoader,
		state.paragraphs.map(({ image }) => image)
	)

	const defaultDepth = 1

	useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
	const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
	return (
		<>
			<Block factor={1} offset={0} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<Block factor={1.2} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Text left size={w * 0.15} position={[-w / 3.2, 4, -1]} color="#d40733">
						AUSTIN
					</Text>
					<Text left size={w * 0.15} position={[-w / 3.2, 0.5, -1]} color="#d40733">
						PAPRITZ
					</Text>
				</Block>
				<Block factor={1.0} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Html className="bottom-left" style={{ color: "white" }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
						Full Stack Software Engineer{mobile ? <br /> : " "}React || ASP.NET Core
					</Html>
				</Block>
			</Block>
			{/* "four zero zero" text */}
			<Block factor={1.2} offset={5.7} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe85d" text={"hire\nme\nnow"} />
			</Block>
			{state.paragraphs.map((props, index) => (
				<Paragraph key={index} index={index} {...props} image={images[index]} />
			))}
			{state.stripes.map(({ offset, color, height }, index) => (
				<Block key={index} factor={-1.5} offset={offset} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
				</Block>
			))}
			<Block factor={1.25} offset={8} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<Html style={{ color: "white" }} className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
					Copywrite 2023
				</Html>
			</Block>
		</>
	)
}

function App() {
	const scrollArea = useRef()
	const onScroll = (e) => (state.top.current = e.target.scrollTop)
	useEffect(() => void onScroll({ target: scrollArea.current }), [])
	return (
		<>
			<Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
				<Suspense fallback={<Html center className="loading" children="Loading..." />}>
					<Content />
					<Diamonds />
					<Startup />
				</Suspense>
			</Canvas>
			<div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
				{new Array(state.sections).fill().map((_, index) => (
					<div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
				))}
			</div>
		</>
	)
}

createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>
)
