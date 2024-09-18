import FormCard from "@/components/forms/form-card"
import { Message } from "@/components/forms/form-message"
import SignInForm from "@/components/forms/sign-in-form"

export default function SignIn({ searchParams }: { searchParams: Message }) {
	return (
		<div className="flex items-center justify-center min-h-screen w-full p-4">
			<FormCard
				title="Sign In"
				description="Enter your information to login to your account"
				form={<SignInForm message={searchParams} />}
			/>
		</div>
	)
}
