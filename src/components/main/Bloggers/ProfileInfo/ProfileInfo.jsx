import React from 'react';
import blogger_avatar1 from '../../../../img/blogger_avatar1.png';
import instagramm_color from '../../../../img/instagramm_color.png';
import youtube_color from '../../../../img/youtube_color.png';
import vk_color from '../../../../img/vk_color.png';
import './ProfileInfo.css'
import clip from '../../../../img/clip.png';
import play from '../../../../img/play.svg';

const ProfileInfo = () => {

    let youtubeCount = '3 160 000+';
    let vkCount = '134 000+';
    let instagrammCount = '128 000+';
    
    return (

        <div className="profile">
            <div className="profile-avatar">
                <img src={blogger_avatar1} alt="blogger_avatar1" height='571' />
            </div>

            <div className="profile-info">
                <h3>Максим Максимов</h3>

                <hr />
                <div className="profile-info-social">
                    <div className="profile-info-social-subscribers-ikon">
                        <img src={youtube_color} alt="youtube_color" width="64" />
                        <span className="profile-info-social-subscribers">
                            {youtubeCount}
                            <p>Подписчиков</p>
                        </span>

                    </div>
                    <div className="profile-info-social-subscribers-ikon">
                        <img src={vk_color} alt="vk_color" width="64" />
                        <span className="profile-info-social-subscribers">
                            {vkCount}
                            <p>Подписчиков</p>
                        </span>
                    </div>
                    <div className="profile-info-social-subscribers-ikon">
                        <img src={instagramm_color} alt="instagramm_color" width="64" />
                        <span className="profile-info-social-subscribers">
                            {instagrammCount}
                            <p>Подписчиков</p>
                        </span>

                    </div>

                </div>
                <hr />
                <div className="profile-info-textinfo">
                    <h4>Информация о канале</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit nulla, tenetur maxime ea nostrum veritatis
                    quos corporis mollitia. Nostrum itaque repellat voluptate,
                    at adipisci quaerat, est alias magni, officia beatae cumque
                    consectetur reiciendis minima aliquam velit facilis officiis
                    porro voluptatum ad nulla ipsam vero dignissimos! Nam, cum
                    quidem, sit, et eius nesciunt sunt reprehenderit vitae
                    similique facilis dignissimos? Recusandae, neque reiciendis
                    repudiandae laborum blanditiis dolores. Vitae numquam,
                    eligendi iure doloribus necessitatibus in velit. Quas unde
                    rem voluptatibus in, velit dolorem! Facilis vitae sunt maxime
                    iusto ipsam ex vel mollitia, unde animi itaque?
                    Deserunt labore doloremque explicabo cum aliquid quas iure!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit nulla, tenetur maxime ea nostrum veritatis
                    quos corporis mollitia. Nostrum itaque repellat voluptate,
                    at adipisci quaerat, est alias magni, officia beatae cumque
                    consectetur reiciendis minima aliquam velit facilis officiis
                    porro voluptatum ad nulla ipsam vero dignissimos! Nam, cum
                    quidem, sit, et eius nesciunt sunt reprehenderit vitae
                    similique facilis dignissimos? Recusandae, neque reiciendis
                    repudiandae laborum blanditiis dolores. Vitae numquam,
                    eligendi iure doloribus necessitatibus in velit. Quas unde
                    rem voluptatibus in, velit dolorem! Facilis vitae sunt maxime
                    iusto ipsam ex vel mollitia, unde animi itaque?
                    Deserunt labore doloremque explicabo cum aliquid quas iure!</p>
                </div>
            </div>
        </div>

    )
}

export const ProfileInfoСlip = () => {
    return(

        <div className='ProfileInfoСlip'>
            <h2>Последние ролики</h2>

            <div className='ProfileInfoСlip-allClip'>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>
                <div className='ProfileInfoСlip-allClip-one'>
                    <img className='ProfileInfoСlip-allClip-one-clip' src={clip} alt="clip"/>
                    <img className='ProfileInfoСlip-allClip-one-play' src={play} alt="play"/>
                </div>

            </div>
        </div>

    )
}

export default ProfileInfo