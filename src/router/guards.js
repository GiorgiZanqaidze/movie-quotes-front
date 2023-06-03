export function isAuthenticated() {
  if (!token) {
    return '/'
  }
}

export function guest() {
  if (token) {
    return '/news-feed'
  }
}
