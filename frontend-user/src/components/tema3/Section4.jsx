import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section4 = () => {
  const [value4, setValue4] = useState("");

  const handleValue4 = (e) => {
    setValue4(e.target.value);
  };

  return (
    <QuestionTextArea
      question="Untuk menghadapi tantangan yang ada, Ale perlu untuk meletakkan HP jauh-jauh selama kelas berlangsung agar tidak terganggu dengan notifikasinya. Apa yang akan kamu lakukan untuk mengatasi tantanganmu saat belajar?"
      value={value4}
      onValueChange={handleValue4}
    />
  );
};

export default Section4;
