import React, { useEffect, useRef, useState } from "react";

const UseRefComponent = () => {
  const [value, setValue] = useState(0);
  //* useRef birinci kullanım
  //* DOM elementlerine ulaşmamızı sağlar
  const inputRef = useRef(null);
  const divRef = useRef();
  useEffect(() => {
    // document.querySelector("input").focus();
    // inputRef.current.focus();
  }, []);

  const ChangeBGColor = () => {
    // divRef.current.style.backgroundColor = "orange";
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00FF00",
    //   "rgb(150, 150, 150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // divRef.current.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  const increase = () => {setValue(value + 1)}

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} type="color" placeholder="Enter text..." />
      <button onClick={ChangeBGColor}>ChangeBGColor</button>
      <button onClick={increase}>increase Value</button>
    </div>
  );
};

export default UseRefComponent;
