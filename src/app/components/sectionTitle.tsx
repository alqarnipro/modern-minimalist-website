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
    <div className="flex align-middle justify-start">
      <p className="m-0 p-0 text-sm text-gray-500">{text}</p>
      <div
        className={`left-0 bottom-1 w-${underlineWidth} h-0.5 bg-gray-700 mt-3 ms-2`}
      ></div>
    </div>
  );
};

export default SectionTitle;
