import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import Menu from './pages/Menu/Menu';
import Footer from './Footer.js';
import { Provider } from 'react-redux';
import store from './store';

// 상단에 Star Logo표시 컴포넌트
const PageLogo = () => {
  const location = useLocation();
  const [logoView, setLogoView] = useState(true);

  // 현재 위치가 /menu일경우, 로고(별로고)를 표시하지 않음
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
        <Link to="/"><img className="logoImg" src={process.env.PUBLIC_URL+"/images/cursor-star.png"} alt="별 로고"></img></Link>
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

  // 메뉴 아이콘 클릭시 실행되는 함수
  // 현재경로가 /menu가 아니라면 /menu로 이동하고, /menu에 있다면 이전 페이지로 이동한다.
  const handleMenuClick = () => {
    if (location.pathname !== '/menu') {
      navigate('/menu');
    } else {
      navigate(-1);
    }
  }

  useEffect(() => {
    // 현재 경로가 /menu에 있으면 false, /menu가 아니라면 true로 isMenuClick의 상태를 변경함.
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
        <MenuIcon />
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
