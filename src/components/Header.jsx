import Navbar from "./Navbar";
import Socials from "./Socials";
import Title from "./Title"

export default function Header() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <Title />
                <Navbar />
            </div>
            <Socials />
        </header>
    )
}