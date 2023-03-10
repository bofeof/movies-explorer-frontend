import './AboutMe.css';
import studentPhoto from '../../images/student/photo.png';

export default function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__header">Студент</h2>

      <div className="aboutme__info">
        <div className="aboutme__student">
          <p className="aboutme__name">Виталий</p>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__bio">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года
            работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке, начал
            заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a className="aboutme__github" href="https://github.com/bofeof" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <img className="aboutme__photo" src={studentPhoto} alt="Фотография студента" />
      </div>
    </section>
  );
}
