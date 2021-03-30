import React from 'react';
import blogger1 from '../../../../img/blogger1.png';
import instagramm_card from '../../../../img/instagramm_card.svg';
import youtube_card from '../../../../img/youtube_card.svg';
import vk_card from '../../../../img/vk_card.svg';
import './Blogger.css'

const Blogger = () => {

    let youtubeCount = '3 160 000+';
    let vkCount = '134 000+';
    let instagrammCount = '128 000+';

    return (
        <a className="card-blogger" href="#">
            <img src={blogger1} alt="blogger1" width="311" />
            <h2>
                <span>
                    Макс Максимов <br />
                </span>
                <span className="card-blogger-icons">
                    <a href=""><img src={youtube_card} alt="youtube_card" width="24" />
                        {youtubeCount}</a>

                    <a href=""><img src={vk_card} alt="vk_card" width="24" />
                        {vkCount}</a>

                    <a href=""><img src={instagramm_card} alt="instagramm_card" width="24" />
                        {instagrammCount}</a>
                </span>


            </h2>
        </a>
    )
};
export default Blogger;