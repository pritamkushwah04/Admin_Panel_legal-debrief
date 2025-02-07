import React, { useEffect, useRef } from "react";

const mdRules = [
  { title: "From h1 to h6", rule: "# Heading -> ###### Heading" },
  { title: "Blockquote", rule: "> Your Quote" },
  { title: "Image", rule: "![image alt](http://image_url.com)" },
  { title: "Link", rule: "[Link Text](http://your_link.com)" },
];

export default function MarkdownHint() {
  const container = useRef();
  useEffect(() => {
    const container_current=container.current;
    container.current?.classList.remove("opacity-0", "-translate-y-5");
    container.current?.classList.add("opacity-1", "translate-y-0");
    return () => {
      container_current?.classList.remove("opacity-1", "translate-y-0");
      container_current?.classList.add("opacity-0", "-translate-y-5");
    };
  }, []);

  return (
    <div
      ref={container}
      className="transition opacity-0 w-full mt-5 px-2 py-4 bg-white border rounded-md transform -translate-y-5 justify-self-end"
    >
      <h1 className="text-gray-700 text-xl font-semibold">
        General markdown rules
      </h1>
      <ul>
        {mdRules.map(({ title, rule }) => {
          return (
            <li key={title} className="mt-2">
              <p className="text-gray-500 font-semibold">{title}</p>
              <p className="pl-2 text-gray-700 font-semibold font-mono">
                {rule}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="text-center p-2">
        <a
          rel="noreferrer"
          target="_blank"
          className="text-blue-500"
          href="https://www.markdownguide.org/basic-syntax"
        >
          Find out more
        </a>
      </div>
    </div>
  );
}
