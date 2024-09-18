import ForgotPasswordForm from "@/components/forms/forgot-password-form"
import FormCard from "@/components/forms/form-card"
import { Message } from "@/components/forms/form-message"

export default function ForgotPassword({
	searchParams,
}: {
	searchParams: Message
}) {
	return (
		<div className="flex items-center justify-center min-h-screen w-full p-4">
			<FormCard
				title="Reset Password"
				description="Enter your email address and we will send you a link to reset your password."
				form={<ForgotPasswordForm message={searchParams} />}
			/>
		</div>
	)
}
