import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from '../components';

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
      {!isHome && <Navbar />}
      <Outlet />
    </main>
  );
}
