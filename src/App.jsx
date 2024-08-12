
import './App.css'

// import PlayerProfile from './components/PlayerProfile/PlayerProfile';

// const App = () => {
//   const player = {
//     name: 'Златан Иброгимовичь',
//     group: '2011(2)',
//     paid: true,
//     balance: 1000,
//     lessons: 16,
//     attended: 0,
//     adjustment: 0, // Пример перерасчета
//     nextMonthBalance: 0
//   };

//   return (
//     <div>
//       <h1>Журнал посещаемости</h1>
//       <PlayerProfile player={player} />
//     </div>
//   );
// };

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration/Registration';
import MainPage from './components/MainPage/MainPage';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Header from './components/Header/Header'; // Импортируем Header

function App() {
  return (
    <Router>
      <Header /> {/* Размещаем Header вне Routes, чтобы он был на всех страницах */}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/course/:id" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;