import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "Chartreuse",
    "red",
    "hotpink",
  ];

  const coloritems=colors.map((color)=>{
    return (
    <li key={color} style={{color:color}}>
      {color}
      </li>
      );
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
      {coloritems}
      </ol>
    </div>
  );
}

export default ColorList;
