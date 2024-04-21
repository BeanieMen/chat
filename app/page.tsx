import { auth, SignInButton } from '@clerk/nextjs'
import { Questrial } from 'next/font/google'
import { Hepta_Slab } from 'next/font/google'
import { redirect } from 'next/navigation'

const questrial = Questrial({ weight: '400', subsets: ['latin'] })
const hepta = Hepta_Slab({ weight: '800', subsets: ['latin'] })

export default function Home() {
  const user = auth().userId
  if (user) redirect('/home')
  else {
    return (
      <div>
        <div className="flex-col">
          <div className="overflow-hidden">
            <ul id="background">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <div className="p-5 pt-8 w-full h-fit">
                <div className="flex mx-auto justify-between max-w-4xl h-10 items-center">
                  <div className={`text-3xl ${questrial.className}`}>
                    💩 Shitcord
                  </div>
                  <SignInButton className="rounded-full text-black bg-white hover:bg-white hover:text-blue-500 px-4 md:px-6 h-full py-2">
                    Open Shitcord
                  </SignInButton>
                </div>
                <div className="flex mx-auto max-w-3xl flex-col h-[100vh]">
                  <div className="my-auto">
                    <div className="flex flex-col -mt-20">
                      <div
                        className={`text-2xl lg:text-6xl w-full lg:text-center  ${hepta.className}`}
                      >
                        IMAGINE A PLACE...
                      </div>
                      <div className="w-full lg:text-center mt-5 lg:text-2xl font-light">
                        ...where you can unleash the ultimate memes, shitpost,
                        raid boss-level copypastas, and fire off dank reactions
                        24/7.
                      </div>
                      <SignInButton className="rounded-full mt-5 w-fit py-4 px-5 mx-auto bg-black hover:bg-black hover:text-blue-500 text-white">
                        Open Shitcord
                      </SignInButton>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* padded space
      <div className="h-[100vh] w-screen"></div>
      <div>
        <footer className="text-center mt-8">
          <p>Created with ❤️ by Your Name</p>
        </footer>
      </div> */}
      </div>
    )
  }
}
