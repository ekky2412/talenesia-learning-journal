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
      Coba ingat-ingat ketika kamu menyampaikan pendapat di sesi bersama mentor atau saat mengerjakan tugas kelompok.
      Bagaimana respon orang lain atas pendapatmu?
      "

      value={value9}
      onValueChange={handleValue9}
    />
  );
};

export default Section9;