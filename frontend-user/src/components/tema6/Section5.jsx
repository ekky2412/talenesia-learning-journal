import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section5 = () => {
  const [value43, setValue43] = useState("");

  const handleValue43 = (e) => {
    setValue43(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Jika ada poin yang belum kamu lakukan, coba refleksikan
      mengapa kamu belum melakukannya?"
      value={value43}
      onValueChange={handleValue43}
    />

  );
};

export default Section5;
