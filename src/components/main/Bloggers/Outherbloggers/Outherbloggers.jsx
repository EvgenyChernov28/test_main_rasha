import React from 'react';
import Blogger from '../Bloger/Blogger'
import style from './Outherbloggers.module.css'
import { bloggerDate } from '../../../../image';

const Outherbloggers = (props) => {
    let blog = bloggerDate.map(blogger => <Blogger blog={blogger} />)
    return (
        <div className={style.outherblogers}>
            <h2 className={style.outherblogers_head}>Другие блогеры</h2>

            <div className={style.outherblogers_cards}>
                {blog}
            </div>

        </div>
    )
}

export default Outherbloggers