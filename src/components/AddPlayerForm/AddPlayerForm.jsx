import React, { useState } from 'react';

const AddPlayerForm = ({ onAddPlayer }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('not-paid');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlayer = {
      id: Date.now(), // Генерируем уникальный ID
      firstName,
      lastName,
      birthYear: parseInt(birthYear, 10),
      attendance: [], // Начальное состояние посещаемости
    };
    onAddPlayer(newPlayer);
    setFirstName('');
    setLastName('');
    setBirthYear('');
    setPaymentStatus('not-paid');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Добавить нового игрока</h2>
      <div>
        <label>Имя:</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Фамилия:</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Год рождения:</label>
        <input 
          type="number" 
          value={birthYear} 
          onChange={(e) => setBirthYear(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Статус оплаты:</label>
        <select 
          value={paymentStatus} 
          onChange={(e) => setPaymentStatus(e.target.value)}
        >
          <option value="paid">Оплачено</option>
          <option value="not-paid">Не оплачено</option>
        </select>
      </div>
      <button type="submit">Добавить игрока</button>
    </form>
  );
};

export default AddPlayerForm;