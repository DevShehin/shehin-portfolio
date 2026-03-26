function Projects() {
    const projects = [
        {
            title: "Weather Dashboard",
            description: "Real-time weather app with 5-day forecast, live API integration, and dynamic UI that changes based on weather conditions.",
            tech: ["React", "OpenWeather API", "Tailwind CSS", "useEffect"],
            live: "https://weather-dashboard-theta-topaz.vercel.app/",
            github: "https://github.com/DevShehin/weather-dashboard",
            color: "blue"
        },
        {
           title: "QTrip Dynamic",
           description: "Full-stack travel booking application with dynamic city exploration, adventure filtering, and reservation system powered by REST APIs and deployed on Vercel & Render.",
           tech: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "REST API", "Vercel", "Render"],
          live: "https://shehinshajahan1998-me-qtripdynamic.vercel.app/",
          github: "https://github.com/DevShehin/shehinshajahan1998-ME_QTRIPDYNAMIC",
          color: "amber"
        }
        {
            title: "Job Board App",
            description: "Browse and filter real remote job listings. Search by keyword, filter by category, and save favourites with Local Storage.",
            tech: ["React", "Remotive API", "React Hooks", "Local Storage"],
            live: "#",
            github: "#",
            color: "green"
        },
        {
            title: "React Shop",
            description: "Full e-commerce frontend with product listing, cart management, and checkout flow using Context API for global state.",
            tech: ["React", "Context API", "Fake Store API", "React Router"],
            live: "#",
            github: "#",
            color: "purple"
        },
        {
            title: "Analytics Dashboard",
            description: "Business analytics dashboard with interactive charts, stat cards, and data visualisation built for real-world use cases.",
            tech: ["React", "Recharts", "Tailwind CSS", "Mock Data"],
            live: "#",
            github: "#",
            color: "orange"
        },
        {
            title: "Social Blog Platform",
            description: "Full-featured blog with post feed, create/edit posts, comments, and likes. Demonstrates complete CRUD operations in React.",
            tech: ["React", "JSONPlaceholder API", "Custom Hooks", "CRUD"],
            live: "#",
            github: "#",
            color: "pink"
        },
        {
            title: "QTrip Static",
            description: "Responsive Airbnb-style travel website built with HTML, CSS and Bootstrap. First deployed project — live on Vercel.",
            tech: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
            live: "https://shehinshajahan1998-me-qtripstatic-pj34cw0jc-devshehins-projects.vercel.app/",
            github: "#",
            color: "teal"
        },
    ]

    const colorMap = {
        blue: "border-blue-500 text-blue-400",
        green: "border-green-500 text-green-400",
        purple: "border-purple-500 text-purple-400",
        orange: "border-orange-500 text-orange-400",
        pink: "border-pink-500 text-pink-400",
        teal: "border-teal-500 text-teal-400",
    }

    return (
        <section id="projects" className="bg-gray-900 py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Things I have built
                    </p>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`bg-gray-800 rounded-xl p-6 border-t-4 ${colorMap[project.color]} border border-gray-700 hover:border-gray-500 transition flex flex-col justify-between`}
                        >

                            {/* Top */}
                            <div>
                                <h3 className={`text-xl font-bold mb-3 ${colorMap[project.color].split(' ')[1]}`}>
                                    {project.title}

                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                <a href={project.live}
                                    target="_blank"
                                    className="flex-1 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg transition">
                                    Live Demo
                                </a>
                                <a href={project.github}
                                    target="_blank"
                                    className="flex-1 text-center border border-gray-600 hover:border-gray-400 text-gray-300 text-sm font-semibold py-2 rounded-lg transition"
                                >
                                    GitHub
                                </a>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects
