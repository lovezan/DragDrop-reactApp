/* eslint-disable no-unused-vars */
import React, { useState ,useRef} from "react";
import Card from "./card";

function Foreground() {
  const ref =useRef(null);
  const data = [
    {
      desc: "The only way to do great work is to love what you do.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "In the middle of difficulty lies opportunity.",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagtitle: "Update",
        tagColor: "blue",
      },
    },
    {
      desc: "Believe you can and you're halfway there.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "The future belongs to those who believe in the beauty of their dreams.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: null,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Your time is limited, don't waste it living someone else's life.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: null,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Don't watch the clock; do what it does. Keep going.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagtitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  
  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0  w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
