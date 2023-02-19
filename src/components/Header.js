import React from 'react'

export default function header() {
  return (
    <header>
        <div className='header'>
            <span className='logo'>Ozone</span>
            <ul className='nav'>
              <li>Кабинет</li>
              <li>Контакты</li>
              <li>О нас</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
