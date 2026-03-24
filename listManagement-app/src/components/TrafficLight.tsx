const TrafficLight = (
    {
        light,
        onYellow,
        onGreen,
        onRed,
    } : {
        light : string
        onYellow : () => void
        onGreen : () => void
        onRed : () => void
    }) => {
    switch (light) {
        case 'red':
            return (
                <>
                    <p>RED</p>
                    <button onClick={onYellow}>turn Yellow</button>
                </>
        )
        case 'yellow':
            return (
                <>
                    <p>Yellow</p>
                    <button onClick={onGreen}>turn Green</button>
                </>
            )
        case 'green':
            return (
                <>
                    <p>Green</p>
                    <button onClick={onRed}>turn Red</button>
                </>
            )
        default:
            return (
                <p>Red</p>
            )
    }
};

export default TrafficLight;