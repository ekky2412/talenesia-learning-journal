import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section5 = () => {
  const [value5, setValue5] = useState("");

  const handleValue5 = (e) => {
    setValue5(e.target.value);
  };

  return (
    <QuestionTextArea
      question="
      Jika ada poin yang belum kamu lakukan, coba refleksikan mengapa kamu belum melakukannya?"

      value={value5}
      onValueChange={handleValue5}
    />
  );
};

export default Section5;
