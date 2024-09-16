import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"

const publicPaths = ["/", "/sign-in", "/sign-up", "/forgot-password"]
const protectedPaths = ["/reset-password"]

export const updateSession = async (request: NextRequest) => {
	let response = NextResponse.next({
		request: {
			headers: request.headers,
		},
	})

	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return request.cookies.getAll()
				},
				setAll(cookiesToSet) {
					cookiesToSet.forEach(({ name, value }) =>
						request.cookies.set(name, value)
					)
					response = NextResponse.next({
						request,
					})
					cookiesToSet.forEach(({ name, value, options }) =>
						response.cookies.set(name, value, options)
					)
				},
			},
		}
	)

	// This will refresh session if expired - required for Server Components
	// https://supabase.com/docs/guides/auth/server-side/nextjs
	const user = await supabase.auth.getUser()

	// Check if user is logged in before accessing protected routes
	if (
		protectedPaths.some((path) =>
			request.nextUrl.pathname.startsWith(path)
		) &&
		user.error
	) {
		return NextResponse.redirect(new URL("/sign-in", request.url))
	}

	// Redirect logged-in users from public paths
	if (publicPaths.includes(request.nextUrl.pathname) && !user.error) {
		// ! Change the URL to the home page when there is one
		return NextResponse.redirect(new URL("/", request.url))
	}

	return response
}
