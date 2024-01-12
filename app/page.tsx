'use client'
import { SignUpButton } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex-col mt-20 text-center mx-5">
        <h1 className="mx-auto text-3xl max-w-screen-md">
          <span className="text-5xl text-left">
            DunstCord <br />
            <span className="text-2xl font-thin leading-tight">
              DunstCord is like your coolest hangout spot online. It's where
              you meet awesome people, share cool stuff, and have a blast. With
              fun features and an easy vibe, DunstCord makes connecting super
              chill. It's all about good times, great friends, and making
              memories in the digital world! 🚀✨
            </span>
          </span>
        </h1>

        <div>
          <h1 className="justify-center mt-20 font-bold">Ready to start?</h1>
          <SignUpButton className="mt-2 rounded-3xl bg-sky-500 hover:bg-sky-700 py-2 px-3" />
        </div>
      </div>
    </main>
  );
}
