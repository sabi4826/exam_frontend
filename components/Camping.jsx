import React from 'react'
import { useState, useEffect } from 'react';

export default function Camping() {
const [camping, setCamping] = useState({});
// FROM INSOMNIA:
const options = {method: 'GET', headers: {'Content-type': 'application/json'}, body: 'false'};

fetch('http://localhost:8080/available-spots', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

 /*  setCamping(response); */

  // FROM SIMPLE SHOP, App.jsx:

  /* useEffect(() => {
    async function getData(){
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();
      setCamping(data);
    }
    getData();
    console.log(data);
  }, []); */

  // FROM SLIDES:
   /*  const [camping, setCamping] = useState({});

    fetch("http://localhost:8080/available-spots", {
        method: "get",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(data => {
    //do stuff with the data
    
    setCamping(data);
    console.log(camping);
  }); */

  return (
    <section>
       <Camping camping={camping}/>
    </section>
  )
  }