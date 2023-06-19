import Tooltip from "./Tooltip"

export default function About() {

    return (
        <section id="about" className="lg:mb-20 mb-10 scroll-mt-16">
            <div className="sticky top-0 z-20 -mx-6 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">About Me</h2>
            </div>
            <div className="lg:text-lg">
                <p className="mb-4 ">In 2013, I decided to join a VEX Robotics team through my school which has lead me to the position I am in today. Initially driven by the ideal of becoming a mechanical engineer, I quickly developed a passion for programming that has guided me ever since. Throughout my robotics involvement, I have had the privilege of establishing an <a href="https://www.instagram.com/blizzardalliance/" target="_blank" className="text-slate-200 hover:text-cyan-600 transition-colors">international robotics alliance</a>, creating the first <a href="https://www.nku.edu/academics/informatics/beyond/student-organizations/nukerobotics.html" target="_blank" className="text-slate-200 hover:text-yellow-400 transition-colors">competitive robotics program at Northern Kentucky University</a>, and representing the VEX Robotics Competition when addressing various companies.</p>
                <p className="">Currently I am finishing my degree at Northern Kentucky University, set to graduate in Spring 2024. Additionally, I have an internship as a service technician at <a href="https://www.gbs-inc.com" target="_blank" className="text-slate-200 hover:text-cyan-600 transition-colors">Global Business Solutions</a>. In my free time I enjoy refereeing for a few VEX Robotics high school tournaments, and hiking, or attending / watching <Tooltip message={"Heja BVB!"}><a className="text-slate-200 hover:text-yellow-400">soccer games</a>.</Tooltip></p>
            </div>
        </section >
    )
}