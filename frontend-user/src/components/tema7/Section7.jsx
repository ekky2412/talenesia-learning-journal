import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section7 = () => {
  const [value7, setValue7] = useState("");

  const handleValue7 = (e) => {
    setValue7(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Apa yang terjadi setelah itu sehingga kamu bisa bangkit lagi?
      "

      value={value7}
      onValueChange={handleValue7}
    />
  );
};

export default Section7;