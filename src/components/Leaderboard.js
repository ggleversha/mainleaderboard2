// Leaderboard.js
import React from 'react';

const Leaderboard = ({ leaderboard }) => {
    return (
        <div className="leaderboard">
            <h3>Leaderboard</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Days Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(user => (
                        <tr key={user.userId}>
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
