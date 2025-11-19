// Utilitaires pour la gestion du stockage localStorage

// Sauvegarder l'historique d'un quiz
export function saveQuizHistory(quizData) {
  const history = getQuizHistory()
  const newEntry = {
    id: Date.now(),
    ...quizData,
    date: new Date().toISOString(),
  }
  history.unshift(newEntry) // Ajouter au début
  // Garder seulement les 50 derniers quiz
  const limitedHistory = history.slice(0, 50)
  localStorage.setItem('quizHistory', JSON.stringify(limitedHistory))
  return newEntry
}

// Récupérer tout l'historique des quiz
export function getQuizHistory() {
  const history = localStorage.getItem('quizHistory')
  return history ? JSON.parse(history) : []
}

// Récupérer les données utilisateur
export function getUserData() {
  const username = localStorage.getItem('username')
  const avatar = localStorage.getItem('userAvatar')
  return {
    username: username || null,
    avatar: avatar || null,
  }
}

// Sauvegarder les données utilisateur
export function saveUserData(username, avatar) {
  localStorage.setItem('username', username)
  localStorage.setItem('userAvatar', avatar)
}

// Vérifier si un utilisateur existe
export function userExists() {
  const username = localStorage.getItem('username')
  return !!username
}

// Supprimer un quiz de l'historique par ID
export function deleteQuizHistory(quizId) {
  const history = getQuizHistory()
  const filtered = history.filter(quiz => quiz.id !== quizId)
  localStorage.setItem('quizHistory', JSON.stringify(filtered))
  return filtered
}

// Supprimer tout l'historique
export function clearAllQuizHistory() {
  localStorage.setItem('quizHistory', JSON.stringify([]))
  return []
}

