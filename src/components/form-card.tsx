import React from "react"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card"

export default function FormCard({
	title,
	description,
	form,
}: {
	title: string
	description: string
	form: React.ReactNode
}) {
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{form}</CardContent>
		</Card>
	)
}
