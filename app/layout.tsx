'use client'
import '@/styles/globals.css'
import { PrivyProvider } from '@privy-io/react-auth'

const App = ({ children }: { children: React.ReactNode }) => {
	return (
		<PrivyProvider
			appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
			config={{
				loginMethods: ['farcaster'],
				embeddedWallets: {
					createOnLogin: 'all-users',
				},
			}}
		>
			{children}
		</PrivyProvider>
	)
}

export default App
