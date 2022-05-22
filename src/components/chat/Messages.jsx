import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../api-calls/FetchData";
import { baseUrl } from "../Config";
import { AddData } from "../api-calls/CreateChannel";

export const Messages = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url=`${baseUrl}/channels/${id}?populate=messages`;

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const result = await response.json();
      setData(result.data);
      console.log("Fetched data in Message component", data);
    }
    setInterval(getData,3000);
    // getData();
  }, [id]);

  const path='messages';
  const [newMessage, setNewMessage]=useState();
  AddData(path,newMessage);


  return (
    <div className="main">
      <h2>Conversations</h2>
      {data.attributes.messages.data.map((msg)=>(
        <p>{msg.attributes.message}</p>
      ))}
      <form className="send">
        <input type="text" placeholder="type.." id="newMsgId" />
        <button type="submit" >Send</button>
      </form>onClick={(e)=>{setNewMessage(e.target.form.newMsgId.value)}}
    </div>
  );
};
