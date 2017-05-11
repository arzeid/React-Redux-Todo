import { v4 } from 'node-uuid';

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'hey',
        completed: true
    },{
        id: v4(),
        text: 'ho',
        completed: true
    },{
        id: v4(),
        text: "let's go",
        completed: false
    }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchTodos = (filter) =>
    delay(50).then(() => {
        switch (filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'completed':
                return fakeDatabase.todos.filter( t => t.completed );
            case 'active':
                return fakeDatabase.todos.filter( t => !t.completed );
            default:
                // eslint-disable-next-line
                throw new Error('Unknown Filter: ${filter}.');
        }
    });

export { fetchTodos };
