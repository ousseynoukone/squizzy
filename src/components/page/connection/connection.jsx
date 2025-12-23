import FormConnection from "./connection-form.jsx"

export default function Connexion() {
  return (
    <div className="min-h-screen bg-[#F4F6FB] flex w-full items-center justify-center py-16">
      <div className="w-full max-w-3xl rounded-3xl bg-white px-12 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-semibold text-white">
                SQ
              </div>
              <span className="text-2xl font-semibold tracking-[0.18em] text-slate-900">
                SQUIZZY
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Le quiz moderne pour apprendre en s&apos;amusant.
            </p>
          </div>

          <div className="text-sm font-medium text-slate-600">
            Qui êtes-vous ?
          </div>
          <FormConnection />
        </div>
      </div>
    </div>
  )
}
