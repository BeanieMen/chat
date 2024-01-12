import { MenuDropDown } from "./Menu"
import { Button } from "@/components/ui/button"
import Image from "next/image"


export default function Navbar() {
    return (
        <nav className="w-full bg-slate-950 relative flex rounded-b-2x">
            <div className="w-full flex justify-between items-center px-4 py-4">
                <div className="flex gap-4">
                    <Image src="https://static.thenounproject.com/png/4168297-200.png" className="flex items-center  invert" alt='icon' width={50} height={50} />
                    <h1 className="text-3xl flex items-center">DunstCord</h1>
                </div>
                <div className="flex gap-4">
                    <MenuDropDown></MenuDropDown>
                </div>
            </div>
        </nav>
    )
}