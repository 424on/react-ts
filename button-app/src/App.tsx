import Button from "./components/Button";

const App = () => {
    const handleClick = (message:string) => alert(message);
    return (
        <>
           <Button handleClick={handleClick} message="로그인이 되었습니다.">Login</Button>
        </>
    );
};

export default App;