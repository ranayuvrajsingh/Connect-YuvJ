import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not found</h2>
      <p>Sorry this page doesn't exists</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
