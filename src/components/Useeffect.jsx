import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [resourceType, setResourceType] = useState("users");
  let [counter, setCounter]=useState(0);



  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => console.log(json))
  
  },[resourceType])
  

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          users
        </button>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          post
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          comment
        </button>
        
      </div>
      <div>{resourceType}</div>
          <div onClick={()=>{
            setCounter(counter=counter+1)
          }}>{counter}</div>
          <div>Mather</div>

    </div>
  );
};

export default Useeffect;
