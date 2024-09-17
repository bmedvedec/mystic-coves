import FormCard from "@/components/form-card"
import { Message } from "@/components/form-message"
import SignInForm from "@/components/sign-in-form"

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
