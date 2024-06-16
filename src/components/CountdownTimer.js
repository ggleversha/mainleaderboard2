<<<<<<< HEAD
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ stopTimerForUser, onDayEnd }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });
=======
// CountdownTimer.js
import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ stopTimerForUser, onDayEnd }) => {
    const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
>>>>>>> 0240b817b6f6b84d031f1421a6a7772eeacfcbfb

    useEffect(() => {
        if (!stopTimerForUser) {
            const timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft.seconds === 0) {
                        if (prevTimeLeft.minutes === 0) {
                            if (prevTimeLeft.hours === 0) {
                                clearInterval(timer);
                                onDayEnd();
<<<<<<< HEAD
                                return { hours: 12, minutes: 0, seconds: 0 }; // Reset timer to 12 hours
=======
                                return prevTimeLeft;
>>>>>>> 0240b817b6f6b84d031f1421a6a7772eeacfcbfb
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

    return (
        <div className="countdown-timer">
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </div>
    );
};

export default CountdownTimer;
