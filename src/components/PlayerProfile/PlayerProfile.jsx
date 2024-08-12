// src/components/PlayerProfile/PlayerProfile.jsx
import  { useState, useEffect } from 'react';
import './PlayerProfile.css';

const PlayerProfile = ({ player }) => {
  const [attendance, setAttendance] = useState(
    Array.from({ length: player.lessons }, (_, i) => i < player.attended)
  );
  const [adjustment, setAdjustment] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(player.balance);
  const [nextMonthBalance, setNextMonthBalance] = useState(player.balance);

  const lessonPrice = player.balance / player.lessons; // Цена одного занятия

  useEffect(() => {
    const attendedCount = attendance.filter(attended => attended).length;
    const missedCount = player.lessons - attendedCount;
    const newAdjustment = lessonPrice * missedCount;
    const newBalance = player.balance - (lessonPrice * attendedCount);

    setAdjustment(newAdjustment);
    setCurrentBalance(newBalance);
    setNextMonthBalance(newAdjustment); // Перенос денег на следующий месяц
  }, [attendance, player.lessons, lessonPrice, player.balance]);

  const handleToggleAttendance = (index) => {
    const newAttendance = [...attendance];
    newAttendance[index] = !newAttendance[index];
    setAttendance(newAttendance);
  };

  return (
    <div className="player-profile">
      <h2>{player.name}</h2>
      <p><strong>Группа:</strong> {player.group}</p>
      <p className={`status ${player.paid ? 'paid' : 'unpaid'}`}>
        {player.paid ? 'Оплачено' : 'Не оплачено'}
      </p>
      <p><strong>Баланс:</strong> {player.paid ? player.balance : currentBalance.toFixed(2)} грн</p> {/* Баланс фиксирован */}
      <p><strong>Занятий в месяц:</strong> {player.lessons}</p>
      <p><strong>Был:</strong> {attendance.filter(attended => attended).length} раз</p>
      <p><strong>Перерасчет оплаты:</strong> {adjustment.toFixed(2)} грн</p>
      <p><strong>Баланс на следующий месяц:</strong> {nextMonthBalance.toFixed(2)} грн</p>
      
      <div className="attendance-grid">
        {attendance.map((wasAttended, index) => (
          <button
            key={index}
            className={`attendance-button ${wasAttended ? 'attended' : 'not-attended'}`}
            onClick={() => handleToggleAttendance(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlayerProfile;