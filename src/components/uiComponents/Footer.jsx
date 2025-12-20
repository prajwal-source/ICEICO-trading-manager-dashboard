import { useEffect, useState } from "react";
import { Globe } from "lucide-react";

function Footer() {
    const [time, setTime] = useState("");
    const [speed, setSpeed] = useState("0 Kb");

    // 🔹 Live clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-GB")); // HH:mm:ss
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // 🔹 Internet speed (Network API + fallback)
    useEffect(() => {
        const updateSpeed = () => {
            if (navigator.connection && navigator.connection.downlink) {
                // Convert Mbps → Kb (approx)
                const kb = Math.round(navigator.connection.downlink * 1024);
                setSpeed(`${kb}/0 Kb`);
            } else {
                // fallback (simulated range)
                const randomKb = Math.floor(Math.random() * 20000) + 5000;
                setSpeed(`${randomKb}/0 Kb`);
            }
        };

        updateSpeed();
        const interval = setInterval(updateSpeed, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t">
            <div className="flex items-center px-4 py-2 text-xs">
                {/* Left spacer */}
                <div className="flex-1" />
                {/* Right side status */}
                <div className="flex items-center gap-6 text-gray-800">
                    <div className="flex items-center gap-1">
                        <Globe size={18} className="text-blue-500 font-bold" />
                        <span className="font-bold">Rockfieldtrade</span>
                    </div>
                    <div className="font-bold">{time}</div>
                    <div className="font-bold">{speed}</div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
