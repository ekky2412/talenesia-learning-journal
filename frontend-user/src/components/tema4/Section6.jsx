import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section6 = () => {
  const [value4, setValue4] = useState("");

  const handleValue4 = (e) => {
    setValue4(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Apa yang bisa dilakukan untuk mengatasi hambatan tersebut?
      "

      value={value4}
      onValueChange={handleValue4}
    />
  );
};

export default Section6;
