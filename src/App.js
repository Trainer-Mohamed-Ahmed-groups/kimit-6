import { Route, Routes } from 'react-router-dom';
import './App.scss';
import SiteNav from './layout/SiteNav';
import About from './views/About';
import Contacts from './views/Contacts';
import Products from './views/Products';
import Home from "./views/Home";
import { useContext } from 'react';
import { ThemeContext } from './context/Theme';
function App() {
  const theme = useContext(ThemeContext)
  return (
    <div className={`app ${theme.theme}`}>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
