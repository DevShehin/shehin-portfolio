import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between item-center">

                { /*logo*/}
                <h1 className="text-xl font-bold text-blue-400">DevShe.dev</h1>

                { /* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li><a href="#home" className="hover:text-blue-400 transition"> Home </a></li>
                    <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'X' : '☰'}
                </button>
            </div>

            { /* Mobile Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-gray-800 px-6 py-4 flex flex-col  gap-4 text-sm">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-blue-400"> Home </a></li>
                    <li><a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Skills</a></li>
                    <li><a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Projects</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">Contact</a></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar