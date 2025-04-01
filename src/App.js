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
// import './Footer.css';


const PageLogo = () => {
  const location = useLocation();

  // 상단에 별 로고 화면에 표시 유무 (기본 상태는 true로 보이게함)
  const [logoView, setLogoView] = useState(true);

  // 메뉴페이지에서는 별 로고를 표시하지 않음
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
const MenuIcon = () => {
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
      setMenuIcon(true);
    }
  };

  // 메뉴페이지에 들어오면 메뉴아이콘을 X로 변경
  useEffect(() => {
    if (location.pathname === '/menu') {
      setMenuIcon(false); // 메뉴 페이지에 있을 때
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
        <div className={`common-menu-line ${menuIcon ? '' : 'menu-line1'}`} style={menuColor}></div>
        <div className={`common-menu-line ${menuIcon ? '' : 'menu-line2'}`} style={menuColor}></div>
        <div className={`common-menu-line ${menuIcon ? '' : 'menu-line3'}`} style={menuColor}></div>
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
        {/* ++++++++++++++++++ 현재 경로가 menu일경우, Footer은 표시하지 않음!  */}
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
