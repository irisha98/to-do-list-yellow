
import { NavLink } from 'react-router-dom';
import './App.css'; 

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-link'>Home</NavLink>
      <NavLink to='/Mood' className='nav-link'>Mood</NavLink>
      <NavLink to='/Inspiration' className='nav-link'>Inspiration</NavLink>
      <NavLink to='/Planner' className='nav-link'>Planner</NavLink>
      <NavLink to='/Recipes' className='nav-link'>Recipes</NavLink>
    </nav>
  );
}
export default Navbar;
