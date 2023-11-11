import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section4 = () => {
  const [value4, setValue4] = useState("");

  const handleValue4 = (e) => {
    setValue4(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Apa saja hal yang baru saja kamu ketahui setelah mengikuti kelas?
      "
      value={value4}
      onValueChange={handleValue4}
    />
  );
};

export default Section4;