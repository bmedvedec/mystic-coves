import Image from "next/image"

export default function Home() {
	return (
		// write tailwind classes here
		<div className="flex flex-col items-center justify-center h-screen">
			<h1 className="text-4xl font-bold text-center">Mystic Coves</h1>

			<br />

			<p className="text-lg text-center">
				Welcome to Mystic Coves, a place of wonder and magic.
			</p>
			<p className="text-lg text-center">
				A place where you can explore the hidden treasures of our world.
			</p>
		</div>
	)
}
