import logo from "./../../../assets/img/webstorm_logo.png";
import s from "./Navbar.module.css";
import { Link } from "react-scroll";
export const Navbar = () => {
  return (
    <div className={s.navbar__wrap}>
      <img className={s.navbar__logo} src={logo} alt={"Логотип"} />
      <nav className={s.nav}>
        <ul>
          <li>
            <Link
              to={"about"}
              activeClass={"active"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              О себе
            </Link>
          </li>
          <li>
            <Link
              to={"project"}
              activeClass={"active"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Проекты
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
