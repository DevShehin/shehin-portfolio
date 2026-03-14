function Footer() {
    return (
        <section id="contact" className="bg-gray-800 py-20 px-6 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-gray-400 text-lg mb-3">Feel free to reach out</p>
                <div className="w-16 h-1 bg-blue-500 mx-auto mb-12"></div>

                {/* Message */}
                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                    I am actively looking for frontend developer roles in Kerala and Bangalore.
                    Whether you have a job opportunity, a project, or just want to say hello —
                    my inbox is always open!
                </p>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                    <a href="mailto:shehinshajahan1998@gmail.com"
                        className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
                    >
                        <div className="text-3xl mb-3">📧</div>
                        <div className="text-blue-400 font-semibold mb-1">Email</div>
                        <div className="text-gray-400 text-sm">shehinshajahan1998@gmail.com</div>
                    </a>


                    <a href="https://linkedin.com/in/devshehin"
                        target="_blank"
                        className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
                    >
                        <div className="text-3xl mb-3">💼</div>
                        <div className="text-blue-400 font-semibold mb-1">LinkedIn</div>
                        <div className="text-gray-400 text-sm">linkedin.com/in/devshehin</div>
                    </a>


                    <a href="https://github.com/DevShehin"
                        target="_blank"
                        className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition"
                    >
                        <div className="text-3xl mb-3">💻</div>
                        <div className="text-blue-400 font-semibold mb-1">GitHub</div>
                        <div className="text-gray-400 text-sm">github.com/DevShehin</div>
                    </a>
                </div>

                {/* Big CTA Button */}

                <a href="mailto:shehinshajahan1998@gmail.com?subject=Hello Shehin&body=Hi Shehin, I saw your portfolio and would like to connect"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-xl text-lg transition mb-16"
                >
                    Say Hello 👋
                </a>

                {/* Bottom bar */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-gray-500 text-sm">
                        © 2026 Shehin S Shajahan · Built with React & Tailwind CSS
                    </p>
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://github.com/DevShehin" target="_blank" className="text-gray-500 hover:text-blue-400 text-sm transition">GitHub</a>
                        <a href="https://linkedin.com/in/devshehin" target="_blank" className="text-gray-500 hover:text-blue-400 text-sm transition">LinkedIn</a>
                        <a href="mailto:shehinshajahan1998@gmail.com" className="text-gray-500 hover:text-blue-400 text-sm transition">Email</a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer