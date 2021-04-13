import s from "./Project.module.css";
import { Button } from "antd";
import api from "./../../assets/img/api.png";
import profile from "./../../assets/img/profile.jpg";
import exc from "./../../assets/img/exc.jpg";
import shop from "./../../assets/img/shop.jpg";
import excel from "./../../assets/Project.xlsb";
import shopSite from "./../../assets/Shop.rar";

import cn from "classnames";
export const Project = () => {
  return (
    <div className={s.project} id={"project"}>
      <div className="container">
        <div className="title">Проекты</div>
        <div className={s.project__wrap}>
          <div className={s.project__block}>
            <div className={s.project__title}>Api погода</div>
            <div className={s.project__img}>
              <img src={api} alt="" />
            </div>
            <div className={s.project__button}>
              <Button type="dashed">
                <a
                  href="https://github.com/Glendi123/Api/tree/main/Api%20weather"
                  target={"_blank"}
                >
                  Git hub
                </a>
              </Button>
            </div>
          </div>

          <div className={s.project__block}>
            <div className={s.project__title}>K-cervice</div>
            <div className={s.project__img}>
              <img src={profile} alt="" />
            </div>
            <div className={s.project__button}>
              <Button type="primary">
                <a
                  href="https://glendi123.github.io/shop_k-service/"
                  target={"_blank"}
                >
                  Открыть сайт
                </a>
              </Button>
              <Button type="dashed">
                <a
                  href="https://github.com/Glendi123/shop_k-service"
                  target={"_blank"}
                >
                  Git hub
                </a>
              </Button>
            </div>
          </div>

          <div className={s.project__block}>
            <div className={s.project__title}>Vba</div>
            <div className={s.project__img}>
              <img src={exc} alt="" />
            </div>
            <div className={s.project__button}>
              <Button type="primary">
                <a href={excel} download={"Project.xlsb"}>
                  Скачать файл
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className={cn(s.project__block, s.project__end)}>
          <div className={s.project__title}>Магазин</div>
          <div className={s.project__img}>
            <img src={shop} alt="" />
          </div>
          <div className={s.project__button}>
            <Button type="primary">
              <a href={shopSite} download={"Shop.rar"}>
                Скачать файл
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
