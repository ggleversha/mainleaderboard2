// CountdownTimer.js
import React, { useEffect, useState } from 'react';
import './CountdownTimer.css'; // Import the CSS file for styling

const CountdownTimer = ({ stopTimerForUser, onDayEnd }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

    useEffect(() => {
        if (!stopTimerForUser) {
            const timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft.seconds === 0) {
                        if (prevTimeLeft.minutes === 0) {
                            if (prevTimeLeft.hours === 0) {
                                clearInterval(timer);
                                onDayEnd();
                                return { hours: 24, minutes: 0, seconds: 0 }; // Reset timer to 24 hours
                            }
                            return { hours: prevTimeLeft.hours - 1, minutes: 59, seconds: 59 };
                        }
                        return { ...prevTimeLeft, minutes: prevTimeLeft.minutes - 1, seconds: 59 };
                    }
                    return { ...prevTimeLeft, seconds: prevTimeLeft.seconds - 1 };
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [stopTimerForUser, onDayEnd]);

    const formatTime = (time) => {
        const hours = String(time.hours).padStart(2, '0');
        const minutes = String(time.minutes).padStart(2, '0');
        const seconds = String(time.seconds).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="countdown-timer">
            <span>{formatTime(timeLeft)}</span>
        </div>
    );
};

export default CountdownTimer;
