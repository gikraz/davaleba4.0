import React, { useState } from 'react';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
        <button onClick={toggleTheme}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a task"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

const Card = ({ title, image, description }) => {
    const [isTitleVisible, setIsTitleVisible] = useState(true);

    return (
        <div className="card">
            {isTitleVisible && <h2>{title}</h2>}
            <img src={image} alt={title} style={{ width: '100px' }} />
            <p>{description}</p>
            <button onClick={() => setIsTitleVisible(!isTitleVisible)}>
                Toggle Title
            </button>
        </div>
    );
};

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div style={{ backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? '#fff' : '#000', padding: '20px' }}>
            <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <TodoApp />
            <Counter />
            <Card
                title="Sample Card"
                image="https://via.placeholder.com/150" 
                description="This is a sample card description."
            />
        </div>
    );
};

export default App;
