

export default function Navbar() {
    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-4 w-max">
                {[
                    ['About', '#about'],
                    ['Projects', '#projects'],
                    ['Skills', '#skills'],
                    ['Contact', '#contact'],
                ].map(([title, url]) => (
                    <li>
                        <a href={url} className="group flex items-center py-1">
                            <span className="nav-text py-1 text-xs font-bold uppercase tracking-tight text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200 rounded-lg group-hover:bg-slate-800 group-hover:px-3 transition-all motion-reduce:transition-none">
                                {title}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}