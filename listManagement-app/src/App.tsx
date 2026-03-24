import { useState } from 'react';
import LoginStatus from "./components/LoginStatus.tsx";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);
    return (
        <>
            <LoginStatus
                isLoggedIn={isLoggedIn}
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />
        </>
    );
};

export default App;