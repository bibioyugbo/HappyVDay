import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const WrongOptionModal = ({ onClose }: { onClose: () => void }) => {
    const [countdown, setCountdown] = useState(10);


    // Start countdown when the modal appears
    useState(() => {
        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(interval); // Stop countdown at 0
                    onClose(); // Close modal
                }
                return prev - 1;
            });
        }, 1000);
    }, []);

    return (
        <div className="fixed modal-background inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[300px]">
                <h2 className="text-red-600 text-xl font-bold">❌ WRONG OPTION!</h2>
                <p className="text-lg mt-2">
                    Self destruct in <span className="text-red-500 font-bold text-2xl">{countdown}</span> seconds...
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 pop-question bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                >
                    Abort Mission
                </button>
            </div>
        </div>
    );
};


export default function BeMyVal() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


    const wrongOptionSelect = () => {
        setShowModal(true);
        document.body.classList.add("animate-shake"); // Add shake effect to the whole screen

        setTimeout(() => {
            document.body.classList.remove("animate-shake"); // Stop shaking after 1 second
        }, 1000);
    };


    return (
        <div className={"flex gap-[100px] flex-col items-center justify-center h-[100vh]"}>
            <div className={" h-[70px] flex cursor-pointer items-center border-none pop-question"}>
                Be My Val?
            </div>
            <div className={" cursor-pointer justify-center items-center flex my-4 gap-[30px]"}>
                <button onClick={() => wrongOptionSelect()}
                        className={"h-[30px] red-text text-white hover:bg-red-500  justify-center rounded-[12px] text-[10px] flex items-center w-[70px] tap-effect active:scale-90 transition transform cursor-pointer  outline-0 border border-[white] "}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none">
                            <path fill="url(#fluentColorWarning160)"
                                  d="M9.092 2.638a1.25 1.25 0 0 0-2.182 0L2.157 11.14A1.25 1.25 0 0 0 3.247 13h9.504a1.25 1.25 0 0 0 1.091-1.86z"/>
                            <path fill="url(#fluentColorWarning161)"
                                  d="M8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8V5.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0"/>
                            <defs>
                                <linearGradient id="fluentColorWarning160" x1="3.872" x2="10.725" y1=".279"
                                                y2="14.525" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ffcd0f"/>
                                    <stop offset="1" stop-color="#fe8401"/>
                                </linearGradient>
                                <linearGradient id="fluentColorWarning161" x1="6" x2="8.466" y1="5" y2="11.575"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4a4a4a"/>
                                    <stop offset="1" stop-color="#212121"/>
                                </linearGradient>
                            </defs>
                        </g>
                    </svg>
                    NO
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <g fill="none">
                            <path fill="url(#fluentColorWarning160)"
                                  d="M9.092 2.638a1.25 1.25 0 0 0-2.182 0L2.157 11.14A1.25 1.25 0 0 0 3.247 13h9.504a1.25 1.25 0 0 0 1.091-1.86z"/>
                            <path fill="url(#fluentColorWarning161)"
                                  d="M8.75 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.5 8V5.5a.5.5 0 0 1 1 0V8a.5.5 0 0 1-1 0"/>
                            <defs>
                                <linearGradient id="fluentColorWarning160" x1="3.872" x2="10.725" y1=".279"
                                                y2="14.525" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ffcd0f"/>
                                    <stop offset="1" stop-color="#fe8401"/>
                                </linearGradient>
                                <linearGradient id="fluentColorWarning161" x1="6" x2="8.466" y1="5" y2="11.575"
                                                gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#4a4a4a"/>
                                    <stop offset="1" stop-color="#212121"/>
                                </linearGradient>
                            </defs>
                        </g>
                    </svg>
                </button>
                {showModal && <WrongOptionModal onClose={() => setShowModal(false)}/>}


                    <Link
                        to="/ily-cards"
                        className=" text-center no-underline active:scale-90 transition transform text-white shadow-2xl tap-effect w-[100px] cursor-pointer pop-question text-xs text-deeppink border rounded-lg border-white"
                    >
                        YES
                    </Link>

            </div>

        </div>
    )
}