const calculatePayment = (attendance, totalAmount = 1000) => {
  const weeklyClasses = 4; // Занятий в неделю
  const weeksInMonth = 4; // Среднее количество недель в месяце
  const classesInMonth = weeklyClasses * weeksInMonth;
  const costPerClass = totalAmount / classesInMonth;

  const totalClasses = attendance.length;
  const missedClasses = attendance.filter(att => att.status === 'absent').length;
  const attendedClasses = totalClasses - missedClasses;

  if (attendedClasses === 0) {
    return {
      payment: 0,
      carryOver: totalAmount
    };
  }

  const payment = costPerClass * attendedClasses;
  const carryOver = costPerClass * missedClasses;

  return {
    payment,
    carryOver
  };
};

const PaymentSummary = ({ player }) => {
  const { payment, carryOver } = calculatePayment(player.attendance);

  return (
    <div>
      <span>Итог: {payment.toFixed(2)} грн</span><br />
      <span>Перенос: {carryOver.toFixed(2)} грн</span>
    </div>
  );
};

export default PaymentSummary;