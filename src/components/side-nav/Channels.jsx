import React from "react";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "../api-calls/FetchData";
import { baseUrl } from "../Config";

export const Channels = () => {
  const path = `${baseUrl}/channels`;
  const channels = FetchData(path);
  console.log("Data from Channel component",channels);
  return (
    <>
      {channels.map((channel)=>(
     <Link to={`/channels/${channel.id}`}> 
     <li key={channel.id}>
        <span className="hashtag">#</span> {channel.attributes.name}
      </li></Link>
      ))}
    </>
  );
};
