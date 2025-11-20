import React from 'react';
import FormConnection from "./forum.jsx";

const Connexion = ({ onComplete }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0">

        {/* Colonne de gauche : Formulaire de connexion */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-lg font-semibold text-white">
                  SQ
                </div>
                <span className="text-3xl font-semibold tracking-widest text-slate-900">
                  SQUIZZY
                </span>
              </div>
              <p className="text-md text-slate-500">
                Le quiz moderne pour apprendre en s'amusant.
              </p>
            </div>

            <div className="text-lg font-medium text-slate-700">
              Qui êtes-vous ?
            </div>
            <FormConnection onComplete={onComplete} />
          </div>
        </div>

        {/* Colonne de droite : Visuel créatif */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-10">
            <div className="text-white text-center">
                <svg className="w-48 h-48 mx-auto mb-6 text-blue-200 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h2 className="text-3xl font-bold mb-2">Personnalisez votre expérience</h2>
                <p className="text-lg text-blue-100 max-w-sm mx-auto">
                    Choisissez un pseudo et un avatar pour que vos amis puissent vous reconnaître et suivre vos exploits.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Connexion;