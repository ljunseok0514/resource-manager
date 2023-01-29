function authenticator({ auth, pageAuth, page, wrongAccessPage }) {
  if (Array.isArray(pageAuth)) {
    for (let i = 0; i < pageAuth.length; i++) {
      if (pageAuth[i] === auth) {
        return [page, 1];
      }
    }
    return [wrongAccessPage, 0];
  }

  if (pageAuth !== "common" && auth !== pageAuth) {
    return [wrongAccessPage, 0];
  }

  return [page, 1];
}

export default authenticator;
