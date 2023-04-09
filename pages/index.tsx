//import Nav from "../components/nav";
import Link from "next/link";
import { useState } from "react";

export default function IndexPage() {
  const [name, setName] = useState("Stranger");

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

          <input type="submit" value="Submit" />
        </form>
        <h1 className="text-5xl text-center text-indigo-500">
          Hello {name}, nice too meet you!
        </h1>
        <div className="text-center p-10">
          <Link legacyBehavior href={`/hello/${name}`}>
            <a className="text-blue-300 underline">
              Click to go to your personal page
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
