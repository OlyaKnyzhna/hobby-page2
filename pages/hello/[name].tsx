//import Nav from "../components/nav";

import { useRouter } from "next/router";
import { useState } from "react";

export default function IndexPage() {
  const router = useRouter();
  const name = router.query.name;

  return (
    <div>
      {/* <Nav /> */}
      <div className="py-20">
        <h1 className="text-5xl text-center text-indigo-500">Hello, {name}!</h1>
      </div>
    </div>
  );
}
