
export default function Projects() {
    return (
        <section id="projects">
            <div className="sticky top-0 z-20 -mx-6 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul>
                    <li className="mb-16">
                        <a href="https://www.github.com/NUKE-robotics" target="_blank">
                            <div className="flex relative h-60">
                                <picture>
                                    <source media="(min-width: 768px)" srcset="./NUKEBanner.png" />
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-all motion-reduce:transition-none" src="./NUKE.jpg" />
                                </picture>
                                <div className="px-4 py-4 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-95 lg:opacity-0 hover:opacity-95 transition-all motion-reduce:transition-none">
                                    <h2 className="tracking-wide text-sm title-font font-medium text-cyan-600 mb-1">
                                        C++ [PROS Library]
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-slate-200 mb-3">
                                        NUKE Robotics
                                    </h1>
                                    <p className="leading-relaxed text-slate-400">I founded a competitive robotics program at Northern Kentucky University. My roles on the team included: President, Programmer, and Driver.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="mb-16">
                        <a href="https://github.com/sdy329/kvs-bot" target="_blank">
                            <div className="flex relative h-60">
                                <picture>
                                    <source media="(min-width: 768px)" srcset="./KVSBanner.png" />
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-all motion-reduce:transition-none" src="./KVS.png" />
                                </picture>
                                <div className="px-4 py-4 sm:px-8 sm:py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-95 lg:opacity-0 hover:opacity-95 transition-all motion-reduce:transition-none">
                                    <h2 className="tracking-wide text-sm title-font font-medium text-cyan-600 mb-1">
                                        TypeScript
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-slate-200 mb-3">
                                        KVS Bot
                                    </h1>
                                    <p className="leading-relaxed text-slate-400">Discord Bot I develop to help with moderation of the Kentucky VEX Server.</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}