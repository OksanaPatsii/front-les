import { useState } from "react";

export default function Counter():JSX.Element{
// const temp = useState(0);
// const counter = temp[0];
// const setCounter = temp[1];

// const[counter,setCounter] = temp;

    const[counter,setCounter] = useState(0);

    function add():void{
        setCounter(counter+1);
    }
// let counter:number=0;

// function add():void{
//     counter++;
//     console.log(counter);
// }

    return(
        <>
        <button type="button" onClick={add}>Click Me!</button>
        <h2>counter value: {counter}</h2>
        </>
    )
}

