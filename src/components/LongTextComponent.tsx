import React from "react";

const LongTextComponent: React.FC<{ text: string }> = ({ text }) => {
  // Split the text into words
  const words = text.split(" ");

  // Check if the number of words exceeds 20
  const displayText =
    words.length > 20 ? (
      <>
        {words.slice(0, 20).join(" ")} ...
        <span style={{ display: "none" }}>{words.slice(20).join(" ")}</span>
      </>
    ) : (
      text
    );

  return <p>{displayText}</p>;
};

export default LongTextComponent;
