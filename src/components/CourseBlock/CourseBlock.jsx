import styles from './CourseBlock.module.css';
import { useNavigate } from 'react-router-dom';

function CourseBlock({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className={styles.block} onClick={handleClick}>
      <h3>{course.title}</h3>
      <p>{course.price}</p>
    </div>
  );
}

export default CourseBlock;