import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section8 = () => {
  const [value8, setValue8] = useState("");

  const handleValue8 = (e) => {
    setValue8(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Apa yang bisa lakukan untuk mengatasi hambatan tersebut?
      "

      value={value8}
      onValueChange={handleValue8}
    />
  );
};

export default Section8;