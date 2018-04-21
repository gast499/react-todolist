import React from 'react';
import AddTodo from './components/addTodo/';

const App = () => (
    <div>
        <h1>My Todo list</h1>
        <AddTodo submitTodo={() => {}} />
    </div>
);

export default App;