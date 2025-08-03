//import useState from react

import { useState } from "react";
//pick colors at random
let count = 1;
let counter = 0;
// import{useState} from"react";
function App() {
  let colors = [
    "#f3f3f3",
    "#DE4D3A",
    "#60DE3A",
    "#3ADEC8",
    "#3A9FDE",
    "#3A4DDE",
    "#D03ADE",
    "#DE3A76",
    "#ADDE3A",
    "#DE5E3A",
    "#DEA53A",
  ];
  console.log("First color: ", colors[0]);
  let pick = colors[counter];
  console.log("Color picked: ", pick);
  let endingIndex = colors.length;
  const [initialColor, setColor] = useState(pick);
  function handleButtonClick() {
    setColor(initialColor);
    if (count <endingIndex) {
      console.log("Counter: ", count);
      let initialPick = colors[counter];
      setColor(initialPick);
      counter = counter + 1;
      if(counter===colors.length){
        alert("Reached max")
      }
    }
    console.log("Count: ", counter);

    count = count + 1;

  }
  return (
    <>
      <button id="btn" onClick={handleButtonClick}>
        Click Me
      </button>
      <div id="container" style={{ backgroundColor:colors[counter] }}>
        Text
      </div>
    </>
  );

  //
}
export default App;
