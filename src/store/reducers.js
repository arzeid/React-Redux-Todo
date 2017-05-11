import { combineReducers } from 'redux';
import todos, * as fromTodos from './todos';



const todoReducer = combineReducers({todos});

export default todoReducer;

export const getVisibleTodos = (state, filter) => (
  fromTodos.getVisibleTodos(state.todos, filter)
)
