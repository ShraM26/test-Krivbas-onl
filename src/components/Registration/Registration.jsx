import  { useState } from 'react';
import styles from './Registration.module.css';

function  Registration () {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Реализуйте логику регистрации здесь
    console.log('Регистрация:', firstName, lastName, email, password);
    window.location.href = '/main'; // Перенаправление на главную страницу
  };

  return (
    <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.title}>Реєстрація</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Ім'я:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <label>Прізвище:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.btn} type="submit">Зареєструватися</button>
      </form>
      </div>
      </section>
  );
}
 
export default Registration;