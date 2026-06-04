

export const Home = () => {
    return <section id="home" className=" min-h-screen  flex items-center justify-center relative">

<div className="text-center z-10 px-4">
<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Michail Lappo</h1>

   <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
       I am a web developer with a passion for creating fast, scalable, and intuitive user interfaces.
       I specialize in the modern JavaScript ecosystem (ES6+), and I have a strong understanding of object-oriented
       and functional programming principles. My approach is based on clean code,
       strict adherence to standards (ESLint, Prettier),
       and effective team collaboration through version control systems (Git).
   </p>
    <div className="flex justify-center space-x-4">
        <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition
       relative overflow-hidden hover:-translate-y-0.5
       hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
        <a href="#contact" className="border border-blue-500/50 text-blue-50 py-3 px-6 rounded font-medium transition-all
        duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
        hover:bg-blue-500/10">Contact Me</a>
    </div>

</div>

    </section>
}