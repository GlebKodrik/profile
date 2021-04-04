import s from "./../About.module.css";

export const AboutItem = (props) => {
  return (
    <div className={s.about__item}>
      <div className={s.about__item_title}>{props.title}</div>
      <div className={s.about__item_text}>{props.text}</div>
    </div>
  );
};
