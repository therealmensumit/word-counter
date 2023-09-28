import React, { useState } from "react";
import { Button } from "./Button";

export const MainApp = () => {
  let [text, setText] = useState("");
  const upcase = () => {
    setText(text.toUpperCase());
  };
  const lowcase = () => {
    setText(text.toLowerCase());
  };
  const copyHandle = () => {
    // setText(text.select(), navigator.clipboard.writeText(text.value));
    let textarea = document.getElementById("textarea");
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    alert("text copied!");
  };
  const clear = () => {
    setText((text = ""));
  };
  const inputHandle = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="w-6/12 mx-auto">
      <div className="mb-2 flex gap-4">
        <Button txt="Uppercase" clck={upcase} />
        <Button txt="Lowercase" clck={lowcase} />
        <Button txt="Copy" clck={copyHandle} />
        <Button txt="Clear" clck={clear} />
      </div>
      <textarea
        value={text}
        onChange={inputHandle}
        className="border border-black w-full h-48 rounded-md resize-none p-2"
        id="textarea"
      ></textarea>
      <div className="grid grid-cols-2 mt-4 text-center">
        <div className="border-r">
          <h3 className="text-3xl">{text.length}</h3>
          <p>Characters</p>
        </div>
        <div className="">
          <h3 className="text-3xl">{text.split(" ").length}</h3>
          <p>Words</p>
        </div>
      </div>
    </div>
  );
};
