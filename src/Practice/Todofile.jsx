
import React,{useState,useEffect} from "react";

export const Todofile=()=>{
    const [txt,setTxt]=useState("")
    const [add,setAdd]=useState([])
    const [addcopy,setAddcopy]=useState([])
    const [search,setSearch]=useState("")

const handleadd=()=>{
setAdd([...add,txt])
}
const handledelete=(i)=>{
    const result=add.filter((elem,ind)=>ind!==i)
    setAdd(result)
}
useEffect=(()=>{
const result =addcopy.filter((item)=>item.includes(search))
setAdd(result)
},[search])

    return(
        <div>
            <h1>Todo list </h1>
            <input type="text" placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
<input type="text" onChange={(e)=>setTxt(e.target.value)} />
            <button onClick={handleadd}>Submit</button>
            {add.map((item,i)=>{
                return(
                    <div>
                        <h1 onClick={()=>handledelete(i)}>{item}</h1>
                    </div>
                )
            })}
        </div>
    )
}