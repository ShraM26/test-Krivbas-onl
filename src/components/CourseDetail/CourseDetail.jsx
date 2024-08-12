import styles from './CourseDetail.module.css';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  
  // Здесь вы могли бы загрузить данные курса из API или использовать статические данные
  const course = {
    title: 'Основи футболу',
    description: 'Цей курс охоплює базові навички футболу, включаючи техніку володіння м\'ячем, правила гри та основи тактики. Він допоможе гравцям покращити свої навички та краще розуміти гру.',
    price: '1000 $',
    date: '5 місяці',
    courses: [
      { id: 1, title: 'Правила гри', price: '50 $' },
      { id: 2, title: 'Технічні аспекти', price: '100 $' },
      { id: 3, title: 'Основи тактики', price: '100 $' },
      { id: 4, title: 'Ментальна підготовка', price: '50 $' },
      { id: 5, title: 'Фізична підготовка', price: '100 $' },
      { id: 5, title: 'Основи командної роботи', price: '100 $' },

    ]
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <ul className={styles.list}>
          {course.courses.map((item) => (
            <li className={styles.item} key={item.id}>
              <span className={styles.courseTitle}>{item.title}</span>
              <span className={styles.coursePrice}>{item.price}</span>
              <button className={styles.btn} onClick={() => alert('Оплата поки не реалізована.')}>Придбати</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.details}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <p>Ціна всього курсу: {course.price}</p>
        <p>Тривалість: {course.date}</p>
        <button className={styles.button} onClick={() => alert('Оплата поки не реалізована.')}>Придбати</button>
      </div>
    </div>
  );
}

export default CourseDetail;