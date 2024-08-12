

function AttendanceTable({ players, onUpdateAttendance }) {
  const handleStatusChange = (playerId, date, newStatus) => {
    onUpdateAttendance(playerId, date, newStatus);
  };

  return (
    <div>
      <h2>Посещаемость</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {players.flatMap(player =>
            player.attendance.map(attendance => (
              <tr key={`${player.id}-${attendance.date}`}>
                <td>{player.firstName} {player.lastName}</td>
                <td>{attendance.date}</td>
                <td>{attendance.status}</td>
                <td>
                  <button onClick={() => handleStatusChange(player.id, attendance.date, 'present')}>
                    Присутствует
                  </button>
                  <button onClick={() => handleStatusChange(player.id, attendance.date, 'absent')}>
                    Отсутствует
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;