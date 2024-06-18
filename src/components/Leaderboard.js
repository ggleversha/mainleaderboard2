// Leaderboard.js
import React from 'react';
import './Leaderboard.css'; // Import the CSS file for styling

const Leaderboard = ({ leaderboard, currentUser }) => {
    return (
        <div className="leaderboard-container">
            <h3>Leaderboard</h3>
            <table className="leaderboard">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Days Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((user) => (
                        <tr
                            key={user.userId}
                            className={currentUser === user.userId ? 'highlight-current-user' : ''}
                            style={{ backgroundColor: user.reset ? 'red' : 'inherit' }}
                        >
                            <td>{user.name}</td>
                            <td>{user.daysCompleted}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
