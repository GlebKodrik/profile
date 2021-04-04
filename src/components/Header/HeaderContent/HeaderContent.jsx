import s from "./HeaderContent.module.css";
import {useSelector} from "react-redux";
import {useState} from "react";

export const HeaderContent = () => {
    const data = useSelector((state) => state.profile);
    const [view, setView] = useState(false);

    const cln = [s.item__title];
    if (view) {
        cln.push(s.item__hover);
    }
    return (
        <div className={s.row}>
            <div className={s.header__item}>
                <div className={s.item__wrap}>
                    <img
                        onMouseEnter={() => {
                            setView(true)
                        }} onMouseLeave={() => setView(false)}
                        className={s.item__avatar}
                        src={data.avatar}
                        alt="Аватарка"
                    />
                    {view &&
                    <img
                        src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
                        alt="Гифка"
                        className={s.item__gif}
                    />
                    }
                </div>

                <div className={cln.join(' ')}>{data.name}</div>
            </div>
        </div>
    );
};
