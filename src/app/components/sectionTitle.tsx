import Head from "next/head";
import React from "react";

interface SectionTitleProps {
  text: string;
  underlineWidth?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  underlineWidth = "1/4",
}) => {
  return (
    <Head>
      <div className="flex align-middle justify-start">
        <title className="m-0 p-0 text-sm text-gray-500">{text}</title>
        <div
          className={`left-0 bottom-1 w-${underlineWidth} h-0.5 bg-gray-700 mt-3 ms-2`}
        ></div>
      </div>
    </Head>
  );
};

export default SectionTitle;
