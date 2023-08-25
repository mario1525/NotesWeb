import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>
            login
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            go out
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            clothes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
