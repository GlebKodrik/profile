import s from "./Header.module.css";
import logo from "./../../img/webstorm_logo.png";
import { NavLink } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <header>
        <div className={s.header__wrap}>
          <div className="container">
            <div className="navbar">
              <img src={logo} alt={"Логотип"} />
              <nav>
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
          </div>
        </div>
      </header>
    </div>
  );
};
