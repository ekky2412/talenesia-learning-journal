import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section11 = () => {
  const [value11, setValue11] = useState("");

  const handleValue11 = (e) => {
    setValue11(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Apa yang masih ingin kamu perbaiki dari cara kamu berpendapat?"

      value={value11}
      onValueChange={handleValue11}
    />
  );
};

export default Section11;