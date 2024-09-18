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

const formSchema = z
	.object({
		newPassword: z.string().min(8, {
			message: "Password must be at least 8 characters",
		}),
		confirmPassword: z.string().min(8, {
			message: "Password must be at least 8 characters",
		}),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	})

export default function ResetPasswordForm({ message }: { message: Message }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			newPassword: "",
			confirmPassword: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values)
		// TODO: Implement reset password logic
	}

	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-4">
					<FormField
						control={form.control}
						name="newPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New password</FormLabel>
								<FormControl>
									<Input
										type="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm password</FormLabel>
								<FormControl>
									<Input
										type="password"
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
