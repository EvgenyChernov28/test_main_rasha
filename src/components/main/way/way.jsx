import React from 'react';
import style from './way.module.css'

const Way = () => {

    return (
        <div className={style.way}>
            Главная / <span className={style.way_second}>Блогеры</span>
        </div>
    )
}
export default Way