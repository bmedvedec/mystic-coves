import { CustomFormMessage, Message } from "@/components/form-message"
import FormCard from "@/components/form-card"
import SignUpForm from "@/components/sign-up-form"

export default function SignUp({ searchParams }: { searchParams: Message }) {
	if ("message" in searchParams) {
		return (
			<div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
				<CustomFormMessage message={searchParams} />
			</div>
		)
	}

	return (
		<div className="flex items-center justify-center min-h-screen w-full p-4">
			<FormCard
				title="Sign Up"
				description="Enter your information to create an account"
				form={<SignUpForm message={searchParams} />}
			/>
		</div>
	)
}
