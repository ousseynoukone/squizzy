
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteUserData } from '../../utils/storage.js';
import { getUsername, getUserAvatar } from '../../utils/utils.js';

export default function NavBar({ isPPShown = true,  }) {
  const avatar = getUserAvatar() || "https://i.pravatar.cc/40?img=47"
  const navigate = useNavigate();

  function logout() {
    deleteUserData();
    navigate('/');
  }


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
        
    {isPPShown && (

      <>
        <NavLink
        to="/profile"
          type="button"
          className="flex items-center gap-3 rounded-full border border-white/60 bg-white px-4 py-1.5 shadow-sm transition hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]"
        >
            <span className="text-sm font-medium text-slate-700">{getUsername()}</span>
            <img
              src={avatar}
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover"
            />  
        </NavLink>

        <button
          onClick={logout}
          type="button"
          className="flex items-center gap-3   rounded-full border border-white/60 bg-red-900 text-white px-5 py-1.5 shadow-sm transition hover:shadow-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]"
        >
          Déconnexion


        </button>


      </>
    )}

      </div>
    </header>
  )
}