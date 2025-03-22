import './App.css';
import React, { useState } from 'react';
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


  // 메뉴 클릭시
  const handleMenuClick = () => {
    // 현재 경로가 /menu에 있을경우, 이전 페이지로 이동한다.
    if (location.pathname === '/menu') {
      navigate(-1); // 뒤로가기
    } else {
      navigate('/menu');
      // 메뉴창에 들어오면, 이모티콘을 x로 변경한다
    }
  };

  return (
    <div className="menu common-flex" onClick={handleMenuClick}>
      {menuClose && (
        <div>

        <div className="menu-line1"></div>
      <div className="menu-line2"></div>
      <div className="menu-line3"></div>
      </div>
      )}
      {!menuClose && (
                <div>
                <div className="menu-line1"></div>
              <div className="menu-line3"></div>
              </div>
      )}

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
