import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section3 = () => {
  const [value43, setValue43] = useState("");

  const handleValue43 = (e) => {
    setValue43(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Apa materi yang masih membuatmu bingung?"
      value={value43}
      onValueChange={handleValue43}
    />

  );
};

export default Section3;
