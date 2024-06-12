import { useState } from "react";

 export function CreateTodo(){
    const title=[title, setTitle]=useState("");
    const description=[description, setDescription]=useState("");
    return(
    <div>
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="title"
        onChange={function(e){
            const title = e.target.value
            setTitle(e.target.value);
        }}></input> <br />
        <input style={{
            margin:10,
            padding:10
        }} type="text" placeholder="description"
        onChange={function(e){
            const description = e.target.value
            setDescription(e.target.value);
        }}></input> <br />
        <button style={{
            margin:10,
            padding:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "ContentType":"application/json"
                }
            }).then(async function(res){
                const json=await res.json();
                alert("todos created")
            })
            }

        }>Add todo</button>
    </div>
    )
}
// module.exports = CreateTodo