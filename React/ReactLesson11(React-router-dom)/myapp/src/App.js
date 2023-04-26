import Header from "./components/Header/Header";
import './App.css'
import GoodsPage from "./components/Pages/GoodsPage/GoodsPage";
import AboutPage from "./components/Pages/AboutPage/AboutPage";
import ContactsPage from "./components/Pages/ContactsPage/ContactsPage";

import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";
import HomePage from "./components/Pages/HomePage/HomePage";
import GoodInfoPage from "./components/Pages/GoodInfoPage/GoodInfoPage";

function App() {

  // ДЗ Задание:
  // а)
  // Сформировать новый компонент HomePage, который будет хранить 
  // обычный заголовок с текстом Home Page
  // Компонент GoodsPage переписать таким образом, чтобы отображись список товаров
  // https://fakestoreapi.com/products'

  // б) Донастроить роутинг с учетом всех вышеуказанных изменений 
  // (предусмотреть изменение в меню)

  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/goods" element={<GoodsPage/>}/>
            <Route path="/goods/:id" element={<GoodInfoPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <div>
            2023(c) by Telran school
          </div>
        </Router>
    </div>
  );
}

export default App;
