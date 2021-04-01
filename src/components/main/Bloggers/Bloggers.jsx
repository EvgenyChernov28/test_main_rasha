import React from 'react';
import Blogger from './Bloger/Blogger'
import './Bloggers.css'
import arrow from '../../../img/Arrow_down.svg'
import { bloggerDate } from '../../../image';
const Bloggers = (props) => {

    let imgDate = {
        imgName: [
            {id: 1, nameImg: 'blogger1'},
            {id: 2, nameImg: 'blogger2'},
            {id: 3, nameImg: 'blogger3'},
            {id: 4, nameImg: 'blogger4'},
            {id: 5, nameImg: 'blogger5'},
            {id: 6, nameImg: 'blogger6'},
            {id: 7, nameImg: 'blogger7'},
            {id: 8, nameImg: 'blogger8'}
        ]
    }
    let blog = bloggerDate.map(blogger => <Blogger blog={blogger} />)

    return (
        <div className='blogers'>
            <h2 className='blogers-head'>Блогеры</h2>
            <div className='blogers-sort'>
                <h6 className='blogers-sort-name'>Сортировать по:</h6>
                <a className='blogers-sort-playground blogers-sort-fonts' href=""> выберите площадку
                    <img src={arrow} alt="arrow" />
                </a>
                <a className='blogers-sort-direction blogers-sort-fonts' href=""> выберите направление
                    <img src={arrow} alt="arrow" />
                </a>
            </div>
            <div className='blogers-cards'>
                    {blog}
            </div>
            <div className='blogers-line'>
                <hr className='blogers-line-left' align='left' /> <span>Подгружаем ...</span>  <hr className='blogers-line-right' align='right' />
            </div>
            
        </div>
    )
}

export default Bloggers