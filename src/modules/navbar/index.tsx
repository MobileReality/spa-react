import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/onboarding">Onboarding</NavLink>
      </li>
    </ul>
  )
}
