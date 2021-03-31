import React from 'react';
import Blogger from '../Bloger/Blogger'
import style from './Outherbloggers.module.css'


const Outherbloggers = () => {
    return (
        <div className={style.outherblogers}>
            <h2 className={style.outherblogers_head}>Другие блогеры</h2>

            <div className={style.outherblogers_cards}>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>
                <div className={style.outherblogers_cards_mb}>
                    <Blogger />
                </div>

            </div>

            
        </div>
    )
}

export default Outherbloggers