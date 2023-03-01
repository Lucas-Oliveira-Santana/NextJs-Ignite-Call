import { queryClient } from '@/lib/react-query'
import '../lib/dayjs'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function App({
      Component,
      pageProps: { session, ...pageProps },
    }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
