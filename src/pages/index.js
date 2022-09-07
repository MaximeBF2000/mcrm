import { signOut, useSession } from 'next-auth/react'
import { DataTable } from '../components/DataTable.component'
import { Landing } from '../components/Landing.component'
import { withAuthProtect } from '../hoc'
import { genId } from '../utils'

const headers = [
  { key: 'id', name: 'ID', type: 'STATIC', default: genId(4) },
  { key: 'firstname', name: 'First name', type: 'text' },
  { key: 'lastname', name: 'Last name', type: 'text' },
  { key: 'email', name: 'Email', type: 'email' },
  { key: 'phone', name: 'Phone', type: 'phone' },
  { key: 'age', name: 'Email', type: 'text' },
  { key: 'facebook', name: 'Facebook', type: 'url' },
  { key: 'instagram', name: 'Instagram', type: 'url' },
  { key: 'twitter', name: 'Twitter', type: 'url' },
  { key: 'linkedin', name: 'LinkedIn', type: 'url' },
  { key: 'tiktok', name: 'TikTok', type: 'url' }
]

const STATIC_ROWS = [
  {
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@email.com',
    phone: '06.66.66.66.66',
    age: 35,
    facebook: 'facebook.com/john_doe',
    instagram: 'instagram.com/john_doe',
    twitter: 'twitter.com/john_doe',
    linkedin: 'linkedin.com/john_doe',
    tiktok: 'tiktok.com/john_doe'
  },
  {
    id: '2',
    firstname: 'Jane',
    lastname: 'Due',
    email: 'jane.due@email.com',
    phone: '07.77.77.77.77',
    age: 30,
    facebook: 'facebook.com/jane_due',
    instagram: 'instagram.com/jane_due',
    twitter: 'twitter.com/jane_due',
    linkedin: 'linkedin.com/jane_due',
    tiktok: 'tiktok.com/jane_due'
  },
  {
    id: '3',
    firstname: 'Jack',
    lastname: 'Die',
    email: 'jack.die@email.com',
    phone: '08.88.88.88.88',
    age: 40,
    facebook: 'facebook.com/jack_die',
    instagram: 'instagram.com/jack_die',
    twitter: 'twitter.com/jack_die',
    linkedin: 'linkedin.com/jack_die',
    tiktok: 'tiktok.com/jack_die'
  }
]

const Index = () => {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col">
      <div className="w-2/3 mx-auto">
        <h1 className="text-4xl mt-20 mb-4">
          Manage your contacts and marketing campaigns in a single place
        </h1>
        <p className="mb-20 text-xl">
          Handle LinkedIn & Emails contacts to create better campaigns
        </p>
        <button
          className="px-12 py-4 rounded bg-black text-white"
          onClick={signOut}
        >
          Logout
        </button>
        <pre className="p-2 bg-gray-200">
          {JSON.stringify(session, null, 2)}
        </pre>
        <DataTable headers={headers} rows={STATIC_ROWS} editable />
      </div>
    </div>
  )
}

export default withAuthProtect(Index, Landing)
