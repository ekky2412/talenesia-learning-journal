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
      Jika ada poin yang belum kamu lakukan, coba refleksikan mengapa kamu belum melakukannya?
      "

      value={value7}
      onValueChange={handleValue7}
    />
  );
};

export default Section7;
