import '../styles/global.css'
import { Metadata } from 'next'
import Navigation from '../components/navigation'
import AuthBox from '../components/auth/auth'

export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The Best movies on the best framework',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <AuthBox />
        {children}
      </body>
    </html>
  )
}
