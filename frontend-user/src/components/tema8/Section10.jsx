import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section10 = () => {
  const [value10, setValue10] = useState("");

  const handleValue10 = (e) => {
    setValue10(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Apa yang kamu sukai dari cara kamu berpendapat?"

      value={value10}
      onValueChange={handleValue10}
    />
  );
};

export default Section10;