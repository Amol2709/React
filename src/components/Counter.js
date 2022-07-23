import React, {useState, useEffect} from "react";

function Counter(){
    console.log("I am Renderd")
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log(" Initial Re Render")
    },[])

    const handleIncrement = ()=>{
        setCounter(counter+1)
        console.log(counter , "inside increment")
    }
    const handleDecrement = ()=>{
        setCounter(()=>{
                        console.log(counter , "inside decrement");
                        return counter-1
                        }
                    )
        
    }
    return (
        <div className = "counter">
            <div className="counter-btn" onClick = {handleDecrement}>
                -
            </div>
            Counter {counter}
            <div className="counter-btn" onClick = {handleIncrement}>
                +
            </div>
        </div>
    )
}

export default Counter;