import React from 'react'

export default function Camping(props) {

    console.log(props);

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
    console.log(data);
  });

  return (
    <div>Camping</div>
  )
  }