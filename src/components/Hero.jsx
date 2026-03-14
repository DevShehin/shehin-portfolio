import { useState, useEffect } from 'react'

function Hero() {
    const roles = ['Frontend Developer', 'React Developer', 'GIS Specialist', 'UI/UX Enthusiast']
    const [currentRole, setCurrentRole] = useState('')
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!deleting) {
                if (charIndex < current.length) {
                    setCurrentRole(current.slice(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                } else {
                    setTimeout(() => setDeleting(true), 1500)
                }
            } else {
                if (charIndex > 0) {
                    setCurrentRole(current.slice(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                } else {
                    setDeleting(false)
                    setRoleIndex((roleIndex + 1) % roles.length)
                }
            }
        }, deleting ? 40 : 80)
        return () => clearTimeout(timeout)
    }, [charIndex, deleting, roleIndex])


    return (
        <section id="home" className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">

                {/* Greeting */}
                <p className="text-blue-400 text-lg font-medium mb-4">
                    Hi, I’m
                </p>

                {/* Name */}
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    Shehin S Shajahan👋
                </h1>

                {/* Role */}
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-10">
                    <span className="text-blue-400">{currentRole}</span>
                    <span className="animate-pulse text-blue-400">|</span>
                </h2>


                {/* Description */}
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    I build fast, responsive web applications with React and JavaScript.
                    With a rare combination of frontend development and GIS expertise,
                    I bring a unique perspective to data-rich, visual interfaces —
                    from interactive maps to dynamic dashboards. Nearly 3 years of
                    professional experience at Wipro, 6 projects shipped, and
                    always learning.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition">
                        View My Projects
                    </a>
                    <a href="#contact" className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-8 py-3 rounded-lg transition">
                        Contact Me
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mt-10 text-gray-400 text-sm">
                    <a href="https://github.com/DevShehin" target="_blank" className="hover:text-blue-400 transition">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/devshehin" target="_blank" className="hover:text-blue-400 transition">
                        LinkedIn
                    </a>
                    <a href="mailto:shehinshajahan1998@gmail.com" className="hover:text-blue-400 transition">
                        Email
                    </a>
                </div>

            </div>
        </section>
    )
}
export default Hero 