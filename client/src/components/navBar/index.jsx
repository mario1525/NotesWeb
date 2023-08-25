import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>
            shopi
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            all
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            clothes
          </NavLink>
        </li>
        <li>
          <NavLink to='/'>
            electronics
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
