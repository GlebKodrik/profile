import s from "./Footer.module.css";
import vk from "./../../assets/img/vk.png";
import inst from "./../../assets/img/inst.png";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrap}>
          <div className={s.footer__item}>
            Vk:
            <a href="https://vk.com/k.glebka" target={"_blank"}>
              <img src={vk} alt="Вконтакте" />
            </a>
          </div>
          <div className={s.footer__item}>
            Instagram:
            <a
              href={"https://www.instagram.com/_gleb.kodrik_/?hl=ru"}
              target="_blank"
            >
              <img src={inst} alt="Инстаграм" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
