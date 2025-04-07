## 프로젝트명
최지영의 포트폴리오

## 프로젝트 제작 기간
2025.03.20 ~

## 개발자
최지영 (1인개발)

## 사용 기술
React / React Router(페이지이동) / Figma(포트폴리오 디자인시 활용)

## 주요 기능
1. 마우스 커서를 별로 변경
- 특정 페이지(메뉴페이지)접속시, 마우스 커서를 별로 변경함. 또한, 마우스를 특정 위치(메뉴텍스트 또는 contact아이콘)에 올리게 되면 별의 색깔이 전해지는 느낌을 내기 위해 속이 빈 별 이미지로 교체하여 사용자경험(UX)를 향상시킴.

2. navigator.clipboard.writeText() API 사용
- 메뉴페이지의 contact아이콘에 마우스를 올리면 하단에 링크가 보이게 되는데, 옆에 복사버튼을 클릭하게되면 해당 링크를 복사하고, alert창을 통해 사용자에게 복사가 잘 되었음을 알림.

3. 홈화면 글자 타이핑효과
- react-typed 라이브러리를 이용하여 타이핑 효과를 구현함.
  
## 문제 해결
- 메뉴페이지 menu.js
1. 메뉴페이지에서 아무런 메뉴도 클릭하지 않고, 메뉴페이지에서 벗어나면 이전페이지로 이동해야하는데 <Link>로 페이지 이동을 구현 하려고 하니 제대로 동작 되지 않음.
* 문제의 이유 : <Link>는 페이지이동시 새로고침 없이 이동하는 정적 페이지 이동. 요소 클릭시 페이지 이동하는 기능에 적합함.
* 문제 해결 방법 : useNavigate를 사용함. useNavigate훅은 동적 페이지 이동이 가능함. 버튼 클릭 또는 이벤트에 의해 동적으로 페이지를 이동 시킬경우에 적합함. useLocation을 이용하여 현재페이지 위치를 파악하고, 현재경로가 /menu에 있다면 navigate(-1)로 이전페이지로 이동하고, 현재경로가 /menu에 없다면 navigate('/menu')하여 메뉴페이지로 이동함

2. 메뉴페이지에서 contact아이콘 아래 링크를 복사하기 위한 복사버튼을 만들었는데, 복사를 어떻게 해야하는지 고민하다가 navigator.clipboard.writeText()라는 내장API가 있다는걸 알게됨. 해당 기능을 사용하여 링크 복사에 성공함.

- 이미지 경로 문제
1. 페이지 배포 이후, 배포된 페이지에서는 이미지가 정상적으로 보이지만, 로컬환경에서는 이미지가 보이지 않는 문제가 발생함.
* 문제의 이유 : 'HashRouter'을 사용하면서 이미지 경로처리에 문제가 발생한 것. (경로 처리 방식이 로컬개발 환경에서 경로해석이 달라짐)
* 문재 해결 방법 : 'public'폴더 내 이미지 불러오는 경로를 'process.env.PUBLIC_URL'을 사용하여 절대경로로 수정하여 해결함.
* 배운 점 : 이 문제를 해결 하면서 'public'폴더 내 이미지를 로컬과 배포환경에서 안전하게 처리하는 방법을 알게되었음.



## 프로젝트를 통해 얻은 정보들
- 이전페이지로 이동하는 기능을 구현하면서 useNavigate와 useLocation의 사용법에 대해 자세하게 알게됨.
- navigator.clipboard.writeText() API를 이용하여 링크복사하는 방법을 알게됨.
- react-typed 타이핑 효과 구현하는 방법
- HashRouter사용시 이미지 경로를 안전하게 처리하는 방법
