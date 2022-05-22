import React, { useState } from "react";
import { Channels } from "./Channels";
import { AddData } from "../api-calls/CreateChannel";

export const SideNav = () => {
  const url='channels';
  const [newChannel, setNewChannel]=useState();
  AddData(url,newChannel);
  return (
    <div className="sidenav">
      <div className="channels">
        <h3>Channels</h3>
        <form>
          <input className="input-box_text" id="newChId" type="text" />
          <input type="button" value="Create" onClick={(e)=>{setNewChannel(e.target.form.newChId.value)}}/>
        </form>
      </div>
      <ul>
        <Channels />
      </ul>
      <div className="userarea">
        <h3>User</h3>
      </div>
    </div>
  );
};
