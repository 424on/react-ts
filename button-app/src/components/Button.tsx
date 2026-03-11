const Button = ({
    message,
    handleClick,
    children,}: {
    message: string;
    children : React.ReactNode,
    handleClick: (message:string) => void,
}) => {
    return (
        <>
         <button onClick={()=>handleClick(message)}>{children}</button>
        </>
    );
};

export default Button;