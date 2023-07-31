import { useEffect, useState } from "react";

export default function DogCard():JSX.Element{
    const [url, setUrl] = useState('');
    const serviceUrl:string='https://dog.ceo/api/breeds/image/random';

    function setImageUrl():void{
        fetch('serviceUrl')
        .then((res:Response)=>res.json())
        .then((resultObj)=>{
           const message = resultObj.message;
           setUrl(message);
        });
    }

    useEffect(()=>{setImageUrl()}, []);

    return(<>
        <img src={url} alt="Dog" />
        </>)
    
}