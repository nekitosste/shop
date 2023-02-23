import React, { Component } from 'react'
import Telegram from '../../src/img/telegram1.jpg'
import Telegram2 from '../../src/img/telegram2.jpg'

export class Contacts extends Component {
  render() {
    return (
      <>
    <div className='presentationItem'> </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h5>Контакты для связи</h5>
        </div>
      </div>
    </div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <p>Телефон: <a  href='tel: +7 (913) 022-53-98 ;' > +7 (913) 022-53-98</a></p>
          <p>Почта: <a className='' href="mailto: makar-enko_k@mail.ru">makar-enko_k@mail.ru</a></p>
          <h5 className='mb-4'>Вы так же можете сделать заказ в этих группах в Telegram</h5>
          <div className='telegram mt-3'>
            <img className='rounded-circle' src={Telegram} alt="" width={50} />
            <a href="https://t.me/zakazbuket" className='ms-2'>Мастерская подарков</a>
          </div>
          <div className='telegram2 mt-3'>
            <img className='rounded-circle' src={Telegram2} alt="" width={50} />
            <a href="https://t.me/igra_na_lipuchkach1" className='ms-2'>Развивающие игры для Детей</a>
          </div>
          <div className='mt-3'>
            <h5> Если вы из города Барнаул, заказ можете забрать в этом месте</h5>
            <iframe  className='mt-3' src="https://yandex.ru/map-widget/v1/?um=constructor%3A45737aa4bec9f28d3e24c6051f83857ea61b99bfd63ca2944c20e42f16eb8485&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }
}

export default Contacts