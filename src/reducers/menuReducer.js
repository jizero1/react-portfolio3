import { TOGGLE_MENU } from '../actions/actionTypes';
// 초기상태
const menuState = {
    isMenuOpen: false,
};
// 리듀서 함수 
// 상태 변경의 핵심적인 역할
// 현재 상태와 액션객체를 받아서 새로운 상태를 반환하는 함수
const menuReducer = (state = menuState, action) => {
    switch (action.type) { // 액션을 받아서
        case TOGGLE_MENU: // 액션 타입이 TOGGLE_MENU라면,
            return {
                ...state, // 기존 상태 복사한후,
                isMenuOpen: !state.isMenuOpen, // 값을 반대로 반전시킴
            };
            default: 
                return state; // 액션 타입이 TOGGLE_MENU가 아니라면, 기존상태 그대로 반환
    }
};

export default menuReducer;