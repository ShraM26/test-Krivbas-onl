const Calendar = ({ player, onClose, onUpdateAttendance }) => {
  const handleAttendanceChange = (date, status) => {
    const updatedAttendance = player.attendance.map(att => 
      att.date === date ? { ...att, status } : att
    );
    if (!updatedAttendance.find(att => att.date === date)) {
      updatedAttendance.push({ date, status });
    }
    onUpdateAttendance({ ...player, attendance: updatedAttendance });
  };

  return (
    <div className="calendar">
      <h3>{player.firstName} {player.lastName}</h3>
      <button onClick={onClose}>Закрыть</button>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 31 }, (_, i) => {
            const date = `2024-08-${String(i + 1).padStart(2, '0')}`;
            const status = player.attendance.find(att => att.date === date)?.status || 'absent';
            return (
              <tr key={date}>
                <td>{date}</td>
                <td>
                  <button 
                    onClick={() => handleAttendanceChange(date, 'present')} 
                    style={{ backgroundColor: status === 'present' ? 'green' : 'white' }}
                  >
                    Был
                  </button>
                  <button 
                    onClick={() => handleAttendanceChange(date, 'absent')} 
                    style={{ backgroundColor: status === 'absent' ? 'red' : 'white' }}
                  >
                    Не был
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;