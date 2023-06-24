// pages/api/auth/[...auth0].js
import { handleAuth, handleLogout } from '@auth0/nextjs-auth0';

export default handleAuth({
  logout: handleLogout({ returnTo: process.env.AUTH0_LOGOUT_URL }),
});