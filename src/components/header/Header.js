import { NavLink } from 'react-router-dom';
import './header.css';
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi';

function Header() {
  return (
    <header>
      <section className="left-side">
        <GiDiceTwentyFacesTwenty className="logo"></GiDiceTwentyFacesTwenty>
        <div className="title">Eylanden</div>
      </section>
      <section className="right-side">
        <ul className="link-list">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Personagens</NavLink>
          </li>
          <li>
            <NavLink>Localizações</NavLink>
          </li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
