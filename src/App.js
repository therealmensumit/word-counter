import React, { useState } from "react";
import { Button } from "./Components/Button";
import { MainApp } from "./Components/MainApp";

export default function App() {
  const [login, setLogin] = useState(false);
  const btnHandle = () => {
    setLogin(!login)
  }
  return (
    <div className="container mx-auto text-center mt-8">
      <h1 className="text-5xl mb-4">This is a Word Counter App</h1>
      {!login ? <Button txt='Start App' clck={btnHandle} /> : <MainApp />}
    </div>
  );
}
