import React from "react";
import { SideNav } from "./side-nav/SideNav";

export const Welcome = () => {
  return (
    <>
      <SideNav />
      <div className="main">
        <h2>Welcome to Circles</h2>        
        <form className="send">
          <input type="text" placeholder="type.." name="search" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};
