import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function serverAuthCheck() {
	const supabase = createClient()
	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		redirect("/sign-in")
	}

	return user
}
