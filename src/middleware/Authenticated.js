export default function Authenticated({ children }) {
  const ok = JSON.parse(localStorage.getItem('session'));
  console.log(ok);

  // if (ok) {
  //   // Redirect them to the /login page, but save the current location they were
  //   // trying to go to when they were redirected. This allows us to send them
  //   // along to that page after they login, which is a nicer user experience
  //   // than dropping them off on the home page.
  //   return <Navigate to="/dashboard" />;
  // } else {
  //   window.location.href = 'http://apps.pins.co.id/';
  // }

  return children;
}
