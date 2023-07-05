import { BrowserRouter,  Link, NavLink, Route, Routes } from 'react-router-dom'
import Prime from './Prime'
import Form from './Form'
const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="container">
          <div className="logo"></div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <Link to="/Form">Register</Link>
              </li>
              <li>
                <Link to="/Prime">Prime</Link>         
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
      <Route path='/Form' element={<Form />}></Route>
        <Route path='/Prime' element={<Prime />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default Navbar