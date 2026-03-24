import { useState } from 'react';
import TrafficLight from './components/TrafficLight';

const App = () => {
   const[light, setLight] = useState<string>("red")
    const onYellow = () => setLight("yellow")
    const onGreen = () => setLight("green")
    const onRed = () => setLight("red")
    return (
       <>
           <TrafficLight
               light={light}
               onYellow={onYellow}
               onGreen={onGreen}
               onRed ={onRed}
           />

       </>
   )
};

export default App;