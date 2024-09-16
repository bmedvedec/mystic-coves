import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"

export function withAuthProtection(WrappedComponent: React.ComponentType) {
	return function AuthProtectedComponent(props: any) {
		const router = useRouter()
		const supabase = createClient()

		useEffect(() => {
			const checkAuth = async () => {
				const {
					data: { user },
				} = await supabase.auth.getUser()
				if (!user) {
					router.push("/sign-in")
				}
			}
			checkAuth()
		}, [])

		return <WrappedComponent {...props} />
	}
}
