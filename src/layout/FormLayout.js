import { NavLink, Outlet } from "react-router-dom";


export default function FormLayout() {
  return (
    <div>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}
