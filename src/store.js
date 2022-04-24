import rootreducer from './redux/reducer/rootReducer';
import {createStore} from 'redux';

const store = createStore(rootreducer);

export default store;