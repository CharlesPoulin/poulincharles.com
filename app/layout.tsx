import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: " Charles Poulin | Portfolio",
  description: 'Charles Poulin is studying software engineering and is based in Montreal, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'{$inter.className} bg-gray-50 text-gray-950'}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div></div>
        {children}
        </body>
    </html>
  )
}
