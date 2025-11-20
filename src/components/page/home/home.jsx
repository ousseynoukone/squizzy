import { NavLink, useNavigate } from 'react-router-dom';
import { userExists } from '../../../utils/storage';
export default function Home () {
  const navigate = useNavigate();

  function navigateToHome() {
    userExists() ? navigate('/theme') : navigate('/login');
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-2">
      <div className="w-full  mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0">
        
        {/* Colonne de gauche : Contenu explicatif */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <div className="text-center md:text-left mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-3">
              Bienvenue sur <span className="text-gray-800">Squizzy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Le quiz moderne pour apprendre en s'amusant.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-3 mb-6">
              Comment ça marche ?
            </h2>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">1</div>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Choisissez votre thème :</span> Explorez une variété de sujets pour tester vos connaissances.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">2</div>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Sélectionnez la difficulté :</span> Adaptez le challenge à votre niveau (Facile, Moyen, Difficile).
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">3</div>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Répondez rapidement :</span> Chaque question est chronométrée pour pimenter le jeu.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">4</div>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Évaluez vos résultats :</span> Suivez votre progression avec un score détaillé.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center md:text-left">
            <button to="/theme" onClick={navigateToHome} className="px-10 py-4 text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition duration-300">
              Commencer l'Aventure
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-10">
            <div className="text-white text-center">
                <svg className="w-48 h-48 mx-auto mb-6 text-blue-200 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707.707M12 21v-1m0-16a9 9 0 110 18 9 9 0 010-18z"></path></svg>
                <h2 className="text-3xl font-bold mb-2">Prêt à relever le défi ?</h2>
                <p className="text-lg text-blue-100 max-w-sm mx-auto">
                    Des milliers de questions vous attendent pour tester votre culture générale et vous amuser.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};



