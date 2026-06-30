const CalculatorButton = ({value, className, onClick }:ButtonConfigs) => {
    return (
        <>
            <input type="button" className={className} value={value} onClick={onClick} />
        </>
    );
};

export default CalculatorButton;