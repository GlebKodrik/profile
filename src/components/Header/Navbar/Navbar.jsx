import logo from "./../../../img/webstorm_logo.png";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={s.navbar__wrap}>
      <img className={s.navbar__logo} src={logo} alt={"Логотип"} />
      <nav className={s.nav}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
