import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Menu from './pages/Menu/Menu';
import { Provider } from 'react-redux';
import store from './store';

function MenuIcon() {
  const navigate = useNavigate();
  const location = useLocation();


  const [menuIcon, setMenuIcon] = useState(true);
  // 메뉴 클릭시
  const handleMenuClick = () => {
    // 현재 경로가 /menu에 있을경우, 이전 페이지로 이동한다.
    if (location.pathname === '/menu') {
      navigate(-1); // 뒤로가기
      setMenuIcon(false);
    } else {
      navigate('/menu');
    }
  };

  // 메뉴페이지에 들어오면 메뉴아이콘을 X로 변경
  useEffect(() => {
    if (location.pathname === '/menu') {
      setMenuIcon(false); // 메뉴 페이지에 있을 때
      // 메뉴페이지에 있을때는 menu에 바탕색을 흰색으로 변경함.
    } else {
      setMenuIcon(true); // 메뉴 페이지가 아닐 때
    }
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  const menuColor = {
    backgroundColor: menuIcon === false ? 'white' : 'black',
  };


  return (
    <div className="menu common-flex" onClick={handleMenuClick}>
        <div>
          <div className="menu-line1 common-menu-line"></div>
          {menuIcon && (<div className="menu-line2 common-menu-line"></div>)}
          <div className="menu-line3 common-menu-line"></div>
        </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MenuIcon /> {/* 메뉴 아이콘 컴포넌트 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
