
export default function NavBar() {
  return (
    <header className="w-full py-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3 rounded-full border border-white/50 bg-white px-3 py-2 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-semibold text-white">
            SQ
          </div>
          <span className="text-lg font-semibold tracking-[0.18em] text-slate-900">
            SQUIZZY
          </span>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white px-4 py-1.5 shadow-sm">
          <span className="text-sm font-medium text-slate-700">Léa</span>
          <img
            src="https://i.pravatar.cc/40?img=47"
            alt="Avatar"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>

      </div>
    </header>
  )
}