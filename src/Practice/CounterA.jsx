
import React,{useState} from "react"

export const CounterA=()=>{

    const [count,setCount]=useState(0);
    
count > 0 && setCount(count+1)

    

return(
<div>
<button onClick={()=>setCount(count+1)}>Increament</button>
<h1>count:{count}</h1>
<button onClick={()=>setCount(count-1)}>Decreament</button>
</div>

)

}