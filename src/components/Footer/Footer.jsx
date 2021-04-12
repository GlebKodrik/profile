import s from './Footer.module.css'
import vk from './../../img/vk.png'
import inst from './../../img/inst.png'
export const Footer = () =>{
    return <footer className={s.footer}>
        <div className="container">
            <div className={s.footer__wrap}>
                <div className={s.footer__item}>
                    Vk:
                    <img src={vk} alt=""/>
                </div>
                <div className={s.footer__item}>
                    Instagram:
                    <img src={inst} alt=""/>
                </div>
            </div>

        </div>
    </footer>
}