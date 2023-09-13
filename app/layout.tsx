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
        {/* <div className="bg-gradient-to-br from-[#ff5733] via-transparent to-[#ffcc29] -z-10 absolute top-[-1rem]  h-full w-full  rounded-lg blur-5 sm:w-40rem z-[-5]"></div> */}

        <div className="bg-[#dbd7fb] -z-10 absolute top-[-51rem] left-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

<div className="bg-gradient-to-br from-[#ff5733] via-transparent to-[#ffcc29] absolute top-[90rem] left-[20rem] h-[90rem] w-full rounded-lg blur-[5rem] sm:w-[90rem] z-[-5]"></div>

<div className="bg-[#dbd7fb] -z-10 absolute top-[61.25rem] left-[15rem] h-[20rem] w-[20rem] rounded-full blur-[5rem] sm:w-[30rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

    <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
