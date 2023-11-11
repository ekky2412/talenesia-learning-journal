import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section3 = () => {
  const [value3, setValue3] = useState("");

  const handleValue3 = (e) => {
    setValue3(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Selama belajar di tema ini, Ale mengalami tantangan berupa kurang fokus saat mengikuti kelas. Bagi kamu, apa tantangan yang dihadapi saat mempelajari tema ini?"
      value={value3}
      onValueChange={handleValue3}
    />
  );
};

export default Section3;