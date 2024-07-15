import React from 'react';
import './Leaderboard.css';

const Leaderboard = ({ leaderboard }) => {
    return (
        <div className="leaderboard-container">
            <h3 className="leaderboard-heading">Leaderboard</h3>
            <table className="leaderboard">
                <thead>
                    <tr>
                        <th>POS</th>
                        <th>Name</th>
                        <th>Days Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((user, index) => (
                        <tr key={user.userId}>
                            <td>{index + 1}</td>
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
