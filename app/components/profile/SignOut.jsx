import Link from "next/link"

export default function SignOut() {
  return(
    <div className="flex justify-center">
      <Link href='/api/auth/signout' className="border-2 border-white py-1 px-2 rounded">Sign out</Link>
    </div>
    )
}