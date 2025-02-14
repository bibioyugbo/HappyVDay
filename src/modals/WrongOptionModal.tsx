import {useEffect, useState} from "react";

const WrongOptionModal = ({ onClose }: { onClose: () => void }) => {
    const [countdown, setCountdown] = useState(10);

    // Start countdown when the modal appears
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(interval); // Stop countdown at 0
                    onClose(); // Close modal
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center animate-shake">
                <h2 className="text-red-600 text-xl font-bold">❌ WRONG OPTION!</h2>
                <p className="text-lg mt-2">Self destruct in <span className="text-red-500 font-bold text-2xl">{countdown}</span> seconds...</p>
                <button onClick={onClose} className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg">Abort Mission</button>
            </div>
        </div>
    );
};

const App = () => {
    const [showModal, setShowModal] = useState(false);

    const wrongOptionSelect = () => {
        setShowModal(true);
        document.body.classList.add("animate-shake"); // Add shake effect to the whole screen

        setTimeout(() => {
            document.body.classList.remove("animate-shake"); // Stop shaking after 1 second
        }, 1000);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={wrongOptionSelect} className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg">
                Click Me (Wrong Option)
            </button>
            {showModal && <WrongOptionModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default App;
