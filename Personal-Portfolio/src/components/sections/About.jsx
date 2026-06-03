export const About = () =>{

    const frontSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "TypeScript", "TailwindCSS" ];
    return (
        <section id="about" className="min-h-screen flex items-center justify-centerpy-20">
<div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold bb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text
    text-transparent text-center">About Me

    </h2>

    <div  className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all" >
        <p className="text-gray-300 mb-6">
            Being a programmer is being a master of your craft.
            I want to enjoy my work, feel satisfied with the tasks I complete, and see the results of my efforts.
            In today's world, the opportunities for programmers are almost limitless.
            Depending on your experience and skills, you can work in various fields,
            from game development to creating complex artificial intelligence systems.
        </p>


        <div className="grid grid-cols-1 gap-6">
            <div className="mt-8 flex flex-col items-center">
                <h3 className="text-xl font-bold tracking-wide mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2  ">
                    {frontSkills.map((item, index) => (
                        <span
                            key={index}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold md-4">Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    <strong> training at the training center(2024-2026) </strong>
                </li>
            </ul>
        </div>
        <div className=" p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold md-4">Work Experience</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                    internship at the training center (2026-2027)
                </li>
            </ul>

        </div>
    </div>
</div>

        </section>
    )
}