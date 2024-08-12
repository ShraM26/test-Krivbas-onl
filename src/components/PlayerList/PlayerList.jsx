
const  PlayerList = ({players}) => {
  return (
    <div>
      <h2>Список футболистов</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.firstName} {player.lastName} (Год рождения: {player.birthYear})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;