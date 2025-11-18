function button({ type = "button", children, onClick, className = "" , background = "#2563EB", text="text-white"}) {
    const classNameDefault = `rounded-full px-10 py-2.5 text-sm font-semibold shadow-md transition hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[${background}]/60 ${text} bg-[${background}]`
    className = className ? className : classNameDefault
    return (
        <button
        type={type}
        onClick={onClick}
        className={`${className}`}
        >
        {children}
        </button>
    )
}

export default button