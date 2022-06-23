import React, { useEffect,useState } from 'react'

const Practice = () => {
const [resourceType,setResourceType]= useState("users");


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => console.log(json))

},[resourceType]);


  return (
    <div>
        <div>
            <button onClick={()=>{
                setResourceType("users");
                
            }} >User</button>
            <button onClick={()=>{
                  setResourceType("posts");

            }}>Post </button>
            <button onClick={()=>{
                  setResourceType("comments");

            }}>Comments</button>  
        </div>
        


    </div>
  )
}

export default Practice