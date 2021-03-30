import React from 'react';
import Blogger from './Bloger/Blogger'
import './Bloggers.css'
import arrow from '../../../img/Arrow_down.svg'

const Bloggers = () => {
    return (
        <div className='blogers'>
            <h2>Блогеры</h2>
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
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>
                <div className='blogers-cards-mb'>
                    <Blogger />
                </div>

            </div>
            <div className='blogers-line'>
                <hr className='blogers-line-left' align='left' /> <span>Подгружаем ...</span>  <hr className='blogers-line-right' align='right' />
            </div>
            
        </div>
    )
}

export default Bloggers