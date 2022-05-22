import React from 'react'
import { useParams } from 'react-router-dom';
import { FetchData } from './api-calls/FetchData';
import { Messages } from './chat/Messages'
import { baseUrl } from './Config';
import { SideNav } from './side-nav/SideNav';
import { useState } from 'react';

export const Wrapper = () => {
  return (
    <>
    <SideNav/>
    <Messages />
    </>
  )
}
