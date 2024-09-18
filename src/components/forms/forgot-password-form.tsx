"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CustomFormMessage, Message } from "./form-message"

const formSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
})

export default function ForgotPasswordForm({ message }: { message: Message }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
		// TODO: Implement forgot password logic
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="mc@example.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit">Reset Password</Button>
					<CustomFormMessage message={message} />
				</form>
			</Form>

			<div className="mt-2 text-center text-sm">
				Already have an account?{" "}
				<Link
					href="/sign-in"
					className="underline">
					Sign in
				</Link>
			</div>
		</>
	)
}
