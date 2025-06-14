import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './screens/Homescreen';
import ClubList from './screens/Clublist';
import ClubDetail from './screens/Clubdetail';
import AboutPage from './screens/Aboutus';
import NotFound from './screens/notfound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clubs" element={<ClubList />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}


export default App;