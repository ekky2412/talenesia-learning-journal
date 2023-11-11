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
      Apa yang membuatmu
      semangat mengikuti kelas,
      mengerjakan tugas, dan
      mengisi jurnal selama satu 
      bulan ini?
      "

      value={value9}
      onValueChange={handleValue9}
    />
  );
};

export default Section9;
