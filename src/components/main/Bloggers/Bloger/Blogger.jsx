import React from 'react';
import instagramm_card from '../../../../img/instagramm_card.svg';
import youtube_card from '../../../../img/youtube_card.svg';
import vk_card from '../../../../img/vk_card.svg';
import './Blogger.css'
import { NavLink } from 'react-router-dom';

const Blogger = (props) => {

    let youtubeCount = '3 160 000+';
    let vkCount = '134 000+';
    let instagrammCount = '128 000+';
    

    return (
        <NavLink to="/blogger" className="card-blogger">
            <img src={props.blog} alt="" width="311" />
            <h2>
                <span className="card-blogger-name">
                    Макс Максимов <br />
                </span>
                <span className="card-blogger-icons">
                    <h5 className="card-blogger-icons-one"><img src={youtube_card} alt="youtube_card" width="24" />
                        {youtubeCount}</h5>

                    <h5 className="card-blogger-icons-one"><img src={vk_card} alt="vk_card" width="24" />
                        {vkCount}</h5>

                    <h5 className="card-blogger-icons-one"><img src={instagramm_card} alt="instagramm_card" width="24" />
                        {instagrammCount}</h5>
                </span>


            </h2>
        </NavLink>
    )
};
export default Blogger;