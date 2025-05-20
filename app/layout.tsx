import type { Metadata } from 'next'
import './globals.css'
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
