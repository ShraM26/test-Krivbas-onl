import styles from './MainPage.module.css';
import CourseBlock from '../CourseBlock/CourseBlock';

function MainPage() {
  const courses = [
    { id: 1, title: 'Основи футболу' },
    { id: 2, title: 'Тренування по позиціях ' },
    { id: 3, title: 'Психологія гравця' },
    { id: 4, title: 'Харчування та відновлення'},
    { id: 5, title: 'Техничнi навички' },
    { id: 6, title: 'Правила Гри'},
   
    // Добавьте больше курсов здесь
  ];

  return (
    <div className={styles.container}>
      <h1>Вітаємо в Академії</h1>
      <div className={styles.courseList}>
        {courses.map((course) => (
          <CourseBlock key={course.id} course={course} />
         
        ))}
      </div>
    </div>
  );
}

export default MainPage;