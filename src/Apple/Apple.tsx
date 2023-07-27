import { useState } from "react";

export default function Apple():JSX.Element {
    
    const[apple,setApple] = useState<string>('Apple');
    function eatApple():void{
        setApple((returnApple) => (returnApple === 'Apple' ? 'Stub' : 'Apple'));
    }
    
    return( 
    <>
        <h2> {apple}</h2>
    <button type="button" onClick={eatApple}>
    {apple === 'Apple' ? 'Eat apple' : 'Restore apple'}

    </button>
    </>
    )
}