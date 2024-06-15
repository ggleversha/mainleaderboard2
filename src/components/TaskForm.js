// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ userId, storeTask, daysCompleted, setStopTimerForUser, taskSubmitted }) => {
    const [name, setName] = useState('');
    const [questions, setQuestions] = useState({
        q1: '',
        q2: '',
        q3: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && questions.q1 && questions.q2 && questions.q3) {
            const task = { name, daysCompleted: 1, ...questions };
            storeTask(task);
            setName('');
            setQuestions({ q1: '', q2: '', q3: '' });
            setStopTimerForUser(true);
        }
    };

    const handleQuestionChange = (e) => {
        const { name, value } = e.target;
        setQuestions((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required disabled={taskSubmitted} />
                </div>
                <div>
                    <label>Days Completed:</label>
                    <input type="number" value={daysCompleted} onChange={() => {}} required disabled />
                </div>
                <h3>Daily Questions</h3>
                <div className="questions">
                    <div className="question">
                        <label>What is 2 + 2?</label>
                        <input
                            type="text"
                            name="q1"
                            value={questions.q1}
                            onChange={handleQuestionChange}
                            required
                            disabled={taskSubmitted}
                        />
                    </div>
                    <div className="question">
                        <label>What is 5 - 3?</label>
                        <input
                            type="text"
                            name="q2"
                            value={questions.q2}
                            onChange={handleQuestionChange}
                            required
                            disabled={taskSubmitted}
                        />
                    </div>
                    <div className="question">
                        <label>What is 4 * 2?</label>
                        <input
                            type="text"
                            name="q3"
                            value={questions.q3}
                            onChange={handleQuestionChange}
                            required
                            disabled={taskSubmitted}
                        />
                    </div>
                </div>
                <button type="submit" disabled={taskSubmitted}>Submit</button>
            </form>
        </div>
    );
};

export default TaskForm;
