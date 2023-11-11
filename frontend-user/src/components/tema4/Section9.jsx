import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section9 = () => {
  const [value9, setValue9] = useState("");

  const handleValue9 = (e) => {
    setValue9(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Apa yang masih ingin kamu perbaiki dari caramu menyampaikan pendapat?
      "

      value={value9}
      onValueChange={handleValue9}
    />
  );
};

export default Section9;
