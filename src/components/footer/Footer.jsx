import React from 'react';
import logo from '../../img/logo.svg';
import instagramm from '../../img/instagramm.svg';
import vk from '../../img/vk.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-info">
                <a className="footer-info-logo" href="#"><img src={logo} alt="logo" width='200' /></a>

                <div className=" footer-info-item">
                    <a className=" footer-info-item-link" href="">Связаться с нами</a>
                    <a className=" footer-info-item-link" href="">reklama@wildjam.ru</a>
                    <a className=" footer-info-item-link" href="">ул. Сущевская, д.27, стр.2</a>
                    <a className=" footer-info-item-link" href="">+7 (499) 393-39-62</a>
                </div>
            </div>

            <div className="footer-icon">
                <a  href="#"><img src={instagramm} alt="instagramm" width='32' /></a>
                <a  href="#"><img src={vk} alt="vk" width='32' /></a>
            </div>

        </div>
    )
}
export default Footer;