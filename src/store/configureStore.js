import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import { throttle } from 'lodash';
import todoReducer from './reducers'

const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(todoReducer, persistedState);

    store.subscribe(throttle(() => {
      saveState({
        todos: store.getState().todos
      });
    }), 1000);

    return store;
}

export default configureStore;