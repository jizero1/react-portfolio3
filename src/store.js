import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

console.log('rootReducer:', rootReducer);

const store = configureStore({
    reducer: rootReducer,
});

export default store;