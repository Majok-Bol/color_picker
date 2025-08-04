import { useState } from "react";

// import{useState} from 'react';
export default function App() {
  //initial color is white
  const [colour, setColor] = useState("#ffffff");
  return (
    <>
    <p>Color picker built with React</p>

      <div id="color-container" style={{ backgroundColor: colour }}>
        <input
          type="color"
          value={colour}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </>
  );
}
