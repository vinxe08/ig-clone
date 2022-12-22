import TopBar from './TopBar'
import '../styles/globals.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head />
      <body>
          {children}
      </body>
    </html>
  )
}
