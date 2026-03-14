function Skills() {
    const skills = [
        { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"] },
        { category: "React", items: ["React.js", "Hooks", "React Router", "Context API"] },
        { category: "Styling", items: ["Tailwind CSS", "Bootstrap", "Material UI", "Flexbox & Grid"] },
        { category: "Tools", items: ["Git & GitHub", "VS Code", "Netlify", "Vercel"] },
        { category: "GIS", items: ["ArcGIS", "QGIS", "WebGIS", "R Programming"] },
        { category: "Learning", items: ["TypeScript", "Next.js", "React Query", "Jest"] },
    ]

    return (
        <section id="skills" className="bg-gray-800 py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Technical Skills

                    </h2>
                    <p className="text-gray-400 text-lg">What I bring to the table</p>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition">
                            <h3 className="text-blue-400 font-semibold text-lg mb-4">
                                {skill.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills