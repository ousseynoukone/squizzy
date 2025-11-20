import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUserData } from '../../../utils/storage';
import Button from '../../UI/button';

// Liste d'avatars de placeholder
const avatarOptions = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=6',
];

const ProfileSetup = () => {
  const [username, setUsername] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(avatarOptions[0]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && selectedAvatar) {
      saveUserData(username.trim(), selectedAvatar);
      navigate('/theme-selection');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl w-full bg-white p-10 rounded-xl shadow-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Créez votre Profil
        </h1>
        <p className="text-gray-600 mb-8">
          Choisissez un pseudo et un avatar pour commencer à jouer.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
              Votre Pseudo
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ex: AlexA, Léa, Hugo"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>

          <div className="mb-8">
            <label className="block text-lg font-medium text-gray-700 mb-3">
              Choisissez votre Avatar
            </label>
            <div className="flex justify-center space-x-4">
              {avatarOptions.map((avatarUrl) => (
                <img
                  key={avatarUrl}
                  src={avatarUrl}
                  alt="Avatar option"
                  className={`w-16 h-16 rounded-full cursor-pointer transition duration-200 ${
                    selectedAvatar === avatarUrl ? 'ring-4 ring-blue-500 ring-offset-2' : 'hover:opacity-80'
                  }`}
                  onClick={() => setSelectedAvatar(avatarUrl)}
                />
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full py-3 text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300">
            Valider et Commencer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
