import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section8 = () => {
  const [value8, setValue8] = useState("");

  const handleValue8 = (e) => {
    setValue8(e.target.value);
  };

  return (
    <QuestionTextArea
      question='Apa saja
kebiasaan-kebiasaan baik
yang sudah kamu terapkan
secara disiplin selama satu
bulan terakhir?'
      value={value8}
      onValueChange={handleValue8}
    />
  );
};

export default Section8;
