import Calendar from '../Calendar/Calendar';
import PaymentSummary from '../PaymentSummary/PaymentSummary';
import  { useState } from 'react'; 

const totalAmount = 1000; // Месячная оплата

const PlayerTable = ({ players, onUpdateAttendance }) => {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handlePaymentStatus = (player) => {
    // Проверка, оплачено ли абонемент
    const totalClasses = 16; // 4 занятия в неделю * 4 недели
    const attendedClasses = player.attendance.filter(att => att.status === 'present').length;
    return attendedClasses >= totalClasses ? 'paid' : 'not-paid';
  };

  const handleOpenCalendar = (playerId) => {
    setSelectedPlayerId(playerId);
    setShowCalendar(true);
  };

  const handleCloseCalendar = () => {
    setShowCalendar(false);
    setSelectedPlayerId(null);
  };

  return (
    <div>
      <h2>Таблица посещаемости</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Статус оплаты</th>
            <th>Календарь</th>
            <th>Итог</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td>{player.firstName} {player.lastName}</td>
              <td>
                <span 
                  style={{
                    color: handlePaymentStatus(player) === 'paid' ? 'green' : 'red'
                  }}
                >
                  {handlePaymentStatus(player) === 'paid' ? 'Оплачено' : 'Не оплачено'}
                </span>
              </td>
              <td>
                <button onClick={() => handleOpenCalendar(player.id)}>Открыть календарь</button>
              </td>
              <td>
                <PaymentSummary player={player} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCalendar && selectedPlayerId && (
        <Calendar 
          player={players.find(player => player.id === selectedPlayerId)}
          onClose={handleCloseCalendar}
          onUpdateAttendance={onUpdateAttendance}
        />
      )}
    </div>
  );
};

export default PlayerTable;