import { useSession, signIn } from 'next-auth/react'

export const withAuthProtect = (ProtectedComponent, NotConnectedComponent) => {
  return ({ ...props }) => {
    const { data: session } = useSession()

    if (session) return <ProtectedComponent {...props} />

    if (NotConnectedComponent) return <NotConnectedComponent {...props} />

    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-3xl mb-12">
          You need to be connected to access this page 🔐
        </p>
        <button
          className="px-8 py-3 rounded bg-black text-white"
          onClick={signIn}
        >
          Login
        </button>
      </div>
    )
  }
}
