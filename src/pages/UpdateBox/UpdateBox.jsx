import React, { useState } from "react";

function UpdateBox() {
  const [text, setText] = useState("새로운사물함1");
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      NewBox
      <div className="">
        <input type="text" value={text} onChange={onChange} />
      </div>
      <div className="">{text}</div>
    </div>
  );
}

export default UpdateBox;
