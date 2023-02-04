import React from "react";

function UpdateBox({ text, onChange }) {
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
