import { SessionProvider } from 'next-auth/react'
import '../global.css'

export default function NextApp({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
