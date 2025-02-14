import { Routes, Route } from "react-router-dom";
import BeMyVal from "./BeMyVal.tsx";
import IlyCards from "./IlyCards.tsx";
const App = () => {
    return (
        <Routes>
            <Route path="/" element={<BeMyVal/>}/>
            <Route path="/ily-cards" element={<IlyCards/>}/>
        </Routes>
    );
};

export default App;