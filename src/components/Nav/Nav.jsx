import { NavLink } from 'react-router-dom';
import Navs from '../Nav/Nav.module.css';


const Nav = () => {
    return(
        
      
      <nav className={Navs.nav}>
        
      <ul>
        <li className={Navs.item}>
          <NavLink to="/profile" activeClassName={Navs.activeLink}>Profile</NavLink>
        </li>
        <li className={`${Navs.item} ${ Navs.active}`}>
          <NavLink to="/dialogs" activeClassName={Navs.activeLink}>Messages</NavLink>
        </li>
        <li className={Navs.item}>
          <a href="#">News</a>
        </li>
        <ul>
          <NavLink to="/music" activeClassName={Navs.activeLink}>Music</NavLink>
          <li>
          <a>Settings</a>
        </li>
        </ul>
      </ul>
    </nav>
    );
}

export default Nav;