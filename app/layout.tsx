import Header from './components/header'
import ActiveSectionContextProvider from './context/active-section-context'
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
    <html lang="en" className='!scroll-smooth'>
      <body className={'{$inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt:36'}>
        <div className="bg-[#eb8286] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
