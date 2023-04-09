//import Nav from "../components/nav";

import { useState } from "react";

export default function IndexPage() {
  const [name, setName] = useState("Stranger");
  const [color, setColor] = useState("pink-700");
  

  return (
    <div>
      {/* <Nav /> */}
      <div className="py-20">
        <h1 className="text-5xl text-center text-indigo-500">
          Hello! My name is Olya!
        </h1>
        <h3 className="text-xl pt-20 text-center text-indigo-500">
          What is your name?
        </h3>
        <form className="text-center pt-5">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Color:
            <input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1 className={`text-5xl text-center text-${color}`}>
          Hello {name}, nice too meet youk!
        </h1>
      </div>
    </div>
  );
}
