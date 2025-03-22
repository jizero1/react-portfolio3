import { combineReducers } from 'redux';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    menu: menuReducer, // 메뉴 리듀서
});

export default rootReducer;