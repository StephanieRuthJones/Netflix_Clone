import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers)

store.subscribe(throttle(() => {
    saveState({
        state: store.getState()
    });
}, 1000))