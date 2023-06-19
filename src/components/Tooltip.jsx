export default function Tooltip({ message, children }) {
    return (
    <span className="group">
        {children}
        <span className="absolute scale-0 transition-all rounded bg-slate-800 p-2 text-sm text-white group-hover:scale-100">{message}</span>
    </span>
    )
}