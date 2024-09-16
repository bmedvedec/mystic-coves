import { createClient } from "@/utils/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
	// The `/auth/callback` route is required for the server-side auth flow implemented
	// by the SSR package. It exchanges an auth code for the user's session.
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const requestUrl = new URL(request.url)
	const code = requestUrl.searchParams.get("code")
	const origin = requestUrl.origin
	const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString()

	if (code) {
		try {
			const supabase = createClient()
			await supabase.auth.exchangeCodeForSession(code)
		} catch (error) {
			console.error("Error exchanging code for session:", error)
			return NextResponse.redirect(`${origin}/auth-error`)
		}
	}

	// Add more complex redirect logic here if needed
	// For example, checking user roles and redirecting accordingly

	if (redirectTo) {
		return NextResponse.redirect(`${origin}${redirectTo}`)
	}

	return NextResponse.redirect(`${origin}/`)
}
