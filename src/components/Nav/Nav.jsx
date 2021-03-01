import Navs from '../Nav/Nav.module.css';


const Nav = () => {
    return(
        
      <nav className={Navs.nav}>
      <ul>
        <li className={Navs.item}>
          <a>Profile</a>
        </li>
        <li className={`${Navs.item} ${ Navs.active}`}>
          <a>Messages</a>
        </li>
        <li className={Navs.item}>
          <a>News</a>
        </li>
        <ul>
          <a>Music</a>
          <li>
          <a>Settings</a>
        </li>
        </ul>
      </ul>
    </nav>
    );
}

export default Nav;