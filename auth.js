// Grecian Gusts — Auth Guard
// Runs before page renders. Redirects to /login if not authenticated.
(function () {
  if (!sessionStorage.getItem('gg_auth')) {
    var path = location.pathname.replace(/\/$/, '') || '/';
    if (path !== '/login') {
      location.replace('/login?next=' + encodeURIComponent(path));
    }
  }
})();
