

export const Projects = () => {
    return <section id="projects"
                     className="min-h-screen flex flex-wrap items-center justify-center py-20  ">

        <div className=" max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
    text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className=" text-xl font-bold mb-2">
                        future project-1
                    </h3>
                    <div className="flex justify-between items-center  ">
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className=" text-xl font-bold mb-2">
                        future project-2
                    </h3>
                    <div className="flex justify-between items-center  ">
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className=" text-xl font-bold mb-2">
                        future project-3
                    </h3>
                    <div className="flex justify-between items-center  ">
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">View Project </a>
                    </div>
                </div>
                <div className="p-6 rounded border border-white/10 hover:-translate-y-1 hover:border-blue-500/30
         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className=" text-xl font-bold mb-2">
                        future project-4
                    </h3>
                    <div className="flex justify-between items-center  ">
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">View Project </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
}