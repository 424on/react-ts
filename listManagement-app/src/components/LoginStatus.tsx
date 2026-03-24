const LoginStatus = ({
        isLoggedIn,
        handleLogin,
        handleLogout,
    }: {
    isLoggedIn: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}) => {
    if (isLoggedIn) {
        return (
            <>
                <p>로그인 되었습니다</p>
                <button onClick={handleLogout}>로그아웃</button>
            </>
        )
    }

    return (
        <>
            <p>로그인이 필요합니다.</p>
            <button onClick={handleLogin}>로그인</button>
        </>
    )
};

export default LoginStatus;