import { FormMessage, Message } from "@/components/form-message"

export default function SignUp({ searchParams }: { searchParams: Message }) {
	if ("message" in searchParams) {
		return (
			<div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
				<FormMessage message={searchParams} />
			</div>
		)
	}

	return (
		<div>
			<h1>Sign Up</h1>
		</div>
	)
}
