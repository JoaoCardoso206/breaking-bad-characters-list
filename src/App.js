import{ 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { Character } from './pages/Character';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './global.scss';

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route index path="/" element={<Home />} />
    <Route path= "character/:id" element={<Character />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
