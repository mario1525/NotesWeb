import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../home/myHome'
import MyLogin from '../login/myLogin'
import MyNotes from '../notes/myNotes'

// import '../../App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <MyLogin />
    },
    {
      path: '/notes',
      element: <MyNotes />
    }
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

