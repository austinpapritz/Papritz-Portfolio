import { createRoot } from "react-dom/client"
import React, { Suspense, useEffect, useRef, useMemo, useState } from "react"
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber"
import { Html, useAspect, useTexture, useVideoTexture } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import { useSpring, a } from "@react-spring/three"
import lerp from "lerp"

import { Text, MultilineText } from "./components/Text"
import Diamonds from "./diamonds/Diamonds"
import Plane from "./components/Plane"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.css"

// A Plane geometry that fades out in front of camera to give the illusion of a cinematic transition
function Startup() {
	const ref = useRef()
	useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
	return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

// Colorful color cycle behind name
function ColorCycle() {
	const colors = ["#21242d", "#8bd8d2", "#0d4663", "#ffbcb7", "#2d4a3e", "#ea5158"]
	const { viewport } = useThree()
	const [page, setPage] = useState(0)
	useEffect(() => void setInterval(() => setPage((i) => (i + 1) % colors.length), 2500), [])
	const { color } = useSpring({ color: colors[page] })
	return (
		<>
			<mesh scale={[viewport.width, viewport.height, 1]}>
				<planeGeometry />
				<a.meshPhongMaterial color={color} depthTest={false} />
			</mesh>
		</>
	)
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
		// Block containing entire paragraph
		<Block factor={factor} offset={offset} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
			<group position={[left ? -alignRight : alignRight, 0, 0]}>
				{header === "Contact Me" && (
					<Html index={991} className="html-container" position={[2, -6.5, 0]}>
						<div className="svg-container">
							<a href="https://www.linkedin.com/in/austinpapritz/">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" height="100px" />
							</a>

							<a href="https://github.com/austinpapritz">
								<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" height="100px" className="github-svg" />
							</a>
						</div>
					</Html>
				)}
				{/* Plane component for image */}
				{index != 1 ? (
					<Plane map={image} args={[1, 1, 32, 32]} shift={200} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
				) : (
					<Agathos />
				)}
				{/* Html component for text body */}
				<Html
					style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
					position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
					<div tabIndex={index}>{text}</div>
				</Html>
				{/* Text component for header */}
				<Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
					{header}
				</Text>
			</group>
		</Block>
	)
}

function Agathos() {
	const size = useAspect(1920, 1080)
	return (
		<mesh scale={size} position={[-7, -0.5, 0]}>
			<planeGeometry args={[0.7, 0.7, 1]} />
			<Suspense fallback={<FallbackMaterial url="agathos-ss.jpg" />}>
				<VideoMaterial url="agathos-demo.mp4" />
			</Suspense>
		</mesh>
	)
}

function VideoMaterial({ url }) {
	const texture = useVideoTexture(url)
	return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
	const texture = useTexture(url)
	return <meshBasicMaterial map={texture} toneMapped={false} />
}

function Content() {
	const images = useLoader(
		TextureLoader,
		state.paragraphs.map(({ image }) => image)
	)
	const defaultDepth = 1

	useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
	const { contentMaxWidth: w, canvasWidth, canvasHeight } = useBlock()
	return (
		<>
			{/* Block for Name and Position */}
			<Block factor={1} offset={0} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<Block factor={1.2} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Text left size={w * 0.16} position={[-w / 2, 3, -1]} color="#d40733">
						AUSTIN
					</Text>
					<Text left size={w * 0.16} position={[-w / 2, -1, -1]} color="#d40733">
						PAPRITZ
					</Text>
				</Block>
				<Block factor={1.0} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Html className="bottom-left" style={{ color: "black" }} position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
						Full Stack Software Engineer React || ASP.NET Core
					</Html>
				</Block>
				<Block factor={1.0} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Html position={[-canvasWidth / 10, -canvasHeight / 2, 0]}>
						<img className="bottom-middle" src="scroll.png"></img>
					</Html>
				</Block>
				<ColorCycle />
			</Block>
			{/* Block for "hire me now" text */}
			<Block factor={1.2} offset={4.9} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<MultilineText top left size={w * 0.15} lineHeight={w / 5} position={[-w / 3.5, 0, -1]} color="#2fe85d" text={"hire\nme\nnow"} />
			</Block>
			{/* Main blocks */}
			{state.paragraphs.map((props, index) => (
				<Paragraph key={index} index={index} {...props} image={images[index]} />
			))}
			{state.stripes.map(({ offset, color, height }, index) => (
				<Block key={index} factor={-1.5} offset={offset} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
					<Plane args={[35, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
				</Block>
			))}
			{/* Final copywrite block */}
			<Block factor={1.25} offset={8} blockWidth={canvasWidth} blockHeight={canvasHeight} blockDepth={defaultDepth}>
				<Html style={{ color: "white" }} className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
					Copywrite 2024
				</Html>
			</Block>
		</>
	)
}

function App() {
	const scrollArea = useRef()
	const onScroll = (e) => (state.top.current = e.target.scrollTop)
	useEffect(() => {
		void onScroll({ target: scrollArea.current })
	}, [])
	return (
		<>
			<Canvas
				gl={{ antialias: false }}
				linear
				dpr={[1, 2]}
				orthographic
				camera={{ zoom: state.zoom, position: [0, 0, 500] }}
				onPointerMissed={() => (tileState.clicked = null)}>
				<ambientLight intensity={0.5} />
				<Suspense fallback={<Html center className="loading" children="Loading..." />}>
					<Content />
					<Diamonds />
					<Startup />
				</Suspense>
			</Canvas>
			<div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
				{new Array(state.sections).fill().map((_, index) => (
					<>
						<div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
					</>
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
