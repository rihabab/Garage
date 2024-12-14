import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import ClientsPage from './pages/client/ClientsPage';
import AddClientPage from './pages/client/AddClientPage';
import CarsPage from './pages/car/CarsPage';
import AddCarPage from './pages/car/AddCarPage';
import WorkshopsPage from './pages/workshop/WorkshopPage';
import AddWorkshopPage from './pages/workshop/AddWorkshopPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="clients" element={<ClientsPage />} />
          <Route path="cars" element={<CarsPage />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="/add-client" element={<AddClientPage />} />
          <Route path="/add-car" element={<AddCarPage />} />
          <Route path="/add-workshop" element={<AddWorkshopPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
