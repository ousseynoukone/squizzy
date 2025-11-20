export function getUsername() {
  return localStorage.getItem("username") || null
}

export function getUserAvatar() {
  return localStorage.getItem("userAvatar") || null
}

export function setUserAvatar(avatarUrl) {
  localStorage.setItem("userAvatar", avatarUrl)
}