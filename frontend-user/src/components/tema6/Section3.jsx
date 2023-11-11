import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section3 = () => {
  const [value43, setValue43] = useState("");

  const handleValue43 = (e) => {
    setValue43(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Dari kelas tema mengurus sarana dan prasarana kantor,
      apa saja materi yang ingin kamu pelajari lebih lanjut?"
      value={value43}
      onValueChange={handleValue43}
    />

  );
};

export default Section3;
