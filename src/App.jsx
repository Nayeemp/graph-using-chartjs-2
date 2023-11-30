import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BarChart from './pages/chart/BarChart';
import BarChart2 from './pages/chart/BarChart2';
import Home from './pages/home/Home';
import LineChart from './pages/chart/LineChart';
import LineChart2 from './pages/chart/LineChart2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/barchart2" element={<BarChart2 />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/linechart2" element={<LineChart2 />} />
      </Routes>
    </Router>
  );
}

export default App;
