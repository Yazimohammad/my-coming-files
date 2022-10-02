import React,{useState,useEffect} from "react";

export const TodoPractice = () => {
    const [text,setText]=useState("")
    const [add,setAdd]=useState(["sunday","monday","friday"])
    const [addcopy,setAddcopy]=useState([])
    const [search,setSearch]=useState("")
    const handleadd=()=>{
        setAdd([...add,text])
        setAddcopy([...add,text])
    }

    const handledelete=(i)=>{
        const result =add.filter((elem,ind)=>ind!=i)
        setAdd(result)
        
    }
    const handlebtndelete=(item)=>{
        const result =add.filter((elem)=>elem!=item)
        setAdd(result)
    }
useEffect(()=>{

    const result =addcopy.filter((item)=>item.includes(search))
    setAdd(result)
},[search])

  return (
    <div>
        <input type="text" placeholder="search"onChange={(e)=>setSearch(e.target.value)}/>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleadd}>Add</button>
      {
          add.map((item,i)=>{

            return(
                <div>
                <h1 onClick={()=>handledelete(i)}>{item}</h1>
                <button onClick={()=>handlebtndelete(item)}>Delete</button>
            </div>
            )
          })
      }
    </div>
  );
};
