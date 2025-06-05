"use client";
import React from "react";
import Link from "next/link";

function Button() {
  return (
    <Link href="/waitlist" >
      <button className="button">
        Join the waitlist
      </button>
    </Link>
  );
}

export default Button;
