import { useEffect, useState } from "react";

export default function Tips():JSX.Element{
    const [activity,setActivity] = useState<string>('');
    const url = 'https://www.boredapi.com/api/activity';

    
    function fetcActivity():void{
        fetch(url)
        .then((response) => response.json())
        .then((data) => setActivity(data.activity))
        .catch((error) => console.error('Error', error));
    }
  
    useEffect(()=>{fetcActivity()}, []);

return (
    <>
      <h2>Trips</h2>
     {activity};
    </>
  )
}
