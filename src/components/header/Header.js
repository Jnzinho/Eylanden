import { NavLink } from 'react-router-dom';
import './header.css';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';
import classes from './activeLink.module.css';

function Header() {
  return (
    <header>
      <section className="left-side">
        <GiDiceTwentyFacesTwenty className="logo"></GiDiceTwentyFacesTwenty>
        <NavLink to="/">
          <div className="title">Eylanden</div>
        </NavLink>
      </section>
      <section className="right-side">
        <ul className="link-list">
          <li>
            <NavLink
              to="personagens"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Personagens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="locais"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Localizações
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sessoes"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Sessões
            </NavLink>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
