import { Link, Outlet } from 'react-router-dom'

export const Onboarding = () => {
  return (
    <div>
      <h1>Onboarding Screen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero
        laudantium repella
      </p>
      <ul>
        <li>
          <Link to="sub-one">SubOne</Link>
        </li>
        <li>
          <Link to="sub-two">SubTwo</Link>
        </li>
      </ul>
      {/* nested route placement */}
      <Outlet />
    </div>
  )
}
