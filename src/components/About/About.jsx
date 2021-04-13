import s from "./About.module.css";
import { useSelector } from "react-redux";
import { AboutItem } from "./AboutItem/AboutItem";

export const About = () => {
  const description = useSelector((state) => state.profile.description);
  return (
    <div className={s.about} id={"about"}>
      <div className="container">
        <div className="title">О себе</div>
        <div className={s.about__wrap}>
          {description.map((item) => (
            <AboutItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
