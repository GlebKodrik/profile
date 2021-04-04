import s from "./Header.module.css";
import { Navbar } from "./Navbar/Navbar";
import { HeaderContent } from "./HeaderContent/HeaderContent";

export const Header = () => {
  return (
    <div>
      <header>
        <div className={s.header__wrap}>
          <div className="container">
            <Navbar />
            <HeaderContent />
          </div>
        </div>
      </header>
    </div>
  );
};
