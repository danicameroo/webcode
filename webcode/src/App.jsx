import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './routes/NavBar/NavBar';
import Page from './routes/Page/Page';
import Footer from './routes/Footer/Footer';
import End from './routes/End/End';
import Form from './routes/Form/Form';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      <Footer />
      <End />
    </Router>
  );
};

export default App;