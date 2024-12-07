import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ClientsPage from './pages/client/ClientsPage';
import CarsPage from './pages/car/CarsPage';
import WorkshopsPage from './pages/workshop/WorkshopPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="clients" element={<ClientsPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
