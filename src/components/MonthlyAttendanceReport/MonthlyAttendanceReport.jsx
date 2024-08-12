const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const generateDaysArray = (month, year) => {
  const daysInMonth = getDaysInMonth(month, year);
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const MonthlyAttendanceReport = ({ players, month, year, onUpdateAttendance }) => {
  const days = generateDaysArray(month, year);

  const handleStatusChange = (playerId, date, newStatus) => {
    onUpdateAttendance(playerId, date, newStatus);
  };

  return (
    <div>
      <h2>Журнал посещаемости за {month}/{year}</h2>
      <table>
        <thead>
          <tr>
            <th>Имя игрока</th>
            {days.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player.id}>
              <td>{player.firstName} {player.lastName}</td>
              {days.map(day => {
                const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                const attendance = player.attendance.find(att => att.date === date)?.status || 'absent';

                return (
                  <td key={date}>
                    <button 
                      onClick={() => handleStatusChange(player.id, date, 'present')}
                      className={attendance === 'present' ? 'active' : ''}
                    >
                      ✅
                    </button>
                    <button 
                      onClick={() => handleStatusChange(player.id, date, 'absent')}
                      className={attendance === 'absent' ? 'active' : ''}
                    >
                      ❌
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyAttendanceReport;