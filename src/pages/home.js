import { signOut } from 'next-auth/react'
import { withAuthProtect } from '../hoc/withAuthProtect.hoc'

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <button
        className="px-8 py-3 rounded bg-black text-white"
        onClick={signOut}
      >
        Sign out
      </button>
    </div>
  )
}

export default withAuthProtect(Home)
