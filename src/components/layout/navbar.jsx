import { NavLink, useNavigate } from "react-router-dom";
import { deleteUserData, userExists } from "../../utils/storage.js";
import { getUsername, getUserAvatar } from "../../utils/utils.js";

export default function NavBar() {
  const navigate = useNavigate();
  const avatar =
    getUserAvatar() || "https://i.pravatar.cc/40?img=47";

  function logout() {
    deleteUserData();
    navigate("/");
  }

  if (!userExists()) return null;

  const navItemClasses = ({ isActive }) =>
    `flex items-center gap-2 rounded-full px-4 py-1.5 text-sm  transition cursor-pointer
     border shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 
     focus-visible:ring-[#2563EB40]
     ${
       isActive
         ? "bg-[#2563EB] text-white border-[#2563EB]"
         : "bg-white border-white/60 text-slate-700"
     }`;

  return (
    <header className="w-full sticky top-0 z-40 bg-white/10 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-2">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-full border border-white/50 bg-white px-3 py-2 shadow-sm"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#2563EB] text-sm font-semibold text-white">
            SQ
          </div>
          <span className="text-lg font-semibold tracking-[0.18em] text-slate-900">
            SQUIZZY
          </span>
        </NavLink>

        <nav className="flex items-center gap-4">

          <NavLink to="/theme" className={navItemClasses}>
            <i className="fa-solid fa-gamepad"></i>
            Thèmes
          </NavLink>
          
          
          <NavLink to="/profile" className={navItemClasses}>
            <span className="text-sm font-medium">{getUsername()}</span>
            <img
              src={avatar}
              alt="Avatar"
              className="h-9 w-9 rounded-full object-cover"
            />
          </NavLink>


          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm
                       bg-white border border-white/60 text-slate-700 shadow-sm
                       hover:shadow-md transition cursor-pointer
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB40]"
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            Déconnexion
          </button>
        </nav>
      </div>
    </header>
  );
}
