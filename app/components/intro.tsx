import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
            <div>
                <Image className="object-cover h-full w-full blur-[10rem] sm:w-[68.75rem]" src="/app/public/profilePicture.png" alt="Charles Poulin" width={192} height={192} quality={95} priority={true}/>
            </div>
            </div>
    </section>
  )
}
