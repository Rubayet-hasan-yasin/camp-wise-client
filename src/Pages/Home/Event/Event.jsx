import { useEffect, useState } from "react";

const Event = () => {
    const calculateTimeLeft = () => {
        const targetDate = new Date('2023-06-27'); // Set the target date (format: YYYY-MM-DD)
        const currentTime = new Date().getTime();
        const difference = targetDate - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="grid md:grid-cols-2 mb-40">
            
            <div className="hero h-[70vh]" style={{backgroundImage: "url(https://plus.unsplash.com/premium_photo-1681843246988-5be25c946e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)"}}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    
                </div>
            </div>

            <div className="hero h-[70vh]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)" }}>
                <div className="hero-overlay bg-opacity-20"></div>


                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div className="flex flex-col p-2 bg-neutral-900 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.days }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 bg-neutral-900 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.hours }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 bg-neutral-900 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.minutes }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2 bg-neutral-900 rounded-box text-neutral-content">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": timeLeft.seconds }}></span>
                        </span>
                        sec
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Event;