import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold px-4 py-2 rounded bg-blue-600'
      : 'text-blue-600 hover:text-white hover:bg-blue-600 px-4 py-2 rounded transition';

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-700">Campus Club Finder</div>
        <div className="space-x-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/clubs" className={linkClass}>Clubs</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}
