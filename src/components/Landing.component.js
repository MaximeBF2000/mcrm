import { signIn } from 'next-auth/react'

export const Landing = () => {
  return (
    <div>
      <h1>Landing page</h1>
      <button
        className="px-12 py-4 rounded bg-black text-white"
        onClick={signIn}
      >
        SignIn
      </button>
    </div>
  )
}
