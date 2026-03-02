"use client"
import React, { useState } from 'react';
import '../style.css';



async function UserPosts() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')    
}
function Lst() {
    return (
    <>
        <h1> Users Display</h1>
    </>
    )
}

export default Lst;
