import { NavLink } from 'react-router-dom'

import { ROUTES } from '../routes'

export const Navbar = () => {
  return (
    <ul className="nav">
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.ONBOARDING}>Onboarding</NavLink>
      </li>
    </ul>
  )
}
