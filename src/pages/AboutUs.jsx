import React, { Component } from 'react'
import Avatar from '../../src/img/avatar.jpg'
export class AboutUs extends Component {
  render() {
    return (
      <>
      <div className='presentationItem'> </div>
      <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2>Привет, я Катя</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className='col-12 col-lg-6'>
          <img src={Avatar} alt="" className='rounded-circle d-flex imgAvatar mt-2 mb-2' width={300}  />
        </div>
        <div className="col-12 col-lg-6">
          <p>Я преподаю информатику с 2008 года, когда предмет ещё назывался ИКТ. Начинал со школы, учил детей разбираться
            в программировании и сдавать ЕГЭ на 90 баллов и выше. За два года вывел нашу школу на второе место в районе по
            олимпиадам по информатике. Вёл два класса коррекции — пятый и одиннадцатый — и знаю, как объяснить основы
            теории вероятности даже тем, кто не хочет ничему учиться.</p>
          <p>В 2012 защитил кандидатскую диссертацию по обучению информатике детей с недостатком внимания и стал
            внештатным преподавателем РГСУМ им. Макаренко. Параллельно с этим веду курсы по программированию «IDDQD» и
            записываю подкаст «Прогрокаст» с аудиторией 25 000 человек.</p>
        </div>
      
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Мои научные работы</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <p><a href="http://thecode.local/baboolya/">Задача про бабушку и помидоры</a></p>
          <p><a href="http://thecode.local/electrician/">Хитрый электрик</a></p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <p><a href="http://thecode.local/le-timer/">Как сделать свой таймер-напоминалку</a></p>
          <p><a href="http://thecode.local/sublime-one-love/">Почему Sublime Text — это круто</a></p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <p><a href="http://thecode.local/est-tri-shkatulki/">Поговорим о Якубовиче</a></p>
          <p><a href="http://thecode.local/content-manager/">Как стать контент-менеджером</a></p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
          <p><a href="http://thecode.local/batareyki-besyat/">Задача про сторожа и фонарик</a></p>
          <p><a href="http://thecode.local/variables/">О названиях функций</a></p>
        </div>
      </div>
    </div>

    </>
      
    )
  }
}

export default AboutUs