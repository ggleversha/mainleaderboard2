// App.js
import React, { useState, useEffect } from 'react';
import CountdownTimer from './components/CountdownTimer';
import TaskForm from './components/TaskForm';
import Leaderboard from './components/Leaderboard';
import './App.css';

const generateUserId = () => {
    return 'user_' + Math.floor(Math.random() * 1000000);
};

const App = () => {
    const [userId, setUserId] = useState(localStorage.getItem('userId') || generateUserId());
    const [stopTimerForUser, setStopTimerForUser] = useState(false);
    const [daysCompleted, setDaysCompleted] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);
    const [taskSubmitted, setTaskSubmitted] = useState(false);

    useEffect(() => {
        localStorage.setItem('userId', userId);
        const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        setLeaderboard(storedLeaderboard);
        const user = storedLeaderboard.find(user => user.userId === userId);
        if (user) {
            setDaysCompleted(user.daysCompleted);
        }
    }, [userId]);

    const storeTask = (task) => {
        const updatedLeaderboard = leaderboard.map(user =>
            user.userId === userId ? { ...user, daysCompleted: user.daysCompleted + 1 } : user
        );
        if (!updatedLeaderboard.find(user => user.userId === userId)) {
            updatedLeaderboard.push({ userId, name: task.name, daysCompleted: 1 });
        }
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
        setStopTimerForUser(true);
        setDaysCompleted(prevDaysCompleted => prevDaysCompleted + 1);
        setTaskSubmitted(true); // Disable form after task submission
    };

    const clearTasks = () => {
        setStopTimerForUser(false);
        setDaysCompleted(0);
        const updatedLeaderboard = leaderboard.map(user =>
            user.userId === userId ? { ...user, daysCompleted: 0 } : user
        );
        setLeaderboard(updatedLeaderboard);
        localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
    };

    const handleDayEnd = () => {
        setStopTimerForUser(false);
        setDaysCompleted(0);
        setTaskSubmitted(false); // Re-enable form when new day starts
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Papps Self Master - Daily</h1>
            </header>
            <CountdownTimer stopTimerForUser={stopTimerForUser} onDayEnd={handleDayEnd} />
            <TaskForm userId={userId} storeTask={storeTask} daysCompleted={daysCompleted} taskSubmitted={taskSubmitted} />
            <button onClick={() => alert('ANSWER DAILY QUESTIONS HERE')}>ANSWER DAILY QUESTIONS HERE</button>
            <button onClick={() => alert('DAILY QUESTIONS')}>DAILY QUESTIONS</button>
            <button onClick={clearTasks}>Clear Tasks</button>
            <Leaderboard leaderboard={leaderboard} />
        </div>
    );
};

export default App;
