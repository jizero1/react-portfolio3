import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Menu from './pages/Menu/Menu';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './Footer.js';
// import {slide as Menu} from 'react-burger-menu';

// 상단에 Star Logo표시 컴포넌트
// 기본 상태는 true로 하여 보이게하고, /menu페이지 접속시 false로 설정하여 보이지않게함
const PageLogo = () => {
  const location = useLocation();
  const [logoView, setLogoView] = useState(true);

  useEffect(() => {
    if (location.pathname === "/menu") {
      setLogoView(false);
    } else {
      setLogoView(true);
    }
  }, [location.pathname]);

  return (
    <div className="pageLogo">
      {logoView && (
        <Link to="/"><img className="logoImg" src="./images/cursor-star.png" alt="홈화면 로고"></img></Link>
      )}
    </div>
  )
}

// 메뉴아이콘을 표시 및 메뉴페이지로 이동을 관리하는 컴포넌트
// 현재 경로가 /menu일경우, 메뉴를 X로 표시하고, /menu가 아닐경우, 일반 메뉴아이콘으로 변경함.
const MenuIcon = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuClick, setIsMenuClick] = useState(true);
  const handleMenuClick = () => {
    // 현재 경로가 menu가 아닐경우, menu페이지로 이동후, isMenuClick을 false로 설정한다.
    if (location.pathname !== '/menu') {
      navigate('/menu');
    } else {
      navigate(-1);
    }
  }
  useEffect(() => {
    setIsMenuClick(location.pathname !== '/menu');

  }, [location.pathname]);

  return (
    <div className="menu common-flex" onClick={handleMenuClick}>
      <div className={isMenuClick ? "" : "active"}>
        <div className={`common-menu-line`} style={{ backgroundColor: isMenuClick ? 'black' : 'white' }}></div>
        <div className={`common-menu-line`}></div>
        <div className={`common-menu-line`} style={{ backgroundColor: isMenuClick ? 'black' : 'white' }}></div>
      </div>
    </div>
  );
}



function App() {



  return (
    <Provider store={store}>
      <Router>
        <PageLogo />
        <MenuIcon /> {/* 메뉴 아이콘 컴포넌트 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
