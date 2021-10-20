import { useState } from 'react';

export default function Main(props) {
    const  [message, setMessage] = useState("");



    function saveMessage() {
       const url = "http://localhost:9000/message";
       const data = { message };
       const config = {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "authorization": "Bearer " + localStorage.getItem("token")
           },
           body: JSON.stringify(data)
       };

       fetch(url, config)
          .then(res => res.json())
          .then(console.log)
          .catch(console.error);

    }
    
    return (
        <div>
           <h2> Welcome to the party, {props.user.email}</h2>
       <button onClick={props.logout}>Logout</button>
       

       <hr />
       <div>
           <input type="text" value={message} onChange={e=> setMessage(e.target.value)}/>
           <button onClick={saveMessage}>Save message</button>
       </div>
        </div>
    )
}