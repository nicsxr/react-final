import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base = "px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-700";
  const active = "text-white bg-blue-500";

  return (
    <nav className="flex gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => `${base} ${isActive ? active : "text-blue-600 dark:text-blue-300"}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/people"
        className={({ isActive }) => `${base} ${isActive ? active : "text-blue-600 dark:text-blue-300"}`}
      >
        People
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => `${base} ${isActive ? active : "text-blue-600 dark:text-blue-300"}`}
      >
        Saved People
      </NavLink>
    </nav>
  );
}